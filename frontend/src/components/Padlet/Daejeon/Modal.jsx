import '../../../styles/Padlet/Post.scss'
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import axios from 'axios'

const Modal = ({setModalOpen, userinfo }) => {
    const userfont = userinfo.downloadFonts
    const token = localStorage.getItem('token')
    const [color, setColor] = useState('')
    const [font, setFont] = useState('')
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

    const colorlist = [
        'red', 'blue', 'black', 'green', 'skyblue', 'gray', 'pink', 'brown', 'white', 'orange', 'yellow', 'purple'
    ]
    const closeModal = () => {
        setModalOpen(false)
    }
    const createPost = () => {
        axios({            
            url: '/api/padlet',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type':'application/json'
            },
            data: {
                "color": `${color}`,
                "content": `${content}`,
                "fontSeq": `${font}`,
                "location": "daejeon",
                "title": `${title}`
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        setModalOpen(false)
    }
    
    const handlefont = (e) => {
        setFont(e.target.value)
        console.log(font)
    }

    const handlecontent = (e) => {
        setContent(e.target.value)
        console.log(content)
    }
    const handletitle = (e) => {
        setTitle(e.target.value)
        console.log(content)
    }
    const handlecolor = (e) => {
        setColor(e.target.value)
        console.log(color)
    }

    return(
        <div className='Modal'>
            <div className='Modal__Body'>
            <div className='Modal__Top'>패들릿 생성</div>
            <input type='text' defaultValue='제목입력' onChange={handletitle} className="Modal__Title"></input>
            <textarea onChange={handlecontent} className="Modal__Content">내용입력</textarea>
            <div className='Modal__Space'></div>
            <FormControl fullWidth className='Modal__Select__Font'>
                <InputLabel id="demo-simple-select-label">폰트 선택</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={font}
                label="Font"
                onChange={handlefont}
                >
                    {userfont.map((data) =>
                        <MenuItem value={data.fontSeq}>{data.fontName}</MenuItem>    
                    )}
                </Select>
            </FormControl>
            <div className='Modal__Space'></div>
            <FormControl fullWidth className='Modal__Select__Color'>
                <InputLabel id="demo-simple-select-label">색상 선택</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={color}
                label="Color"
                onChange={handlecolor}
                >
                    {colorlist.map((data) =>
                        <MenuItem value={data}>{data}</MenuItem>    
                    )}
                </Select>
            </FormControl>
            <div className='Modal__Space'></div>
            <div className='Modal__Bottom'>
                <div className='Modal__Bottom__Make' onClick={createPost}>생성</div>
                <div className='Modal__Bottom__Close' onClick={closeModal}>닫기</div>
            </div>
            </div>
        </div>
    );
};

export default Modal;
