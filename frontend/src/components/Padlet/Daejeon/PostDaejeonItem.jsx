import React, { useEffect, useState } from "react";
import "../../../styles/FontSearchPage/FontSearchItem.scss";

const PostDaejeonItem = ({ idx, postData }) => {
    const [subFontEditorText, setSubFontEditorText] = useState(postData.padlet_contents_comments);
  
    useEffect(() => {
      setSubFontEditorText(postData.padlet_contents_comments);
    }, [postData.padlet_contents_comments]);
  
    useEffect(() => {
      const fontDataDiv = document.getElementById(`postData_${idx}`);
      const fontDataTextArea = document.getElementById(
        `postData_textarea_${idx}`
      );
      fontDataDiv.style.fontFamily = postData.fontFamilyName;
      fontDataTextArea.style.fontFamily = postData.fontFamilyName;
    }, []);
  
    return (
      <div className="fontData" id={`postData_${idx}`}>
        <link
          rel="stylesheet"
          type="text/css"
          href={postData.padlet_contents_font}
        />
        <div className="textarea_box">
          <textarea
            id={`postData_textarea_${idx}`}
            className="textarea"
            value={subFontEditorText}
          ></textarea>
        </div>
        <div
          className="info_box"
        >
          <div className="font_info">
            <div className="font_first_row_box">
            </div>
            <div className="font_user_info">
              <span style={{ fontSize: "10px" }}>Designed By.</span>
              <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                {postData.padlet_contents_writer}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default PostDaejeonItem;