import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyDataSet } from "../store/dummy";
import "../styles/FontDetailPage/FontDetailPage.scss";
import { BiStar } from "react-icons/bi";
import { TbAlignLeft, TbAlignCenter, TbAlignRight } from "react-icons/tb";
import { SketchPicker } from "react-color";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Slider } from "@mui/material";

import bgImage_1 from "../assets/textarea_img/background_1.jpg";

const FontDetailPage = () => {
  const [fontData, setfontData] = useState({});
  const [fontTrialConfig, setFontTrialConfig] = useState({
    color: "#000000",
    size: 20,
    lineHeight: 1, //1~2.1
    letterSpacing: 1, //1px~10px
    align: "left",
  });
  // 파라미터로 넘어오는 id 값 받기
  const { id } = useParams();

  useEffect(() => {
    // axios로 폰트 데이터 요청
    setfontData(dummyDataSet[id - 1]);
  }, []);

  function changeConfig(e, name, value) {
    setFontTrialConfig({
      ...fontTrialConfig,
      [e.target.name || name]: e.target.value || value,
    });

    if (name === "align" || e.target.name === "align") {
      const alignDivs = document.getElementsByClassName("font_align_each_box");

      for (let index = 0; index < alignDivs.length; index++) {
        const element = alignDivs[index];

        element.classList.remove("select_font_align");
        if (element.id === `font_align_${e.target.value || value}`) {
          element.classList.add("select_font_align");
        }
      }
    }
  }

  function clickPicker(e) {
    const fullWidthHeightDiv = document.getElementById(
      "fontDetailPage_full_width_height"
    );
    const colorClickBox = document.getElementById(
      "fontDetailPage_color_select"
    );

    const fontColorPickerBox = document.getElementById(
      "fontDetailPage_font_color_picker_box"
    );

    const spacingPickerBox = document.getElementById(
      "fontDetailPage_spacing_picker_box"
    );

    const spacingSelectBox = document.getElementById(
      "fontDetailPage_spacing_select"
    );

    fullWidthHeightDiv.style.visibility = "visible";
    if (e.target.id === "fontDetailPage_full_width_height") {
      fullWidthHeightDiv.style.visibility = "hidden";
      fontColorPickerBox.style.display = "none";
      spacingPickerBox.style.display = "none";
    } else if (e.target.id === "fontDetailPage_spacing_select") {
      spacingPickerBox.style.display = "block";

      const spacingSelectBoxRect = spacingSelectBox.getBoundingClientRect();
      spacingPickerBox.style.top =
        window.scrollY + spacingSelectBoxRect.bottom + "px";

      spacingPickerBox.style.left =
        window.scrollX + spacingSelectBoxRect.left + "px";
    } else {
      fontColorPickerBox.style.display = "block";

      const colorClickBoxRect = colorClickBox.getBoundingClientRect();
      fontColorPickerBox.style.top =
        window.scrollY + colorClickBoxRect.bottom + "px";
      fontColorPickerBox.style.left =
        window.scrollX + colorClickBoxRect.left + "px";
    }
  }

  return (
    <div className="FontDetailPage">
      <div className="first_row_box">
        <div className="font_info_box">
          <div className="font_name">{fontData.fontName}</div>
          <div className="font_user">
            Designed By.{" "}
            <span style={{ fontSize: "1.5rem" }}>{fontData.fontUser}</span>{" "}
          </div>
        </div>
        <div className="font_popular_info_box">
          <div className="font_favorite_box">
            <BiStar size={30} color="orange" />
            <span style={{ fontSize: "20px", marginLeft: "3px" }}>
              즐겨찾기
            </span>{" "}
          </div>
          <div className="font_favorite_download_info_box">
            <div className="font_favorite_count">
              <span className="font_size_20">즐겨찾기 수:</span>{" "}
              <span className="font_size_30 font_weight_bold">
                {fontData.favoriteCount}
              </span>{" "}
            </div>
            <div className="font_download_count">
              <span className="font_size_20">다운로드 수:</span>{" "}
              <span className="font_size_30 font_weight_bold">
                {fontData.downloadCount}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="second_row_box">
        <div className="font_oneline_header">폰트 한줄 설명</div>
        <div className="font_oneline_mention">
          이 폰트는 우울할 때 쓰시면 아주 효과가 만점인 폰트입니다.!
        </div>
      </div>
      <div className="third_row_box">
        <div className="text_area_box">
          <textarea id={`FontDetailPage_textarea_${fontData.id}`}></textarea>
        </div>
        <div className="control_panel">
          <div className="font_editor_panel">
            <div className="font_editor_panel_header">폰트 스타일</div>
            <div className="font_editor_panel_first_row">
              <FormControl sx={{ minWidth: 120 }} size="normal">
                <InputLabel id="demo-select-small">크기</InputLabel>
                <Select
                  name="size"
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={fontTrialConfig.size}
                  label="Size"
                  onChange={changeConfig}
                >
                  <MenuItem value={10}>10px</MenuItem>
                  <MenuItem value={20}>20px</MenuItem>
                  <MenuItem value={30}>30px</MenuItem>
                  <MenuItem value={40}>40px</MenuItem>
                </Select>
              </FormControl>
              <div className="font_align_box">
                <ul>
                  <li
                    className="select_font_align font_align_each_box"
                    id="font_align_left"
                    onClick={(e) => changeConfig(e, "align", "left")}
                  >
                    <TbAlignLeft size={30} />
                  </li>
                  <li
                    className="font_align_each_box"
                    id="font_align_center"
                    onClick={(e) => changeConfig(e, "align", "center")}
                  >
                    <TbAlignCenter size={30} />
                  </li>
                  <li
                    className="font_align_each_box"
                    id="font_align_right"
                    onClick={(e) => changeConfig(e, "align", "right")}
                  >
                    <TbAlignRight size={30} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="font_editor_panel_second_row">
              <div
                className="font_color_select_box"
                id="fontDetailPage_color_select"
                onClick={clickPicker}
              >
                <div
                  className="font_color_current"
                  id="fontDetailPage_color_select_current"
                  onClick={clickPicker}
                ></div>
              </div>
              <div
                className="font_spacing_select_box"
                id="fontDetailPage_spacing_select"
                onClick={clickPicker}
              >
                자간 및 행간
              </div>
            </div>
          </div>
          <div className="textarea_background_img_box">
            <div className="textarea_background_img_box_header">
              배경 이미지
            </div>
            <div className="textarea_background_img_grid">
              <Grid container spacing={1}>
                <Grid xs={6} sm={6} md={6} item>
                  <div className="bg_img">
                    <img
                      src={bgImage_1}
                      alt="font"
                      width={"135px"}
                      height={"130px"}
                    />
                  </div>
                </Grid>
                <Grid xs={6} sm={6} md={6} item>
                  <div className="bg_img">
                    <img
                      src={bgImage_1}
                      alt="font"
                      width={"135px"}
                      height={"130px"}
                    />
                  </div>
                </Grid>
                <Grid xs={6} sm={6} md={6} item>
                  <div className="bg_img">
                    <img
                      src={bgImage_1}
                      alt="font"
                      width={"135px"}
                      height={"130px"}
                    />
                  </div>
                </Grid>
                <Grid xs={6} sm={6} md={6} item>
                  <div className="bg_img">
                    <img
                      src={bgImage_1}
                      alt="font"
                      width={"135px"}
                      height={"130px"}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>

      {/* 바깥 div 영역 */}
      <div
        className="font_picker_box"
        id="fontDetailPage_font_color_picker_box"
      >
        <SketchPicker
          color={fontTrialConfig.color}
          onChange={(color) => {
            setFontTrialConfig({ ...fontTrialConfig, color: color.hex });
            document.getElementById(
              "fontDetailPage_color_select_current"
            ).style.backgroundColor = fontTrialConfig.color;
          }}
        />
      </div>
      <div
        className="font_spacing_picker_box"
        id="fontDetailPage_spacing_picker_box"
      >
        <div className="spacing_picker_header">자간</div>
        <Slider
          defaultValue={1}
          aria-label="Default"
          valueLabelDisplay="auto"
          max={10}
          min={1}
          name="letterSpacing"
          value={fontTrialConfig.letterSpacing}
          onChange={changeConfig}
        />
        <div className="spacing_picker_header">행간</div>
        <Slider
          step={0.1}
          min={1}
          max={2.1}
          name="lineHeight"
          value={fontTrialConfig.lineHeight}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={changeConfig}
        />
      </div>
      <div
        className="full_width_height"
        id="fontDetailPage_full_width_height"
        onClick={clickPicker}
      ></div>
    </div>
  );
};

export default FontDetailPage;
