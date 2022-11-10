import React, { useEffect, useState } from "react";
import "../../../styles/FontSearchPage/FontSearchItem.scss";

const PostDaejeonItem = ({ idx, postData }) => {
    const [subFontEditorText, setSubFontEditorText] = useState(postData.content);
  
    useEffect(() => {
      setSubFontEditorText(postData.content);
    }, [postData.content]);
  
    useEffect(() => {
      const fontDataDiv = document.getElementById(`daejeon_${idx}`);
      const fontDataTextArea = document.getElementById(
        `daejeon_textarea_${idx}`
      );
      const postColor = document.getElementById(`daejeon_color_${idx}`)
          // 서버에서 웹폰트 넘겨줄 경우 폰트 다운로드 후 적용

    // let font = new FontFace(
    //   "Gamja Flower",
    //   `url(https://fonts.gstatic.com/s/gamjaflower/v20/6NUR8FiKJg-Pa0rM6uN40Z4kzJdTdNPFFRJ7lwb-CZch2ydaLb0K.0.woff2) format("woff2")`
    // );
    // font
    //   .load()
    //   .then(function (loadedFont) {
    //     document.fonts.add(loadedFont);
    //     //do something after the font is loaded
    //     console.log(loadedFont);
    //   })
    //   .catch(function (error) {
    //     // error occurred
    //   });


    // fontDataDiv.style.fontFamily = "Gamja Flower";
    fontDataDiv.style.fontFamily = postData.fontFamilyName;
    fontDataTextArea.style.fontFamily = postData.fontFamilyName;
    postColor.style.backgroundColor = postData.color
    }, []);
  
    return (
      <div className="fontData" id={`daejeon_${idx}`}>
        <link
          rel="stylesheet"
          type="text/css"
          href={postData.webFontPath}
        />
        <div className="textarea_box">
          <textarea
            id={`daejeon_textarea_${idx}`}
            className="textarea"
            value={subFontEditorText}
          ></textarea>
        </div>
        <div
          className="info_box" id={`daejeon_color_${idx}`}
        >
          <div className="font_info">
            <div className="font_first_row_box">
            </div>
            <div className="font_user_info">
              <span style={{ fontSize: "10px" }}>Created By.</span>
              <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              {postData.userLocation}_{postData.userName}_{postData.userNickname}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default PostDaejeonItem;