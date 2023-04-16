import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import StyledButton from '../Common/StyledButton';
import './mainMenu.css'
// interface mainProps {
//   prop: string;
// }

const MainMenu = () => {

  return (
    <div className='nav-menu'>
      <NavLink to='/listVerbs'>
        <StyledButton name='Список глаголов' />
      </NavLink>

      <NavLink to='/choseLevel'>
        <StyledButton name='Начать обучение' />
      </NavLink>

      <StyledButton name='Статистика' />
    </div >
  );
};

export default MainMenu;
