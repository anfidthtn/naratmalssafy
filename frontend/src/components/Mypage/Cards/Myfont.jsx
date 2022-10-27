import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';


const MyFont = ({key, id, creater, name, path, preview}) => {
    console.log(creater)
    return(
    <Card>
      <CardHeader
        title={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={preview}
        alt="musicImg"
      />
      <CardContent>
      </CardContent>
    </Card>

    );
};

export default MyFont;
