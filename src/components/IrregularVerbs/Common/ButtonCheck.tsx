import React from 'react';
import StyledButton from '../../Common/StyledButton';

interface IButtonCheckProps {
  isComplete: Boolean
  length: number
  submitLevel: () => void
  createLevel: () => void
}

//for level 1-2
const ButtonCheck = ({ isComplete, length, submitLevel, createLevel }: IButtonCheckProps) => {
  return (
    <>
      {(!isComplete) ?
        (length) ?
          <StyledButton name='Проверить' key={'but'} onClick={submitLevel} isDisabled={true} />
          :
          <StyledButton name='Проверить' key={'but'} onClick={submitLevel} isDisabled={false} />
        :
        <StyledButton name='Следующий уровень' onClick={createLevel} />
      }
    </>
  );
};

export default ButtonCheck;
