import { useNavigate } from 'react-router-dom';
import React from "react";
import "../../../styles/MyPage/Card.scss";
import { BsFillStarFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { useEffect } from 'react';

const MyFavoritesFont = ({key, id, fontFamilyName, creater, name, path, preview, download, favorite}) => {
  useEffect(() => {
    const fontDataDiv = document.getElementById(`fontData_${id}`);
    const fontDataTextArea = document.getElementById(
      `fontData_textarea_${id}`
    );
    fontDataDiv.style.fontFamily = fontFamilyName;
    fontDataTextArea.style.fontFamily = fontFamilyName;
  }, []);
  return(
      <div className="fontData" id={`fontData_${id}`}>
        <link rel="stylesheet" type="text/css" href={path}/>
      <div className="textarea_box">
        <textarea className="textarea" id={`fontData_textarea_${id}`}>안녕하세요 반갑습니다</textarea>
      </div>
      <div className="info_box">
        <div className="font_info">
          <div className="font_first_row_box">
            <div className="font_name">{name}</div>
            <div className="font_favorite_download_info">
              <div className="favorite_info">
                <span className="icon">{BsFillStarFill()}</span>
                <span className="num"> {favorite}</span>
              </div>
              <div className="download_info">
                <span className="icon">{FiDownload()}</span>
                <span className="num"> {download}</span>
              </div>
            </div>
          </div>
          <div className="font_user_info">
            <span style={{ fontSize: "10px" }}>Designed By.</span>
            <span style={{ fontWeight: "bold", fontSize: "12px" }}>
              {creater}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavoritesFont;
