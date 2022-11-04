import React, { useState } from "react";
import "../styles/FontMakePage/FontMakePage.scss";
import ready_1 from "../assets/font_make/ready_1.png";
import ready_2 from "../assets/font_make/ready_2.png";
import ready_3 from "../assets/font_make/ready_3.png";
import ready_4 from "../assets/font_make/ready_4.png";
import handWritingExample from "../assets/font_make/hand_writing_example.png";

import { useEffect } from "react";
import { useRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const FontMakePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadImage, setUploadImage] = useState(null);

  const [cropStep, setCropStep] = useState(0);

  const [crop, setCrop] = useState({
    aspect: 1280 / 300,
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    unit: "px",
  });
  const [completedCrop, setCompletedCrop] = useState({
    aspect: 1280 / 300,
    x: 0,
    y: 0,
    width: 504,
    height: 118,
    unit: "px",
  });

  const [croppedImageUrl, setCroppedImageUrl] = useState([]);

  const imgRef = useRef();

  const inputImageRef = useRef();

  const selectedWords = [
    "다",
    "람",
    "쥐",
    "헌",
    "쳇",
    "바",
    "퀴",
    "에",
    "돌",
    "고",
    "파",
  ];
  let nowImage = null;

  useEffect(() => {
    const makeProgressDiv = document.getElementsByClassName("make_progress");
    const currentNumDiv = document.getElementsByClassName("current_num");
    for (let index = 0; index < makeProgressDiv.length; index++) {
      const element = makeProgressDiv[index];
      element.classList.remove("current_state_display");
      currentNumDiv[index].classList.remove("current_state_num_display");
    }

    if (currentStep <= 4) {
      makeProgressDiv[0].classList.add("current_state_display");
      currentNumDiv[0].classList.add("current_state_num_display");
    } else {
      makeProgressDiv[1].classList.add("current_state_display");
      currentNumDiv[1].classList.add("current_state_num_display");
    }
  }, [currentStep]);

  function clickStepButton(type) {
    setCurrentStep(
      type === "prev"
        ? currentStep === 1
          ? 1
          : currentStep - 1
        : currentStep + 1
    );
  }

  function UploadImageClick() {
    if (!inputImageRef.current) {
      return;
    }

    inputImageRef.current.click();
  }

  function onUploadImage(e) {
    const fileBlob = e.target.files[0];
    if (fileBlob.type.split("/")[0] !== "image") {
      alert("이미지 파일을 업로드 해주세요!");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setUploadImage(reader.result);
        resolve();
      };
    });
  }

  const onLoad = (img) => {
    imgRef.current = img.target;
  };

  function removeCanvas() {
    if (!completedCrop || !imgRef.current) {
      return;
    }

    setCroppedImageUrl([...croppedImageUrl.slice(0, -1)]);
    setCropStep(cropStep === 0 ? cropStep : cropStep - 1);
  }

  // 크롭 영역 canvas에 넣기
  const createCanvas = () => {
    if (!completedCrop || !imgRef.current) {
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const crop = completedCrop;

    const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
    const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop?.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      imgRef.current,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    const base64Image = canvas.toDataURL("image/png");
    setCrop({ ...crop, x: crop.x + 50 });
    setCroppedImageUrl([...croppedImageUrl, base64Image]);
    setCropStep(cropStep === 10 ? cropStep : cropStep + 1);
  };

  return (
    <div className="FontMakePage">
      <div className="current_step_box">
        <div className="make_progress" id="make_progress_1">
          <span className="current_state_num_display current_num">1.</span>
          &nbsp; 준비하기
        </div>
        <div className="make_progress" id="make_progress_2">
          <span className="current_num">2.</span>&nbsp; 업로드
        </div>
        <div className="make_progress" id="make_progress_3">
          <span className="current_num">3.</span>&nbsp; 최종 확인
        </div>
        <div className="make_progress" id="make_progress_4">
          <span className="current_num">4.</span>&nbsp; 완료
        </div>
      </div>
      <div className="make_box">
        {[1, 2, 3, 4].map((_, i) => {
          switch (i) {
            case 0:
              nowImage = ready_1;
              break;
            case 1:
              nowImage = ready_2;
              break;
            case 2:
              nowImage = ready_3;
              break;
            case 3:
              nowImage = ready_4;
              break;
            default:
              break;
          }

          return (
            <img
              className="make_ready_img"
              src={nowImage}
              alt="준비1"
              key={i}
              style={
                currentStep === i + 1
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
          );
        })}
        {currentStep === 5 && (
          <div className="make_upload_box" id="">
            <div className="image_upload_preview">
              {uploadImage ? (
                <img
                  src={uploadImage}
                  alt="이미지를 업로드 해주세요"
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "10px" }}
                />
              ) : (
                <div className="upload_image_text_box">
                  <div className="upload_image_text">
                    다음과 같이 이미지를 업로드 해주세요!
                  </div>
                  <img
                    src={handWritingExample}
                    alt="손글씨 예시"
                    width={"100%"}
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              ref={inputImageRef}
              style={{ display: "none" }}
              onChange={onUploadImage}
            />
            <button className="image_upload_button" onClick={UploadImageClick}>
              <span className="image_upload_text">이미지 고르기</span>
            </button>
          </div>
        )}
        {currentStep === 6 && (
          <>
            <div className="selected_image_preview_box">
              <div className="selected_info_text">
                <span className="selected_word">{selectedWords[cropStep]}</span>
                를 잡아 주세요
              </div>
            </div>
            <div className="crop_image_box">
              <ReactCrop
                crop={crop}
                onComplete={setCompletedCrop}
                onChange={(c) => setCrop(c)}
              >
                <img
                  src={uploadImage}
                  onLoad={onLoad}
                  alt="이미지"
                  width={"100%"}
                  height={"100%"}
                />
              </ReactCrop>
            </div>
            <div className="crop_click_button_box">
              <button onClick={removeCanvas} className="crop_click_button">
                {"〈"}
              </button>
              <div className="crop_step">{cropStep + 1} / 11</div>
              <button onClick={createCanvas} className="crop_click_button">
                {"〉"}
              </button>
            </div>
          </>
        )}
        <div className="prev_next_button_box">
          <button
            className={
              currentStep === 1 ? "prev_button noHover" : "prev_button"
            }
            onClick={() => clickStepButton("prev")}
          >
            이전
          </button>
          <button
            className="next_button"
            onClick={() => clickStepButton("next")}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default FontMakePage;
