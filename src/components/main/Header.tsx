import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InsightsIcon from '@mui/icons-material/Insights';
import LockIcon from '@mui/icons-material/Lock';

const HeaderMain = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<'none' | 'flex'>('none')
  return (
    <header className="App-header" >
      <div className='logo-site'>
        <BookIcon sx={{ fontSize: 50, color: '#d9d9d9' }} />
      </div>
      <div className='btn-menu'>
        <Button
          onClick={() => {
            setIsOpenMenu('flex')
          }}
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
      <div style={{
        position: 'absolute',
        width: 280,
        height: '100vh',
        top: 0,
        left: 0,
        background: '#184781',
        display: isOpenMenu,
        zIndex: 100,
        flexDirection: 'column'
      }}>
        <IconButton
          onClick={() => {
            setIsOpenMenu('none')
          }}
          sx={{ alignSelf: 'end' }}
        >
          <CloseIcon color="action" sx={{ fontSize: 30 }} />
        </IconButton>
        <Button
          sx={{ fontWeight: 'bold', margin: '8px', paddingLeft: 3, color: 'white', borderBlockColor: 'white', border: 'white', justifyContent: 'start' }}
          startIcon={<MenuBookIcon sx={{ color: 'white' }} />} >
          Изучение глаголов
        </Button>
        <Button
          sx={{ fontWeight: 'bold', margin: '8px', paddingLeft: 6, color: 'white', borderBlockColor: 'white', border: 'white', justifyContent: 'start' }}
          startIcon={<ListAltIcon sx={{ color: 'white', fontSize: 30 }} />} >
          Список глагов
        </Button>
        <Button
          sx={{ fontWeight: 'bold', margin: '8px', paddingLeft: 6, color: 'white', borderBlockColor: 'white', border: 'white', justifyContent: 'start' }}
          startIcon={<FlagCircleIcon sx={{ color: 'white' }} />} >
          Выбрать уровень
        </Button>
        <Button
          sx={{ fontWeight: 'bold', margin: '8px', paddingLeft: 6, color: 'white', borderBlockColor: 'white', border: 'white', justifyContent: 'start' }}
          startIcon={<InsightsIcon sx={{ color: 'white' }} />} >
          Статистика
        </Button>
        <Button
          disabled={true}
          sx={{ fontWeight: 'bold', margin: '8px', paddingLeft: 3, color: 'white', borderBlockColor: 'white', border: 'white', justifyContent: 'start' }}
          startIcon={<LockIcon sx={{ color: 'white' }} />} >
          Запоминнание Слов
        </Button>
      </div>
    </header >
  );
};

export default HeaderMain;
