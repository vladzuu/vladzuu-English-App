import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { RootState } from '../../../store/store';
import AppBar from '@mui/material/AppBar';
import SettingsIcon from '@mui/icons-material/Settings';
import CardVerb from './CardVerb';
import './listVerbs.css'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TableVerbs, { StyledTableCell } from './TableVerbs';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import ModalSetting from './ModalSetting';
import { APPLY_VIEW_OPTION_VERBS } from '../../../store/actionTypes/actionTypes';
import { applyAmountOption, applyTranscriptOption } from '../../../store/slice/irregularVerbsSlice';
import { Link } from 'react-router-dom';
import StyledButton from '../../Common/StyledButton';

const ListVerbs = () => {
  const verbs = useSelector((state: RootState) => state.persistedReducer.irregularVerbs.verbs)
  const setting = useSelector((state: RootState) => state.persistedReducer.irregularVerbs.settingList)
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)
  const [amountViewWords, setAmountViewWords] = useState(setting.amountWorlds)

  const handleViewOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: APPLY_VIEW_OPTION_VERBS, setting: event.target.value })
  };
  const handleTranscriptOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(applyTranscriptOption(event.target.value))
  };
  const handleAmountOption = (e: Event, newValue: number | number[]) => {
    setAmountViewWords(newValue as number)
    dispatch(applyAmountOption(newValue))
  };

  const listVerbs = verbs.map((verb, index) => {
    if (index + 1 <= amountViewWords && setting.viewOption === 'card') {
      return <CardVerb verb={verb} key={verb.id} />
    }
    if (setting.viewOption === 'table') {
      return <TableVerbs verb={verb} key={verb.id} />
    }
  })

  return (
    <div className='box-main-app'>
      <AppBar sx={{ justifyContent: 'space-between', flexDirection: 'row', maxHeight: 70, top: 0, position: 'sticky' }}>
        <Link to='/'>
          <IconButton>
            <ArrowBackIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Link>
        <IconButton onClick={handleOpen}>
          <SettingsIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </AppBar>

      {(setting.viewOption === 'card')
        ?
        <>
          <div className='lists-verbs'>
            {listVerbs}
          </div>
          {(verbs.length - amountViewWords <= 0) ?
            null
            :
            <StyledButton
              name={`Отобразить еще ${(verbs.length - amountViewWords < setting.amountWorlds) ?
                verbs.length - amountViewWords
                :
                setting.amountWorlds
                } из ${verbs.length - amountViewWords} слов`}
              onClick={() => setAmountViewWords((prev) => {
                if (verbs.length - amountViewWords < setting.amountWorlds) {
                  return prev + verbs.length - amountViewWords
                }
                return prev + setting.amountWorlds
              })}
            />
          }
        </>
        :
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350, maxWidth: 750, }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>V - Infinitive</StyledTableCell>
                <StyledTableCell>V2 - Past Simple </StyledTableCell>
                <StyledTableCell>V3 - Participle</StyledTableCell>
                <StyledTableCell>Перевод</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listVerbs}
            </TableBody>
          </Table>
        </TableContainer>}

      <ModalSetting
        isOpen={isOpen}
        viewOption={setting.viewOption}
        amountWorlds={setting.amountWorlds}
        isTranscription={setting.isTranscription}
        setIsOpen={setIsOpen}
        handleClose={handleClose}
        handleViewOption={handleViewOption}
        handleTranscriptOption={handleTranscriptOption}
        handleAmountOption={handleAmountOption}
      />

    </div >
  );
};

export default ListVerbs;
