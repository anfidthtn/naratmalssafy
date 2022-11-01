import { useScript } from "../hooks"
import { useEffect } from "react"
import kakao from "../assets/sharebutton.png";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from '@emotion/styled'

const URLShareButton = styled.button`
	width: 48px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 800;
	font-size: 15px;
	cursor: pointer;
	background-color: #7362ff;
	&:hover {
		background-color: #a99fee;
	}
`;
const ShareButton = styled.button`
	width: 48px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 800;
	font-size: 8px;
	cursor: pointer;
	background-color: #f8c440;
	&:hover {
		background-color: #ffd977;
	}
`;

const Share = () => {
// 카카오톡 공유버튼 #################################################################################
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
// #####################################################################################################################################################

// 링크 복사####################################################################################################################################################
    const currentUrl = window.location.href
// ############################################################################################################################################################ 

    return(
        <div>
            <ShareButton onClick={handleKakaoButton}>Kakao</ShareButton>
            <CopyToClipboard text={currentUrl}><URLShareButton>URL</URLShareButton></CopyToClipboard>
        </div>
    );
};

export default Share;
