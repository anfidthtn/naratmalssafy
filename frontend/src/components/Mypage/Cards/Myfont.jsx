import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import UserFontInfo from "../UserFontInfo.jsx"

const MyFont = ({key, id, creater, name, path, preview}) => {
  
// 폰트 상세 정보 페이지로 #######################################################################################     
    const navigate = useNavigate();
    function FontInfo() {
        navigate(`/fontinfo/${id}`)
    }
// #############################################################################################################

 
    return(
    <div className='Mypage__Myfont__Card'>
        <Card onClick={FontInfo}>
        <CardHeader
            title={name}
        />
        <CardMedia
            component="img"
            height="150px"
            image={preview}
            alt="musicImg"
        />
        <CardContent>
        </CardContent>
        </Card>
    </div>
    );
};

export default MyFont;
