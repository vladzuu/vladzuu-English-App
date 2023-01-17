import Button from '@mui/material/Button';
import React from 'react';

interface ButtonProps {
  name: string;
}

const StyledButton = ({ name }: ButtonProps) => {

  return (
    <div>
      <Button size="large" sx={{ fontWeight: 'bold', margin: '8px' }} variant="contained">{name}</Button>
    </div>
  );
};

export default StyledButton;
