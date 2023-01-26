import { Badge } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store/store';
import StyledButton from '../Common/StyledButton';



const ChoseLevel = () => {
  const verbs = useSelector((state: RootState) => state.persistedReducer.irregularVerbs.verbs)
  const allVerbs = (level: number, currentLevel: number) => {
    let count = 0
    let countCorrectAnswer = 0
    for (let data of verbs) {
      if (data.setReproduce === level) countCorrectAnswer++
      if (data.setReproduce >= currentLevel) count++
    }
    return `${countCorrectAnswer}/${count}`
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20 }}>
      <Badge badgeContent={allVerbs(1, 0)} color="secondary" >
        <NavLink to='/choseLevelVerbs/level1'>
          <StyledButton name='Уровень 1' />
        </NavLink>
      </Badge>

      <Badge badgeContent={allVerbs(2, 1)} color="secondary" >
        <StyledButton name='Уровень 2' isDisabled={true} />
      </Badge>

      <StyledButton name='Уровень 3' isDisabled={true} />
    </div>
  );
};

export default ChoseLevel;
