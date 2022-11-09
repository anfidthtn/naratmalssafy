import { useNavigate } from 'react-router-dom';
import React from "react";
import "../../../styles/MyPage/Card.scss";
import { BsFillStarFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { useEffect } from 'react';

const MyFont = ({ fontData}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fontDataDiv = document.getElementById(`fontData_${fontData.fontSeq}`);
    const fontDataTextArea = document.getElementById(
      `fontData_textarea_${fontData.fontSeq}`
    );
    fontDataDiv.style.fontFamily = fontData.fontFamilyName;
    fontDataTextArea.style.fontFamily = fontData.fontFamilyName;
  }, []);
 
    return(
        <div className="fontData" id={`fontData_${fontData.fontSeq}`}>
          <link rel="stylesheet" type="text/css" href={fontData.webFontPath}/>
        <div className="textarea_box">
          <textarea className="textarea" id={`fontData_textarea_${fontData.fontSeq}`}>{fontData.description}</textarea>
        </div>
        <div className="info_box"         onClick={() => {
              navigate(`/detail/${fontData.fontSeq}`);
            }}>
          <div className="font_info">
            <div className="font_first_row_box">
              <div className="font_name">{fontData.fontName}</div>
              <div className="font_favorite_download_info">
                <div className="favorite_info">
                  <span className="icon">{BsFillStarFill()}</span>
                  <span className="num"> {fontData.favCount}</span>
                </div>
                <div className="download_info">
                  <span className="icon">{FiDownload()}</span>
                  <span className="num"> {fontData.downloadCount}</span>
                </div>
              </div>
            </div>
            <div className="font_user_info">
              <span style={{ fontSize: "10px" }}>Designed By.</span>
              <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                {fontData.creator.location}_{fontData.creator.name}_{fontData.creator.nickname}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default MyFont;
