import { useState, useEffect } from "react";
import axios from 'axios'
import Modal from './Modal.jsx'
import PostGwangjuItem from "./PostGwangjuItem.jsx";
import { Grid } from "@mui/material";


const PostGwangju = () => {
    const token = localStorage.getItem('token')
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
        .then(res => {
            setUserinfo(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    const [modalOpen, setModalOpen] = useState(false)
    const [dummyPostInfo, setDummyPostInfo] = useState([
        {
            padlet_contents_writer : '가수왕',
            padlet_contents_comments : '모두 좋은 곳에 취직해서 행복하자',
            padlet_contents_location : '서울',
            padlet_contents_font : 'https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap',
            fontFamilyName: "Do Hyeon",
        },
        {
            padlet_contents_writer : '한제규',
            padlet_contents_comments : '알고리즘이 곧 답이다! 알고리즘짱짱맨',
            padlet_contents_location : '서울',
            padlet_contents_font : 'https://fonts.googleapis.com/css2?family=Poor+Story&display=swap',
            fontFamilyName: "Poor Story",
        },
        {
            padlet_contents_writer : '유지홍',
            padlet_contents_comments : '소주없인 못살아~ 정말못살아~',
            padlet_contents_location : '서울',
            padlet_contents_font : 'https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap',
            fontFamilyName: "Black Han Sans",

        },
        {
            padlet_contents_writer : '임현탁',
            padlet_contents_comments : '여행지 추천좀....',
            padlet_contents_location : '서울',
            padlet_contents_font : 'https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap',
            fontFamilyName: "Nanum Pen Script",
        },
        {
            padlet_contents_writer : '채민지',
            padlet_contents_comments : '그리울 거에용 모두들',
            padlet_contents_location : '서울',
            padlet_contents_font : 'https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap',
            fontFamilyName: "Gamja Flower",

        },
        {
            padlet_contents_writer : '조경수',
            padlet_contents_comments : '싸피 끝났으니 푹 자야지 ^^',
            padlet_contents_location : '서울',
            padlet_contents_font : 'https://fonts.googleapis.com/css2?family=Black+And+White+Picture&display=swap',
            fontFamilyName: "Black And White Picture",
        }
    ])
    const showModal = () => {
        setModalOpen(true)
    }
    const goBack = () => {
        window.location.href = '/padlet'
    }
    return(
        <div className="Post">
            <div>광주 패들릿</div>
            <div>
            <Grid container spacing={3}>
                {dummyPostInfo.map((data,idx) =>
                    dummyPostInfo.length -1 === idx ? (
                        <Grid key={idx} xs={12} sm={6} md={4} lg={3} item>
                        <PostGwangjuItem
                            idx={idx}
                            postData={data}
                        />
                        </Grid>
                    ): (
                        <Grid key={idx} xs={12} sm={6} md={4} lg={3} item>
                        <PostGwangjuItem
                            idx={idx}
                            postData={data}
                        />
                        </Grid>
                    )

                )}
            </Grid>
            </div>
            <button className="Post__Create" onClick={showModal}>생성</button>
            <button className="Post__Back" onClick={goBack}>뒤로</button>
            {modalOpen && <Modal setModalOpen={setModalOpen} userinfo={userinfo}/>}
        </div>
    );
};

export default PostGwangju;
