import { useState } from "react";
import Modal from './Modal.jsx'

const Post = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const showModal = () => {
        setModalOpen(true)
    }
    return(
        <div className="Postseoul">
            <button className="Postseoul__Create" onClick={showModal}>생성</button>
            {modalOpen &&<Modal setModalOpen={setModalOpen}/>}
        </div>
    );
};

export default Post;
