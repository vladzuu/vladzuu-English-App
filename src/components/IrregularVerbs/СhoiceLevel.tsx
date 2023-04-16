import { Badge, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store/store';
import StyledButton from '../Common/StyledButton';
import LockIcon from '@mui/icons-material/Lock';
import NavArrowBack from '../Common/NavArrowBack';
import HeaderMain from '../main/Header';



const ChoiceLevel = () => {
  const verbs = useSelector((state: RootState) => state.persistedReducer.irregularVerbs.verbs)

  const allVerbs = (level: number, currentLevel: number) => {
    let count = 0
    let countCorrectAnswer = 0
    for (let data of verbs) {
      if (data.setReproduce >= level) countCorrectAnswer++
      if (data.setReproduce >= currentLevel) count++
    }
    return `${countCorrectAnswer}/${count}`
  }

  const checkCountVerbs = (level: number) => {
    let count = 0
    for (let data of verbs) {
      if (data.setReproduce === level) {
        count++
        break
      }
    }
    if (count > 0) return false
    return true
  }
  return (
    <div className='box-main-app'>
      <NavArrowBack linkTo='/' />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center', flexGrow: 1 }} >
        <Badge badgeContent={allVerbs(1, 0)} color="secondary" >
          <NavLink to='/choseLevelVerbs/level1'>
            <StyledButton name='Уровень 1' />
          </NavLink>
        </Badge>

        <Badge badgeContent={allVerbs(2, 1)} color="secondary" >
          <NavLink to='/choseLevelVerbs/level2'>
            <StyledButton name='Уровень 2' isDisabled={checkCountVerbs(1)} />
          </NavLink>
        </Badge>
        <Badge badgeContent={allVerbs(3, 2)} color="secondary" >
          <NavLink to='/choseLevelVerbs/level3'>
            <StyledButton name='Уровень 3' isDisabled={checkCountVerbs(2)} />
          </NavLink>
        </Badge>
        <Badge badgeContent={<Tooltip title={'Уровень еще в разработке'}><LockIcon /></Tooltip>} >
          <StyledButton name='Уровень 4' isDisabled={true} />
        </Badge>
      </div>
    </div>
  );
};





export default ChoiceLevel;
