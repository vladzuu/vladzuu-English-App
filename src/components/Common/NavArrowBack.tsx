import { AppBar, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


interface NavArrowBackProps {
  linkTo: string
  children?: React.ReactNode
}

const NavArrowBack = ({ children, linkTo }: NavArrowBackProps) => {



  return (
    <AppBar sx={{ justifyContent: 'space-between', flexDirection: 'row', maxHeight: 70, top: 0, position: 'sticky' }}>
      <Link to={linkTo}>
        <IconButton>
          <ArrowBackIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Link>
      {children}
    </AppBar>
  );
};

export default NavArrowBack;
