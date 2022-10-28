import '../styles/Padlet/Board.scss'
import map from '../assets/map.png'
const PadletPage = () => {
    return(
        <div className='Padlet'>
            <img className='Padlet__main' src={map} alt="map"/>
        </div>
    );
};

export default PadletPage;
