import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import "../../styles/Common/TopNav.scss";
import navicon from "../../assets/navicon.png";


export default function ButtonAppBar() {

    return (
    <Box>
      <AppBar position="static">
        <Toolbar className="Navbar">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img className="Navbar__Mainicon" src={navicon} alt="Navicon"></img>
            </Typography>
            <Button className="Navbar__Link">폰트제작</Button>
            <Button className="Navbar__Link">폰트검색</Button>
            <Button className="Navbar__Link">ForSSAFY</Button>
            <Button className="Navbar__Link">서명만들기</Button>
            <Button className="Navbar__Link">마이페이지</Button>
            <Button className="Navbar__Link">로그인</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}