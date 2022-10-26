import React from 'react'
import KaKaoLogin from 'react-kakao-login'

const LoginPage = () => {

    const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID
    const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI
    const KAKAO_AUTH_URL = 'https://kauth.kakao.com/oauth/authorize?client_id=45836166586d1409b29b026acd726439&redirect_uri=http://localhost:3000/oauth/callback/kakao&response_type=code'
    const Kakaologin = (response) => {
        window.location.href = KAKAO_AUTH_URL
    }


    return(
        <div>
            <button onClick={Kakaologin}>kakao</button>
        </div>
    );
};

export default LoginPage;

