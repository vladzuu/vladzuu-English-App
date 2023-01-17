import { Slider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ITransl } from '../../store/slice/irregularVerbsSlice';
import { RootState, useAppDispatch } from '../../store/store';
import Button from '@mui/material/Button';
import './irregularVerbs.css';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ClearIcon from '@mui/icons-material/Clear';


const IrregularVerbs = () => {
  const dataWorld = useSelector((state: RootState) => state.persistedReducer.irregularVerbs.verbs)
  const listVerbs = dataWorld.map((verbs: ITransl) => verbs)

  let [counter, setCounter] = useState(0)
  let [colorForm, setColorForm] = useState<'primary' | 'error' | 'success'>('success')
  let [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  let [infinitiveInput, setInfinitiveInput] = useState('')
  let [pastSimpleInput, setPastSimpleInput] = useState('')
  let [participateInput, setParticipateInput] = useState('')
  let [revInfinitive, setRevInfinitive] = useState(dataWorld[counter].infinitive)
  let [revPastSimple, setRevPastSimple] = useState(dataWorld[counter].pastSimple)
  let [revParticipate, setRevParticipate] = useState(dataWorld[counter].participate)

  useEffect(() => {
    setInfinitiveInput('')
    setPastSimpleInput('')
    setParticipateInput('')
    shuffle(dataWorld[counter].infinitive, setRevInfinitive)
    shuffle(dataWorld[counter].pastSimple, setRevPastSimple)
    shuffle(dataWorld[counter].participate, setRevParticipate)
    setIsCorrect(null)
  }, [counter])

  let check = () => {
    let check = `Inf: ${infinitiveInput} past: ${pastSimpleInput} part: ${participateInput}`
    let right = `Inf: ${dataWorld[counter].infinitive} past: ${dataWorld[counter].pastSimple} part: ${dataWorld[counter].participate}`
    if (check === right) return setIsCorrect(true)
    return setIsCorrect(false)
  }

  function shuffle(word: string, func: any) {
    let copyWord: string = word
    let revArrWord = copyWord.split('')
    revArrWord.sort(() => Math.random() - 0.5)
    let revWord = revArrWord.join('')
    func(revWord)
  }

  let submit = () => {
    setRevInfinitive(dataWorld[counter].infinitive)
    setRevPastSimple(dataWorld[counter].pastSimple)
    setRevParticipate(dataWorld[counter].participate)
    check();
    setTimeout(() => {
      setCounter(counter + 1)
    }, 2000)
  }

  const dispatch = useAppDispatch()

  return (
    <div className='box-app'>
      <div className='icon-success'>
        {(isCorrect != null)
          ?
          (isCorrect)
            ?
            <span><DoneOutlineIcon color='success' sx={{ fontSize: 80 }}></DoneOutlineIcon></span>
            :
            <span><ClearIcon color='error' sx={{ fontSize: 80 }}></ClearIcon></span>
          :
          null
        }
      </div>
      <span>{dataWorld[counter].translate.charAt(0).toUpperCase() + dataWorld[counter].translate.slice(1)}</span>
      <div className='box-verbs'>
        <div className='verbs'>
          <span className='word'>{revInfinitive}</span>
          <TextField
            id="outlined-basic"
            label="Infinitive"
            variant="outlined"
            value={infinitiveInput}
            onChange={(e) => setInfinitiveInput(e.target.value)} />
        </div>
        <div className='verbs'>
          <span className='word'>{revPastSimple}</span>
          <TextField
            id="outlined-basic"
            label="PastSimple"
            variant="outlined"
            value={pastSimpleInput}
            onChange={(e) => setPastSimpleInput(e.target.value)} />
        </div>
        <div className='verbs'>
          <span className='word'>{revParticipate}</span>
          <TextField
            id="outlined-basic"
            label="Participate"
            variant="outlined"
            value={participateInput}
            onChange={(e) => setParticipateInput(e.target.value)}
            onKeyDown={(e) => {
              if (counter === dataWorld.length - 1) return console.log('111111111')
              if (e.key === 'Enter') return submit()
            }}
          />
        </div>
      </div >
      {(counter === dataWorld.length - 1)
        ?
        < Button variant="contained" onClick={() => console.log('1111111111')} >Закончить тренировку</Button>
        :
        < Button variant="contained" onClick={submit} >Продолжить</Button>
      }
    </div>

  );
};

export default IrregularVerbs;
