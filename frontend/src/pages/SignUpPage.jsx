import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios'
import '../styles/Sign/SignUp.scss'
const SignUpPage = () => {
    const location = useLocation();
    const userEmail = location.search.split('=')[1]
    const [region, setRegion] = useState('')
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [signup, setSignup] = useState(false)
    const handleRegion = (event) => {
        setRegion(event.target.value)
    }
    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleNickname = (event) => {
        setNickname(event.target.value)
    }

// 회원가입 #########################################################################################
    const handleSignup = () => {
        const userInfo={
            'userEmail' : userEmail,
            'userLocation' : region,
            'userName' : name,
            'userNickname' : nickname
        }
        console.log(userInfo)
        axios({
            url: '/api/user',
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            data: userInfo
        })
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.loginResult)
            window.location.href='/'
        })
        .catch(err => {
            console.log(err)
        })
    }
// #############################################################################################################

    
    
    // 닉넴 중복 체크 ##############################################################################
    const handleNicknameCheck=()=>{
        console.log(nickname)
        axios({
            url: `/api/user/checknickname/${nickname}`,
            method: 'GET',
            headers: {'Content-Type':'application/json'}
        })
        .then(res => {
            console.log(res.data)
            if (res.data === true){
                setSignup(res.data)
            }
            else{
                setSignup(res.data)
            }
            console.log(signup)
        })
        .catch(err => 
            console.log(err, "tq")
        )
    }
    // #############################################################################################################


    return(
        <div>
            <div className='Signup'>
            <div>회원가입</div>
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
                <button disabled={!signup} onClick={handleSignup}>회원가입</button>
            </Box>
        </div>
        </div>
    );
};

export default SignUpPage;
