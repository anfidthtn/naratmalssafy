import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import loading from "../../assets/loading.gif";
import '../../styles/Sign/Loading.scss'


const KakaoRedirectHandler = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
  const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const navigate = useNavigate();

  const getKakaoToken = () => {
    axios({
      url: "/api/user/login",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { code: KAKAO_CODE },
    })
      .then((res) => {
        if (
          res.data.loginResult !== "" &&
          res.data.loginResult.substr(0, 7) === "eyJ0eXA"
        ) {
          localStorage.setItem("token", res.data.loginResult);
          localStorage.setItem("email", res.data.email);
          navigate("/");
        } else if (res.data.loginResult !== "") {
          window.location.href = "/signup?userEmail=" + res.data.loginResult;
        }
        // if(res.data.isSignUp === true){
        //     if(res.data.loginResult === ''){
        //         // window.location.href = '/signup'
        //     }
        // }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return(
    <div className="Loading">
      <img
        className="Loading__Main"
        src={loading}
        alt="mainlogo"
      />
      <div className="Loading__Content">
        로그인중 입니다.......
      </div>
    </div>
  ) 
};
export default KakaoRedirectHandler;
