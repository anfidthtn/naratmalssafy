import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const KakaoRedirectHandler = () => {
    console.log('hello')
    const location = useLocation();
    console.log(location)
    const KAKAO_CODE = location.search.split('=')[1]
    const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID
    const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI

    const getKakaoToken = () => {
        console.log(KAKAO_CODE)
        fetch(`https://kauth.kakao.com/oauth/otoken`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencodedcharset=utf-8'},
            body: `grant_type=authorization_code&client_id=45836166586d1409b29b026acd726439&redirect_uri=http://localhost:3000/kakaoLogin&code=${KAKAO_CODE}`
        })
        .then(res => 
            console.log(res))
        .then(data => {
            if(data.access_token) {
                localStorage.setItem('token', data.access_token)
            } else{
                console.log('왜 안돼?')
            }
        })
    }



    useEffect(() => {
        if (!location.search) return;
        getKakaoToken();
    }, [])

    return <div>KakaoLogin</div>
}
export default KakaoRedirectHandler