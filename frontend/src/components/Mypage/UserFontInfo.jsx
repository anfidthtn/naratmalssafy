import '../../styles/MyPage/FontInfo.scss'
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import React, { useEffect } from 'react'
import KakaoShareButton from './KakaoShareButton.jsx'

const UserFontInfo = () => {
    const dummyfontfile={
            fontSeq : 0,
            fontCreater : '가수왕',
            fontName : '수왕이의 손글씨',
            fontPath : 'https://www.notion.so/SSAFY-7-D110-db6a3bae3c4f47958520b3dcdc252675',
            fontPreview : 'data:image/jpeg;base64,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'
    }

// 카카오 공유 버튼 ###########################################################################################################################################################
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

// ########################################################################################################################################################### 
    return(
        <div>
            <div className='Userfontinfo'>
                <div className='Userfontinfo__Title'>
                    {dummyfontfile.fontName}
                </div>
                <div className='Userfontinfo__Body'>
                    <div className='Userfontinfo__Body__Preview'>
                        <Box className='Userfontinfo__Body__Preview__Box1'>
                            <div>폰트프리뷰</div>
                        <img src={dummyfontfile.fontPreview} alt="fontPreview"></img>

                            <div>입력결과창</div>
                        </Box>
                        <Box className='Userfontinfo__Body__Preview__Box2'>
                            <TextField></TextField>
                            <div><div>폰트태그</div><div>태그들 담기는곳</div></div>
                            <div>대표폰트설정</div>
                            <div>폰트다운가능여부</div>
                            <div><button>다운</button><KakaoShareButton/></div>
                        </Box>
                    </div>
                </div>
                <div className='Userfontinfo__Bottom'>
                    <button>변경</button>
                    <button>뒤로</button>
                </div>
            </div>
        </div>
    );
};

export default UserFontInfo;
