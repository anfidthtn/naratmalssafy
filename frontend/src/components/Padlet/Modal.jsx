import '../../styles/Padlet/Post.scss'

const Modal = ({setModalOpen}) => {
    const closeModal = () => {
        setModalOpen(false)
    }


    
    return(
        <div className='Modal'>
            생성 모달인데용?
            <button className='Modal__Close' onClick={closeModal}>닫기</button>
        </div>
    );
};

export default Modal;
