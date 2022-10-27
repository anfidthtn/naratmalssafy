import { useState } from 'react';
import TopNav from '../components/Common/TopNav.jsx';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios'
const SignUpPage = () => {
    const [region, setRegion] = useState('')
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const handleRegion = (event) => {
        setRegion(event.target.value)
    }
    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleNickname = (event) => {
        setNickname(event.target.value)
    }
    const handleSignup = () => {
        const userInfo={
            'region' : region,
            'name' : name,
            'nickname' : nickname
        }
        console.log(userInfo)
        // axios.post('url', userInfo)
    }
    const handleNicknameCheck=()=>{
        const Nicknameinfo={
            'nickname' : nickname
        }
    }
    return(
        <div>
            <TopNav/>
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
                <button onClick={handleSignup}>회원가입</button>
            </Box>
        </div>
    );
};

export default SignUpPage;
