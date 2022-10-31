import '../../styles/MyPage/UserInfo.scss'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
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
            'region' : region,
            'name' : name,
            'nickname' : nickname
        }
        console.log(userInfo)
        // axios.post('url', userInfo)
    }
// #############################################################################################################



// 닉네임 중복 체크 ################################################################################## 
    const handleNicknameCheck=()=>{
        const Nicknameinfo={
            'nickname' : nickname
        }
        console.log(Nicknameinfo)
        // axios.post('url', Nicknameinfo)
    }
// #############################################################################################################
    
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
                <button onClick={handleEdit}>정보수정</button>
                <button>뒤로가기</button>
            </Box>
        </div>
        </div>
    );
};

export default EditUserInfo;
