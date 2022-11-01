import { useScript } from "../hooks"
import { useEffect } from "react"
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
            objectType: 'feed',
            content: {
                title: '구미_임현탁_연딱콩님의 폰트를 구경해보세요!',
                description: '#폰트 #나만의 #싸피 #SSAFY #추억 #선물',
                imageUrl:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTemP_0duhHjJ0tjzZtz_AKErxLKTuaKteuw&usqp=CAU',
                link: {
                  mobileWebUrl: 'http://localhost:3000/kakao',
                  webUrl: 'http://localhost:3000/kakao',
                },
              },
            //   social: {
            //     likeCount: 286,
            //     commentCount: 45,
            //     sharedCount: 845,
            //   },
              buttons: [
                {
                  title: '자세히보기',
                  link: {
                    mobileWebUrl: 'http://localhost:3000/kakao',
                    webUrl: 'http://localhost:3000/kakao',
                  },
                },
              ],
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
