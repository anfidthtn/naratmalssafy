import React, { useState } from "react";
import "../styles/FontSearchPage/FontSearchPage.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Divider, TextField, useMediaQuery } from "@mui/material";
import { FcSearch } from "react-icons/fc";

const FontSearchPage = () => {
  const [searchCondition, setSearchCondition] = useState("nickName");
  const [searchText, setSearchText] = useState("");

  const handleChangeCondition = (event) => {
    setSearchCondition(event.target.value);
  };
  const handleChangeText = (event) => {
    setSearchText(event.target.value);
  };

  const enterClick = (e) => {
    if (e.key === "Enter") {
      //검색 처리
    } else {
    }
  };

  return (
    <div className="FontSearchPage">
      <div className="font_search_header">
        <h1>원하는 폰트를 검색하세요!</h1>
        <div className="font_search_info_text">
          <span>지역_이름_닉네임</span> 형식으로 검색하면 자세히 검색
          가능합니다.
        </div>
        <div className="font_search_info_text">
          다른 싸피생들의 폰트들을 구경하고 이용하세요!
        </div>
        <div className="font_search_info_text">
          무료로 받을 수 있고 비상업적 용도로 이용가능합니다!
        </div>
      </div>
      <div className="font_search_box">
        <div className="font_search_dropdown">
          <FormControl sx={{ width: 120 }}>
            <InputLabel id="demo-simple-select-label">조건</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchCondition}
              label="조건"
              onChange={handleChangeCondition}
            >
              <MenuItem value={"nickName"}>닉네임</MenuItem>
              <MenuItem value={"fontName"}>폰트 이름</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="font_search_text">
          <FormControl sx={{ width: 480 }}>
            <TextField
              id="standard-basic"
              label={
                searchCondition === "nickName"
                  ? "닉네임 or 지역 or 이름을 입력해주세요"
                  : "폰트 이름을 입력해주세요"
              }
              variant="standard"
              fullWidth
              inputProps={{ style: { fontSize: 20, fontWeight: "bold" } }}
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
              onChange={handleChangeText}
              value={searchText}
              onKeyDown={enterClick}
            />
          </FormControl>
          <div className="search_icon_box">
            <FcSearch size={50} onClick={enterClick} />
          </div>
        </div>
      </div>
      <div className="custom_m_y_60">
        <Divider />
      </div>
    </div>
  );
};

export default FontSearchPage;
