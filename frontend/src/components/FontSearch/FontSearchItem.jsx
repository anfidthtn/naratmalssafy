import React, { useEffect, useState } from "react";
import "../../styles/FontSearchPage/FontSearchItem.scss";
import { BsFillStarFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const FontSearchItem = ({ idx, fontData, fontEditorText }) => {
  const [subFontEditorText, setSubFontEditorText] = useState(fontEditorText);

  const navigate = useNavigate();

  useEffect(() => {
    setSubFontEditorText(fontEditorText);
  }, [fontEditorText]);

  useEffect(() => {
    const fontDataDiv = document.getElementById(`fontData_${idx}`);
    const fontDataTextArea = document.getElementById(
      `fontData_textarea_${idx}`
    );
    fontDataDiv.style.fontFamily = fontData.fontFamilyName;
    fontDataTextArea.style.fontFamily = fontData.fontFamilyName;
  }, []);

  return (
    <div className="fontData" id={`fontData_${idx}`}>
      <link rel="stylesheet" type="text/css" href={fontData.webFontPath} />
      <div className="textarea_box">
        <textarea
          id={`fontData_textarea_${idx}`}
          className="textarea"
          value={subFontEditorText}
          onChange={(e) => {
            setSubFontEditorText(e.target.value);
          }}
        ></textarea>
      </div>
      <div
        className="info_box"
        onClick={() => {
          navigate(`/detail/${fontData.fontSeq}`);
        }}
      >
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
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              {fontData.Creator.location +
                "_" +
                fontData.Creator.name +
                "_" +
                fontData.Creator.nickname}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontSearchItem;
