import React from "react";
import "../../styles/FontSearchPage/FontSearchItem.scss";
import { BsFillStarFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

const FontSearchItem = ({ fontData }) => {
  return (
    <div className="fontData">
      <div className="textarea_box">
        <textarea className="textarea">안녕하세요 반갑습니다</textarea>
      </div>
      <div className="info_box">
        <div className="font_info">
          <div className="font_first_row_box">
            <div className="font_name">{fontData.fontName}</div>
            <div className="font_favorite_download_info">
              <div className="favorite_info">
                <span className="icon">{BsFillStarFill()}</span>
                <span className="num"> {fontData.favoriteCount}</span>
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
              {fontData.fontUser}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontSearchItem;
