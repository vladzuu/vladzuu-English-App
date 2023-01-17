import React from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';


const HeaderMain = () => {

  return (
    <header className="App-header" >
      <div className='logo-site'>
        <BookIcon sx={{ fontSize: 50, color: 'gray' }} />
      </div>
      <div className='btn-menu'>
        <Button
          variant="outlined"
          size="large"
          sx={{ fontWeight: 'bold', margin: '8px', color: 'white', borderBlockColor: 'white', border: 'white', }}
          endIcon={<MenuIcon sx={{ color: 'white' }} />} >
          Меню
        </Button>
      </div>
      <div className='ava-user'>
        <NavLink to='/login'>
          <IconButton>
            <AccountCircleIcon color="action" sx={{ fontSize: 50 }} />
          </IconButton>
        </NavLink>

      </div>
    </header >
  );
};

export default HeaderMain;
