import React from "react";
import "../styles/MainPage/MainPage.scss";
import mainLogo from "../assets/mainicon.png";
import Grid from "@mui/material/Grid";
import font_img from "../assets/text.png";
import computer_img from "../assets/counseling.png";
import no_money_img from "../assets/no-money.png";
import overwork_img from "../assets/overwork.png";
import introduce_ucc from "../assets/example.mp4";
import process_1 from "../assets/freeEvent_make_process_1.png";
import process_2 from "../assets/freeEvent_make_process_2.png";
import process_3 from "../assets/freeEvent_make_process_3.png";

import { Divider } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="main_img_box">
        <img
          className="main_img"
          src={mainLogo}
          alt="mainlogo"
          width={"100%"}
        />
      </div>

      <div className="main_introduce_box">
        <div className="main_introduce_header custom_m_y_30">
          너만의 폰트를{" "}
          <span style={{ textDecorationLine: "underline" }}>무료로</span>{" "}
          만들어봐!
        </div>
        <div className="main_introduce_info_box">
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} md={3} item>
              <div className="main_introduce_info">
                <div className="main_introduce_info_img">
                  <img src={font_img} alt="font" width={"128px"} />
                </div>
                <div className="main_introduce_info_text">
                  세상에 없는 독특한 폰트를 원한다면
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={3} item>
              <div className="main_introduce_info">
                <div className="main_introduce_info_img">
                  <img src={computer_img} alt="font" width={"128px"} />
                </div>
                <div className="main_introduce_info_text">
                  손글씨를 컴퓨터로 편하게 쓰고 싶다면
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={3} item>
              <div className="main_introduce_info">
                <div className="main_introduce_info_img">
                  <img src={overwork_img} alt="font" width={"128px"} />
                </div>
                <div className="main_introduce_info_text">
                  무료 폰트들이 질린다면
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={3} item>
              <div className="main_introduce_info">
                <div className="main_introduce_info_img">
                  <img src={no_money_img} alt="font" width={"128px"} />
                </div>
                <div className="main_introduce_info_text">
                  폰트에 금액을 지불하기 아깝다면
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="main_introduce_info_ucc_box">
            <video
              src={introduce_ucc}
              autoPlay
              loop
              playsInline
              muted
              controls
              preload="auto"
              className="main_introduce_info_ucc"
            ></video>
          </div>
        </div>
      </div>
      <div className="custom_m_y_30">
        <Divider />
      </div>

      <div className="font_make_box">
        <div className="font_make_header">폰트 만들기 아주 쉬워요!</div>
        <div className="font_make_info_box">
          <div className="font_make_info_text_box">
            <div className="font_make_info_text">
              <ul>
                <li>1. 12자를 손으로 적어주세요</li>
                <li>2. 휴대폰으로 찍어주세요</li>
                <li>3. 업로드 후 글자 선택하면 끝!</li>
              </ul>
            </div>
            <div className="font_make_info_button_box">
              <button>폰트 제작하기</button>
            </div>
          </div>
          <div className="font_make_info_carousel">
            <Carousel height={"300px"} autoPlay>
              {[
                <div key={1}>
                  <img src={process_1} alt="" width={"100%"} />
                </div>,
                <div key={2}>
                  <img src={process_2} alt="" width={"100%"} />
                </div>,
                <div key={3}>
                  <img src={process_3} alt="" width={"100%"} />
                </div>,
              ]}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
