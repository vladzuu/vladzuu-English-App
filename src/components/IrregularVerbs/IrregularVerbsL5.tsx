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
  let [participleInput, setParticipleInput] = useState('')
  let [revInfinitive, setRevInfinitive] = useState(dataWorld[counter].infinitive)
  let [revPastSimple, setRevPastSimple] = useState(dataWorld[counter].pastSimple)
  let [revParticiple, setRevParticiple] = useState(dataWorld[counter].participle)

  useEffect(() => {
    setInfinitiveInput('')
    setPastSimpleInput('')
    setParticipleInput('')
    shuffle(dataWorld[counter].infinitive, setRevInfinitive)
    shuffle(dataWorld[counter].pastSimple, setRevPastSimple)
    shuffle(dataWorld[counter].participle, setRevParticiple)
    setIsCorrect(null)
  }, [counter])

  let check = () => {
    let check = `Inf: ${infinitiveInput} past: ${pastSimpleInput} part: ${participleInput}`
    let right = `Inf: ${dataWorld[counter].infinitive} past: ${dataWorld[counter].pastSimple} part: ${dataWorld[counter].participle}`
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
    setRevParticiple(dataWorld[counter].participle)
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
          <span className='word'>{revParticiple}</span>
          <TextField
            id="outlined-basic"
            label="Participle"
            variant="outlined"
            value={participleInput}
            onChange={(e) => setParticipleInput(e.target.value)}
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
