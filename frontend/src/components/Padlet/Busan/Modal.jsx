import '../../../styles/Padlet/Post.scss'
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Modal = ({setModalOpen, userinfo}) => {
    const userfont = userinfo.downloadFonts

    const closeModal = () => {
        setModalOpen(false)
    }
    const createPost = () => {
        setModalOpen(false)
    }
    const [font, setFont] = useState('')
    const [context, setContext] = useState('')
    
    const handlechange = (e) => {
        console.log(e)
        setFont(e.target.value)
    }
    const handlecontext = (e) => {
        setContext(e.target.value)
        console.log(context)
    }
    return(
        <div className='Modal'>
            생성 모달인데용?
            <textarea onChange={handlecontext}>제목</textarea>
            <textarea onChange={handlecontext}>내용</textarea>
            <FormControl fullWidth className='Modal__Select'>
                <InputLabel id="demo-simple-select-label">폰트 선택</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={font}
                label="Age"
                onChange={handlechange}
                >
                    {userfont.map((data) =>
                        <MenuItem value={data.fontPath}>{data.fontName}</MenuItem>    
                    )}
                </Select>
            </FormControl>
            <FormControl fullWidth className='Modal__Select__Color'>
                <InputLabel id="demo-simple-select-label">색상 선택</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={font}
                label="Color"
                onChange={handlechange}
                >
                    {userfont.map((data) =>
                        <MenuItem value={data.fontPath}>{data.fontName}</MenuItem>    
                    )}
                </Select>
            </FormControl>
            <button className='Modal__Close' onClick={createPost}>생성</button>
            <button className='Modal__Close' onClick={closeModal}>닫기</button>
        </div>
    );
};

export default Modal;
