import MyFont from '../components/Mypage/Cards/Myfont.jsx'
import MyFavoritesFont from '../components/Mypage/Cards/Myfavoritesfont.jsx'
import MyDownloadFont from '../components/Mypage/Cards/Mydownloadfont.jsx'
import '../styles/MyPage/MyPage.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Divider, Grid } from "@mui/material";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { dummyDataSet } from '../store/dummy.js'



const dummyfontfile= dummyDataSet
const token = localStorage.getItem('token')
const MyPage = () => {
    const [userinfo, setUserinfo] = useState('')
    useEffect(() => {
        axios({
            url: '/api/user',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type':'application/json'
            } 
        })
        .then(res=> {
            setUserinfo(res.data)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })


// 내폰트, 다운로드, 즐겨찾기중 어떤걸로 볼지 #################################################################

    const [ismyfontshow, setIsmyfontshow] = useState(false)
    const [isdownloadshow, setIsdownloadshow] = useState(false)
    const [isfavoriteshow, setIsfavoriteshow] = useState(false)
    const [iseditshow, setIseditshow] = useState(true)

    function showedit() {
        setIsmyfontshow(false)
        setIsfavoriteshow(false)
        setIsdownloadshow(false)
        setIseditshow(true)
    } 
    function showmyfont() {
        setIsmyfontshow(true)
        setIsfavoriteshow(false)
        setIsdownloadshow(false)
        setIseditshow(false)
    } 
    function showdownloadfont() {
        setIsmyfontshow(false)
        setIsfavoriteshow(false)
        setIsdownloadshow(true)
        setIseditshow(false)
    } 
    function showfavoritefont() {
        setIsmyfontshow(false)
        setIsfavoriteshow(true)
        setIsdownloadshow(false)
        setIseditshow(false)
    } 
// ###########################################################################################################

// 회원정보수정을 위한 ########################################################################################

// 회원 정보 수정 ######################################################################################## 
const [region, setRegion] = useState('')
const [name, setName] = useState('')
const [nickname, setNickname] = useState('')
const [change, setChange] = useState(false)

const handleRegion = (event) => {
    setRegion(event.target.value)
}
const handleName = (event) => {
    setName(event.target.value)
}
const handleNickname = (event) => {
    setNickname(event.target.value)
}
const handleEdit = () => {
    const userInfo={
        'userLocation' : region,
        'userName' : name,
        'userNickname' : nickname
    }
    console.log(userInfo)
    axios({
        url: '/api/user',
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type':'application/json'
        },
        data: userInfo
    })
    .then(res => {
        console.log(res)
        window.location.href='/'
    })
    .catch(err => {
        console.log(err)
    })
}
// #############################################################################################################



// 닉네임 중복 체크 ################################################################################## 
const handleNicknameCheck=()=>{
    axios({
        url: `/api/user/checknickname/${nickname}`,
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    })
    .then(res => {
        if (res.data === true){
            setChange(res.data)
        }
        else{
            setChange(res.data)
        }
    })
    .catch(err => {
        console.log(err)
    })
}
// #############################################################################################################

// 회원정보수정을 위한 ########################################################################################


    return(
        <div className='Mypage'>
            <div className='Mypage__Profile'>
                <div>닉네임 : {userinfo.userLocation}_{userinfo.userName}_{userinfo.userNickname}</div>
                <div>이메일 : {userinfo.userEmail}</div>
            </div>
            <div className='Mypage__Fontselect'>
                <div className='Mypage__Fontselect__Edit' onClick={showedit}>회원정보수정</div>
                <div className='Mypage__Fontselect__My' onClick={showmyfont}>내폰트</div>
                <div className='Mypage__Fontselect__Favorite' onClick={showfavoritefont}>즐겨찾기폰트</div>
                <div className='Mypage__Fontselect__Download' onClick={showdownloadfont}>다운로드폰트</div>
            </div>
            <div className="custom_m_y_10">
                    <Divider />
            </div>
                {iseditshow &&
                <div className='Mypage__Edituserinfo'>
                <Box>
                    <FormControl fullWidth className='Mypage__Edituserinfo__Location'>
                        <InputLabel id="demo-simple-select-label">지역</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={region}
                            label="지역"
                            onChange={handleRegion}
                        >
                            <MenuItem value={'서울'}>서울</MenuItem>
                            <MenuItem value={'대전'}>대전</MenuItem>
                            <MenuItem value={'구미'}>구미</MenuItem>
                            <MenuItem value={'광주'}>광주</MenuItem>
                            <MenuItem value={'부울경'}>부울경</MenuItem>
                        </Select>
                    </FormControl>
                    <div className='Mypage__Edituserinfo__Space'></div>
                    <FormControl fullWidth className='Mypage__Edituserinfo__Name'>
                        <TextField label="이름" variant="outlined" value={name} onChange={handleName}/>
                    </FormControl>
                    <div className='Mypage__Edituserinfo__Space'></div>
                    <FormControl fullWidth className='Mypage__Edituserinfo__Nickname'>
                        <TextField label="닉네임" variant="outlined" value={nickname} onChange={handleNickname}/>
                    </FormControl>
                    <div className='Mypage__Edituserinfo__Space'></div>
                    <button onClick={handleNicknameCheck}>중복체크</button>
                    <p>최종 활동명은 지역, 이름, 닉네임을 합쳐 지역_이름_닉네임 형식으로 만들어드립니다.</p>
                    <button disabled={!change} onClick={handleEdit}>정보수정</button>
                </Box>
            </div>
                }
                {
                    ismyfontshow &&
                    <div className='Mypage__Myfont'>
                    <Grid container spacing={3}>
                        {dummyfontfile.map((data, idx) =>
                        dummyfontfile.length - 1 === idx ? (
                            <Grid key={idx} xs={12} sm={6} md={4} lg={3} item>
                            <MyFont
                                idx={idx}
                                fontData={data}
                            />
                            </Grid>
                        ) : (
                            <Grid key={idx} xs={12} sm={6} md={4} lg={3} item>
                            <MyFont
                                idx={idx}
                                fontData={data}
                            />
                            </Grid>
                        )
                        )}
                    </Grid>
                    </div>
                }
                { 
                    isfavoriteshow &&
                    <div className='Mypage__Myfavoritesfont'>
                    <Grid container spacing={3}>
                        {dummyfontfile.map((data, idx) =>
                        dummyfontfile.length - 1 === idx ? (
                            <Grid key={idx} xs={12} sm={6} md={4} lg={3} item>
                            <MyFavoritesFont
                                idx={idx}
                                fontData={data}
                            />
                            </Grid>
                        ) : (
                            <Grid key={idx} xs={12} sm={6} md={4} lg={3} item>
                            <MyFavoritesFont
                                idx={idx}
                                fontData={data}
                            />
                            </Grid>
                        )
                        )}
                    </Grid>
                    </div>
                }
                { 
                    isdownloadshow &&
                    <div className='Mypage__Mydownloadfont'>
                    <Grid container spacing={3}>
                        {dummyfontfile.map((data, idx) =>
                        dummyfontfile.length - 1 === idx ? (
                            <Grid key={idx} xs={12} sm={6} md={4} lg={3} item>
                            <MyDownloadFont
                                idx={idx}
                                fontData={data}
                            />
                            </Grid>
                        ) : (
                            <Grid key={idx} xs={12} sm={6} md={4} lg={3} item>
                            <MyDownloadFont
                                idx={idx}
                                fontData={data}
                            />
                            </Grid>
                        )
                        )}
                    </Grid>
                    </div>    
                }
        </div>
    );
};

export default MyPage;
