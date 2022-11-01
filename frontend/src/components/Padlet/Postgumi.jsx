import { useState } from "react";
import Modal from './Modal.jsx'

const PostGumi = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const showModal = () => {
        setModalOpen(true)
    }
    const goBack = () => {
        window.location.href = '/padlet'
    }
    return(
        <div className="Post">
            <div>구미 패들릿</div>
            <button className="Post__Create" onClick={showModal}>생성</button>
            <button className="Post__Back" onClick={goBack}>뒤로</button>
            {modalOpen && <Modal setModalOpen={setModalOpen}/>}
        </div>
    );
};

export default PostGumi;
