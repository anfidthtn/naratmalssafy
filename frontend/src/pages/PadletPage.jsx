import '../styles/Padlet/Board.scss'
import map from '../assets/map.png'
import seoul from '../assets/seoul.png'
import daejeon from '../assets/daejeon.png'
import gwangju from '../assets/gwangju.png'
import gumi from '../assets/gumi.png'
import busan from '../assets/busan.png'
import { useNavigate } from 'react-router-dom'

const PadletPage = () => {
    const navigate = useNavigate()
    function navitoSeoul () {
        navigate('/post/seoul')
    }
    function navitoDaejeon () {
        navigate('/post/daejeon')
    }
    function navitoGwangju () {
        navigate('/post/gwangju')
    }
    function navitoGumi () {
        navigate('/post/gumi')
    }
    function navitoBusan () {
        navigate('/post/busan')
    }
    return(
        <div className='Padlet'>
            <div className='Padlet__West'>
                <img className='Padlet__West__Seoul' src={seoul} alt="seoul" onClick={navitoSeoul}/>
                <img className='Padlet__West__Daejeon' src={daejeon} alt="daejeon" onClick={navitoDaejeon}/>
                <img className='Padlet__West__Gwangju' src={gwangju} alt="gwangju" onClick={navitoBusan}/>
            </div>
            <div className='Padlet__main' >
                <img src={map} alt="map"/>
            </div>
            <div className='Padlet__East'>
                <img className='Padlet__East__Gumi' src={gumi} alt="gumi" onClick={navitoGumi}/>
                <img className='Padlet__East__Busan' src={busan} alt="busan" onClick={navitoBusan}/>
            </div>
        </div>
    );
};

export default PadletPage;
