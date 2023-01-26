import Button from '@mui/material/Button';
import React from 'react';

interface ButtonProps {
  name: string
  onClick?: any
  isDisabled?: boolean
}

const StyledButton = ({ name, onClick, isDisabled }: ButtonProps) => {

  return (
    <div>
      <Button size="large" disabled={isDisabled} sx={{ fontWeight: 'bold', margin: '8px' }} variant="contained" onClick={onClick}>{name}</Button>
    </div>
  );
};

export default StyledButton;
