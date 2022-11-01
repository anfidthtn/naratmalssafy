import '../../styles/Padlet/Post.scss'
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Modal = ({setModalOpen}) => {
    const closeModal = () => {
        setModalOpen(false)
    }
    const createPost = () => {
        setModalOpen(false)
    }
    const [font, setFont] = useState('')
    
    const handlechange = (e) => {
        console.log(e)
        setFont(e.target.value)
    }
    return(
        <div className='Modal'>
            생성 모달인데용?
            <textarea></textarea>
            <FormControl fullWidth className='Modal__Select'>
                <InputLabel id="demo-simple-select-label">폰트 선택</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={font}
                label="Age"
                onChange={handlechange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <button className='Modal__Close' onClick={createPost}>생성</button>
            <button className='Modal__Close' onClick={closeModal}>닫기</button>
        </div>
    );
};

export default Modal;
