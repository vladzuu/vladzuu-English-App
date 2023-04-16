import { Slider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ITransl, setLastAttemptDate, setReproduce } from '../../../store/slice/irregularVerbsSlice';
import { RootState, useAppDispatch } from '../../../store/store';
import Button from '@mui/material/Button';
import './IrregularVerbsL3.scss';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ClearIcon from '@mui/icons-material/Clear';
import { receiveLocalDate } from '../Common/Helper';
import CircularProgress from '@mui/material/CircularProgress';
import StyledButton from '../../Common/StyledButton';
import NavArrowBack from '../../Common/NavArrowBack';


const IrregularVerbsL3 = () => {
  const dataWorld = useSelector((state: RootState) => state.persistedReducer.irregularVerbs.verbs)
  const dispatch = useAppDispatch()
  const listVerbs = dataWorld.map((verbs: ITransl) => verbs)

  const [isComplete, setIsComplete] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const [infinitiveInput, setInfinitiveInput] = useState('')
  const [pastSimpleInput, setPastSimpleInput] = useState('')
  const [participleInput, setParticipleInput] = useState('')

  const [verb, setVerb] = useState<ITransl | null>(null)
  const [reverseVerbs, setReverseVerbs] = useState({
    infinitive: '',
    pastSimple: '',
    participle: '',
  })

  const createLevel = () => {
    //Create obj for view
    const localDate = receiveLocalDate()
    const arrVerbs: Array<ITransl> = []
    for (let i = 0; i <= listVerbs.length; i++) {
      if (arrVerbs.length === 1) break
      if (listVerbs[i].setReproduce === 2 && listVerbs[i].lastAttemptDate !== localDate) {
        arrVerbs.push(listVerbs[i])
      }
    }
    setVerb(arrVerbs[0])
    shuffle(arrVerbs[0])
    setIsComplete(false)
  }

  useEffect(() => {
    createLevel()
    setIsCorrect(null)
  }, [])

  let check = () => {
    const localDate = receiveLocalDate()
    let check = `Inf: ${infinitiveInput} past: ${pastSimpleInput} part: ${participleInput}`
    let right = `Inf: ${verb?.infinitive} past: ${verb?.pastSimple} part: ${verb?.participle}`
    let checkComplete = false
    if (check === right) checkComplete = true

    if (checkComplete) {
      dispatch(setReproduce({ idCorrectAnswer: [verb?.id], level: 3 }))
    } else {
      dispatch(setLastAttemptDate({ idIncorrectAnswer: [verb?.id], localDate: localDate }))
    }
  }

  const shuffle = (obj: ITransl) => {
    const objReverseVerbs = {
      infinitive: '',
      pastSimple: '',
      participle: '',
    }
    objReverseVerbs.infinitive = obj.infinitive.split('').sort(() => {
      return Math.random() - 0.5
    }).join('')
    objReverseVerbs.pastSimple = obj.pastSimple.split('').sort(() => {
      return Math.random() - 0.5
    }).join('')
    objReverseVerbs.participle = obj.participle.split('').sort(() => {
      return Math.random() - 0.5
    }).join('')
    setReverseVerbs(objReverseVerbs)
  }

  let submitLevel = () => {
    check();
    setIsComplete(true)
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: '100vw' }}>
      <NavArrowBack linkTo='/choselevel' />
      <div className='box-level-verbs'>
        {(isCorrect != null)
          ? <div className='icon-success'>
            (isCorrect)
            ?
            <span><DoneOutlineIcon color='success' sx={{ fontSize: 80 }}></DoneOutlineIcon></span>
            :
            <span><ClearIcon color='error' sx={{ fontSize: 80 }}></ClearIcon></span>
          </div>
          :
          null
        }
        <span style={{ fontSize: 48, marginBottom: 50 }}>{`${verb?.translate.charAt(0).toUpperCase()}${verb?.translate.slice(1)}`}</span>
        <div className='box-verbs'>
          <div className='input-block'>
            <span className='input-block__verb'>{reverseVerbs.infinitive}</span>
            <TextField
              autoComplete='off'
              type={'text'}
              id="outlined-basic"
              label="Infinitive"
              variant="outlined"
              value={infinitiveInput}
              onChange={(e) => setInfinitiveInput(e.target.value)} />
          </div>
          <div className='input-block'>
            <span className='input-block__verb'>{reverseVerbs.pastSimple}</span>
            <TextField
              autoComplete='off'
              type={'text'}
              id="outlined-basic"
              label="PastSimple"
              variant="outlined"
              value={pastSimpleInput}
              onChange={(e) => setPastSimpleInput(e.target.value)} />
          </div>
          <div className='input-block'>
            <span className='input-block__verb'>{reverseVerbs.participle}</span>
            <TextField
              autoComplete='off'
              type={'text'}
              id="outlined-basic"
              label="Participle"
              variant="outlined"
              value={participleInput}
              onChange={(e) => setParticipleInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') submitLevel()
              }}
            />
          </div>
        </div >

        {(!isComplete) ?
          <StyledButton name='Проверить' key={'but'} onClick={submitLevel} />
          :
          <StyledButton name='Следующий уровень' onClick={createLevel} />
        }
      </div>
    </div>
  );
};

export default IrregularVerbsL3;
