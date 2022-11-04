import * as React from "react";
import "../../styles/Common/TopNav.scss";
import navicon from "../../assets/navicon.png";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TopNav() {
  const isMobile1024 = useMediaQuery("(max-width:1024px)");
  const navigate = useNavigate();
  const [isloginshow, setIsloginshow] = useState(false)
  const [istoken, setIstoken] = useState('')
  const handlelogin = () => {
    const token = localStorage.getItem('token')
    setIstoken(token)
    if (istoken === ''){
      navigate('/login')
    } 
    else {
      navigate('/login')
    }
  }
  const handlelogout = () => {
    const token = localStorage.getItem('token')
    setIstoken(token)
    if (istoken !== ''){
      setIsloginshow(true)
      localStorage.setItem('token', '')
      alert('로그아웃 되었습니다!')
      navigate('/')
    }
    else {
      setIsloginshow(true)
      localStorage.setItem('token', '')
      alert('로그아웃 되었습니다!')
      navigate('/')
    }
  }

  return (
    <div className="TopNav">
      <div className="TopNav__container">
        <div className="TopNav__MainIconBox">
          <img
            className="TopNav__Mainicon"
            src={navicon}
            alt="Navicon"
            onClick={() => (window.location.href = "/")}
          ></img>
        </div>
        {!isMobile1024 ? (
          <div className="TopNav__LinkBox">
            <ul>
              <li
                onClick={() => {
                  navigate("/make-font");
                }}
              >
                폰트제작
              </li>
              <li
                onClick={() => {
                  navigate("/search");
                }}
              >
                폰트검색
              </li>
              <li
                onClick={() => {
                  navigate("/padlet");
                }}
              >
                ForSSAFY
              </li>
              <li>서명만들기</li>
              <li
                onClick={() => {
                  navigate("/mypage");
                }}>마이페이지</li>
                {
                  isloginshow &&
                  <li onClick={handlelogin}>로그인</li>
                }
                {
                  !isloginshow &&
                  <li onClick={handlelogout}>로그아웃</li>
                }
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
