import * as React from "react";
import "../../styles/Common/TopNav.scss";
import navicon from "../../assets/navicon.png";
import { useMediaQuery } from "@mui/material";

export default function TopNav() {
  const isMobile1024 = useMediaQuery("(max-width:1024px)");

  return (
    <div className="TopNav">
      <div className="TopNav__container">
        <div className="TopNav__MainIconBox">
          <img className="TopNav__Mainicon" src={navicon} alt="Navicon"></img>
        </div>
        {!isMobile1024 ? (
          <div className="TopNav__LinkBox">
            <ul>
              <li>폰트제작</li>
              <li>폰트검색</li>
              <li>ForSSAFY</li>
              <li>서명만들기</li>
              <li>마이페이지</li>
              <li>로그인</li>
            </ul>
          </div>
        ) : (
          <div className="TopNav__hambergerBox">
            <input type="checkbox" id="check_box" />
            <label htmlFor="check_box">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div id="side_menu">
              <ul>
                <li className="side_menu_item">폰트제작</li>
                <li className="side_menu_item">폰트검색</li>
                <li className="side_menu_item">ForSSAFY</li>
                <li className="side_menu_item">서명만들기</li>
                <li className="side_menu_item">마이페이지</li>
                <li className="side_menu_item">로그인</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
