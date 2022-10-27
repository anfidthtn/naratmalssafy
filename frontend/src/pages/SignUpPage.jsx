import { useState } from 'react';
import TopNav from '../components/Common/TopNav.jsx';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const SignUpPage = () => {
    const [region, setRegion] = useState('')
    const handleRegion = (event) => {
        setRegion(event.target.value)
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
                <TextField>
                    
                </TextField>
            </Box>
        </div>
    );
};

export default SignUpPage;
