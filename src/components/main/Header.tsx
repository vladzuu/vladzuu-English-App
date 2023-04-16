import React, { useEffect, useState } from 'react';
import { RootState } from '../../store/store';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.scss'
import ButtonLeftBar from '../Common/ButtonLeftBar';
import { Button, IconButton, Modal } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InsightsIcon from '@mui/icons-material/Insights';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HeaderMain = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<'none' | 'flex'>('none')
  const photo = useSelector((state: RootState) => state.persistedReducer.login.photo)
  console.log('Header menu')

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
          {(photo.length)
            ?
            <img src={photo}></img>
            :
            <IconButton>
              <AccountCircleIcon color="action" sx={{ fontSize: 50 }} />
            </IconButton>
          }
        </NavLink>
      </div>

      <div
        className='overlay'
        onClick={(e) => setIsOpenMenu('none')}
        style={{

          display: isOpenMenu
        }}>
        <div className='left-navbar'>
          <IconButton
            onClick={() => {
              setIsOpenMenu('none')
            }}
            sx={{ alignSelf: 'end' }}
          >
            <CloseIcon color="action" sx={{ fontSize: 30 }} />
          </IconButton>
          <ButtonLeftBar
            linkTo={'/'}
            title={'Изучение глаголов'}
            startIcon={<MenuBookIcon sx={{ color: 'white' }} />}
          />
          <ButtonLeftBar
            linkTo={'/listVerbs'}
            title={'Список глаголов'}
            startIcon={<ListAltIcon sx={{ color: 'white' }} />}
            paddingLeft={5}
          />
          <ButtonLeftBar
            linkTo={'/choselevel'}
            title={'Выбрать уровень'}
            startIcon={<FlagCircleIcon sx={{ color: 'white' }} />}
            paddingLeft={5}
          />
          <ButtonLeftBar
            linkTo={'/statistic'}
            title={'Статистика'}
            startIcon={<InsightsIcon sx={{ color: 'white' }} />}
            paddingLeft={5}
          />
          <ButtonLeftBar
            linkTo={'/'}
            title={'Запоминнание Слов'}
            startIcon={<LockIcon sx={{ color: 'white' }} />}
            isDisabled={true}
          />
        </div>
      </div>


    </header >
  );
};

export default HeaderMain;


