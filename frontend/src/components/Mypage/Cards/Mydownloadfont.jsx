import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

const MyDownloadFont = ({key, id, creater, name, path, preview}) => {
    const navigate = useNavigate();
    function FontInfo() {
        navigate(`/fontinfo/${id}`)
    }
    return(
        <div className='Mypage__Mydownloadfont__Card'>
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

export default MyDownloadFont;
