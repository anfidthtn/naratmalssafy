import React, { useEffect } from "react";
import "../styles/Sign/LogIn.scss";
import mainLogo from "../assets/mainicon.png";
import kakao from "../assets/kakao.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  // const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize?client_id=45836166586d1409b29b026acd726439&redirect_uri=http://localhost:3000/oauth/callback/kakao&response_type=code";
  const KAKAO_AUTH_URL = 'https://kauth.kakao.com/oauth/authorize?client_id=45836166586d1409b29b026acd726439&redirect_uri=https://나랏말싸피.com/oauth/callback/kakao&response_type=code'
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(-1);
    }
  }, []);

  const Kakaologin = (response) => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div>
      <div className="Login">
        <div className="Login__Logo">
          <img
            className="Login__Logo__Main"
            src={mainLogo}
            alt="mainlogo"
            width={"80%"}
          />
        </div>
        <div className="Login__Top">
          <div className="Login__Top__Title">나랏말싸피 로그인</div>
          <div className="Login__Top__Content">
            로그인을 하세요! 로그인을 통해 더 많고 다양한 서비스를 경험할 수
            있어요!
          </div>
        </div>
        <div className="Login__Button" onClick={Kakaologin}>
          <img className="Login__Button__Kakao" src={kakao} alt="카카오"></img>
          카카오 계정으로 계속하기
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
