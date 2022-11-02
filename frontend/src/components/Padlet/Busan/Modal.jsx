import '../../../styles/Padlet/Post.scss'
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Modal = ({setModalOpen, userinfo}) => {
    const userfont = userinfo.downloadFonts
    const fontinfo = [
        {
            fontName: "지홍체",
            fontPath: "https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap",
        },
        {
            fontName: "우울할땐 우울체",
            fontPath: "https://fonts.googleapis.com/css2?family=Poor+Story&display=swap",
        },
        {
            fontName: "알고리즘전용체",
            fontPath: "https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap",
        },
        {
            fontName: "가수체",
            fontPath: "https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap",
        },
        {
            fontName: "경수우울체",
            fontPath: "https://fonts.googleapis.com/css2?family=Black+And+White+Picture&display=swap",
        },
        {
            fontPath: "https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap",
            fontName: "현탁막걸리체",
        }
    ]
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
            <textarea onChange={handlecontext}></textarea>
            <FormControl fullWidth className='Modal__Select'>
                <InputLabel id="demo-simple-select-label">폰트 선택</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={font}
                label="Age"
                onChange={handlechange}
                >
                    {fontinfo.map((data) =>
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
