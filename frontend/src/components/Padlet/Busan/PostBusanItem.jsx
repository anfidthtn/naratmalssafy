import React, { useEffect, useState } from "react";
import "../../../styles/FontSearchPage/FontSearchItem.scss";

const PostBusanItem = ({ postData }) => {
    const [subFontEditorText, setSubFontEditorText] = useState(postData.content);
  
    useEffect(() => {
      setSubFontEditorText(postData.content);
    }, [postData.content]);
  
    useEffect(() => {
      const fontDataDiv = document.getElementById(`postData_${postData.fontSeq}`);
      const fontDataTextArea = document.getElementById(
        `postData_textarea_${postData.fontSeq}`
      );
      const postColor = document.getElementById(`postColor_${postData.fontSeq}`)
      fontDataDiv.style.fontFamily = postData.fontFamilyName;
      fontDataTextArea.style.fontFamily = postData.fontFamilyName;
      postColor.style.backgroundColor = postData.color
    }, []);
  
    return (
      <div className="fontData" id={`postData_${postData.fontSeq}`}>
        <link
          rel="stylesheet"
          type="text/css"
          href={postData.webFontPath}
        />
        <div className="textarea_box">
          <textarea
            id={`postData_textarea_${postData.fontSeq}`}
            className="textarea"
            value={subFontEditorText}
          ></textarea>
        </div>
        <div
          className="info_box" id={`postColor_${postData.fontSeq}`}
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
export default PostBusanItem;