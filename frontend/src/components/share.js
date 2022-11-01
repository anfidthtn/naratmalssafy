import { useScript } from "../hooks"
import { useEffect } from "react"
import { useLocation } from "react-router-dom";
import kakao from "../assets/sharebutton.png";


const Share = () => {
    const currentUrl = useLocation();
    const status = useScript("https://developers.kakao.com/sdk/js/kakao.js")
    useEffect(() => {
		if (status === "ready" && window.Kakao) {
			// 중복 initialization 방지
			if (!window.Kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				window.Kakao.init("143701b766fa03b8b23aa8b170cdf655");
			}
		}
	}, [status]);
    const handleKakaoButton = () => {
        window.Kakao.Link.sendDefault({
            objectType: 'text',
            text:
              '기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오톡 공유는 다른 템플릿을 이용해 보낼 수 있습니다.',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
        })
    }
    return(
        <div>
            <button onClick={handleKakaoButton}><img src={kakao} alt="shareButton"></img></button>
        </div>
    );
};

export default Share;
