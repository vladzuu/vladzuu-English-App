import { styled, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { ITransl } from '../../../store/slice/irregularVerbsSlice';

interface CardVerbProps {
  verb: ITransl;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}))

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: 8,
    fontSize: 12,
  },
  [theme.breakpoints.up('sm')]: {
    padding: 16,
    fontSize: 16,
  },
}))

const TableVerbs = ({ verb }: CardVerbProps) => {


  return (
    <StyledTableRow>
      <StyledTableCell>{verb.infinitive}</StyledTableCell>
      <StyledTableCell>{verb.pastSimple}</StyledTableCell>
      <StyledTableCell>{verb.participle}</StyledTableCell>
      <StyledTableCell>{verb.translate}</StyledTableCell>
    </StyledTableRow>
  );
};

export default TableVerbs;
