import React, { useCallback, useEffect, useState } from "react";
import "../styles/FontSearchPage/FontSearchPage.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Divider, Grid, TextField, useMediaQuery } from "@mui/material";
import { FcSearch } from "react-icons/fc";
import { BsFonts } from "react-icons/bs";
import FontSearchItem from "../components/FontSearch/FontSearchItem";
import { useInView } from "react-intersection-observer";

const FontSearchPage = () => {
  const [searchCondition, setSearchCondition] = useState("nickName");
  const [searchText, setSearchText] = useState("");
  const [searchOption, setSearchOption] = useState("latest");
  const [fontData, setFontData] = useState([
    {
      fontUser: "구미_유지홍_짐닥",
      fontName: "지홍체",
      favoriteCount: 140,
      downloadCount: 300,
      fontDownloadAddress:
        "https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap",
      fontFamilyName: "Do Hyeon",
    },
    {
      fontUser: "구미_채민지_2반민지",
      fontName: "우울할땐 우울체",
      favoriteCount: 150,
      downloadCount: 4400,
      fontDownloadAddress:
        "https://fonts.googleapis.com/css2?family=Poor+Story&display=swap",
      fontFamilyName: "Poor Story",
    },
    {
      fontUser: "구미_한제규_알고리즘왕",
      fontName: "알고리즘전용체",
      favoriteCount: 40,
      downloadCount: 5,
      fontDownloadAddress:
        "https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap",
      fontFamilyName: "Black Han Sans",
    },
    {
      fontUser: "구미_가수왕_폰트왕",
      fontName: "가수체",
      favoriteCount: 1040,
      downloadCount: 30000,
      fontDownloadAddress:
        "https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap",
      fontFamilyName: "Nanum Pen Script",
    },
    {
      fontUser: "구미_조경수_폰트마마",
      fontName: "경수우울체",
      favoriteCount: 350,
      downloadCount: 100,
      fontDownloadAddress:
        "https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap",
      fontFamilyName: "Gamja Flower",
    },
    {
      fontUser: "구미_임현탁_막걸리가좋아",
      fontName: "현탁막걸리체",
      favoriteCount: 200,
      downloadCount: 10,
      fontDownloadAddress:
        "https://fonts.googleapis.com/css2?family=Black+And+White+Picture&display=swap",
      fontFamilyName: "Black And White Picture",
    },
  ]);

  const [fontEditorText, setFontEditorText] = useState("만나서 반갑습니다.");

  // 무한 스크롤
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const isMobile600 = useMediaQuery("(max-width:600px)");

  const handleChangeCondition = (event) => {
    setSearchCondition(event.target.value);
  };
  const handleChangeText = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    if (!isMobile600) {
      document
        .getElementById(searchOption)
        .classList.add("font_search_opt_select");
    }

    //fontData axios로 받기
  }, []);

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = useCallback(async () => {
    setLoading(true);
    // await axios.get(`${Your Server Url}/page=${page}`).then((res) => {
    //   setItems(prevState => [...prevState, res])
    // })
    setLoading(false);
  }, [page]);

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  const enterClick = (e) => {
    //검색 조건 받아오는 aixos 서버 통신
    if (e.key === "Enter") {
      //검색 처리
    } else {
    }
  };

  const clickSearchOption = (e) => {
    if (isMobile600) {
      setSearchOption(e.target.value);
    } else {
      setSearchOption(e.target.id);
      const fontSearchOptName = document.getElementsByClassName(
        "font_search_opt_name"
      );

      for (let index = 0; index < fontSearchOptName.length; index++) {
        const element = fontSearchOptName[index];
        element.classList.remove("font_search_opt_select");

        if (element.id === e.target.id) {
          element.classList.add("font_search_opt_select");
        }
      }
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
            <InputLabel id="demo-simple-select-label">검색</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchCondition}
              label="검색"
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

      <div className="font_search_opt">
        {isMobile600 ? (
          <>
            <FormControl
              sx={{ width: 120, marginBottom: "15px", marginRight: "20px" }}
            >
              <InputLabel id="demo-simple-select-label2">정렬</InputLabel>
              <Select
                labelId="demo-simple-select-label2"
                id="demo-simple-select2"
                value={searchOption}
                label="정렬"
                onChange={clickSearchOption}
              >
                <MenuItem value={"latest"}>최신순</MenuItem>
                <MenuItem value={"oldest"}>오래된 순</MenuItem>
                <MenuItem value={"favorite"}>즐겨찾기 순</MenuItem>
                <MenuItem value={"download"}>다운로드 순</MenuItem>
              </Select>
            </FormControl>
          </>
        ) : (
          <ul style={{ marginRight: "20px" }}>
            <li
              className="font_search_opt_name"
              id="latest"
              onClick={clickSearchOption}
            >
              최신순
            </li>
            <li
              className="font_search_opt_name"
              id="oldest"
              onClick={clickSearchOption}
            >
              오래된 순
            </li>
            <li
              className="font_search_opt_name"
              id="favorite"
              onClick={clickSearchOption}
            >
              즐겨찾기 순
            </li>
            <li
              className="font_search_opt_name"
              id="download"
              onClick={clickSearchOption}
            >
              다운로드 순
            </li>
          </ul>
        )}
        <div className="font_text_editor">
          <span>
            <BsFonts size={30} />
          </span>
          <input
            type="text"
            placeholder="원하는 글자를 입력하세요"
            value={fontEditorText}
            onChange={(e) => {
              setFontEditorText(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="custom_m_y_10">
        <Divider />
      </div>

      <Grid container spacing={3}>
        {fontData.map((data, idx) =>
          fontData.length - 1 === idx ? (
            <Grid key={idx} ref={ref} xs={12} sm={6} md={4} lg={3} item>
              <FontSearchItem
                idx={idx}
                fontData={data}
                fontEditorText={fontEditorText}
              />
            </Grid>
          ) : (
            <Grid key={idx} xs={12} sm={6} md={4} lg={3} item>
              <FontSearchItem
                idx={idx}
                fontData={data}
                fontEditorText={fontEditorText}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};

export default FontSearchPage;
