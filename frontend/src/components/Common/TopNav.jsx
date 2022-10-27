import * as React from "react";
import Button from "@mui/material/Button";

import "../../styles/Common/TopNav.scss";
import navicon from "../../assets/navicon.png";

export default function TopNav() {
  return (
    <div className="TopNav">
      <div className="TopNav__MainIconBox">
        <img className="TopNav__Mainicon" src={navicon} alt="Navicon"></img>
      </div>
      <div className="TopNav__LinkBox">
        <Button className="TopNav__Link">폰트제작</Button>
        <Button className="TopNav__Link">폰트검색</Button>
        <Button className="TopNav__Link">ForSSAFY</Button>
        <Button className="TopNav__Link">서명만들기</Button>
        <Button className="TopNav__Link">마이페이지</Button>
        <Button className="TopNav__Link">로그인</Button>
      </div>
    </div>
  );
}
