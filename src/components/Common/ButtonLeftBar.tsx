import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonLeftBarProps {
  title: string
  startIcon: React.ReactNode
  linkTo: string
  paddingLeft?: number
  isDisabled?: boolean
}

const ButtonLeftBar = ({ title, isDisabled, paddingLeft = 2, linkTo, startIcon }: ButtonLeftBarProps) => {


  return (
    <Link to={linkTo}>
      <Button
        disabled={isDisabled}
        startIcon={startIcon}
        sx={{
          minWidth: '100%',
          fontWeight: 'bold',
          margin: '8px',
          paddingLeft: paddingLeft,
          color: 'white',
          borderBlockColor: 'white',
          border: 'white',
          justifyContent: 'start'
        }}>
        {title}
      </Button>
    </Link>
  );
};

export default ButtonLeftBar;
