import '../../styles/MyPage/UserInfo.scss'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios'
const EditUserInfo = () => {
    const dummyuserinfo={
        'userSeq' : 0,
        'userEmail' : 'seoktak1234@gmail.com',
        'userName' : '임현탁',
        'userLocation' : '구미',
        'userNickname' : '연딱콩'
    }
// 회원 정보 수정 ######################################################################################## 
    const [region, setRegion] = useState('')
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [change, setChange] = useState(false)
    const token = localStorage.getItem('token')

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
    const handleBack=()=>{
        window.location.href = 'mypage'
    }
    return(
        <div>
            <div className='Edituserinfo'>
            <div>회원정보수정</div>
            <Box>
                <FormControl fullWidth>
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
                <FormControl fullWidth>
                    <TextField label="이름" variant="outlined" value={name} onChange={handleName}/>
                </FormControl>
                <FormControl fullWidth>
                    <TextField label="닉네임" variant="outlined" value={nickname} onChange={handleNickname}/>
                </FormControl>
                <button onClick={handleNicknameCheck}>중복체크</button>
                <p>최종 활동명은 지역, 이름, 닉네임을 합쳐 지역_이름_닉네임 형식으로 만들어드립니다.</p>
                <button disabled={!change} onClick={handleEdit}>정보수정</button>
                <button onClick={handleBack}>뒤로가기</button>
            </Box>
        </div>
        </div>
    );
};

export default EditUserInfo;
