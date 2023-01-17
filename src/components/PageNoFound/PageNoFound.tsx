import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './pageNoFound.css'

// interface PageNoFoundProps {
//   prop: string;
// }

const PageNoFound = () => {


  return (
    <div className='page-no-found'>
      <div className='no-found-text'>Страница не существует</div>
      <NavLink to='/'>
        <Button size="large" sx={{ fontWeight: 'bold', margin: '8px' }} variant="contained">Перейти на главную</Button>
      </NavLink>
    </div>
  );
};

export default PageNoFound;
