import { Alert, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { ITransl } from '../../../store/slice/irregularVerbsSlice';
import axios, { AxiosError } from 'axios';

interface CardVerbProps {
  verb: ITransl;
}

const CardVerb = ({ verb }: CardVerbProps) => {
  const [err, setErr] = useState<string>('')

  const handleAudio = async (word: string) => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      const dataWord = data.data
      let linkWord = ''
      for (let dataArray of dataWord[0].phonetics) {
        if (dataArray.audio.length) {
          linkWord = dataArray.audio
          break
        }
      }
      await new Audio(linkWord).play();
    } catch (e: any | AxiosError) {
      if (axios.isAxiosError(e)) {
        if (e.response) {
          setErr(e.response.status.toString())
          setTimeout(() => {
            setErr('')
          }, 2000)
        } else if (e.request) {

        }
      } else {
        console.error(e)
      }
    }

  }

  return (
    <Card sx={{ width: 345 }} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign='center'>
          {verb.translate}
        </Typography>
        <Typography sx={{ position: 'relative' }}>
          {(err == '404') ?
            <Alert severity="error" sx={{ position: 'absolute', left: 30, zIndex: 100 }}>Нет озвучки для этого слова</Alert> : null}
          <IconButton onClick={() => handleAudio(verb.infinitive)}>
            <RecordVoiceOverIcon />
          </IconButton>
          V: {verb.infinitive}
        </Typography>
        <Typography>
          <IconButton onClick={() => handleAudio(verb.pastSimple)}>
            <RecordVoiceOverIcon />
          </IconButton>
          V2: {verb.pastSimple}
        </Typography>
        <Typography>
          <IconButton onClick={() => handleAudio(verb.participle)}>
            <RecordVoiceOverIcon />
          </IconButton>
          V3: {verb.participle}
        </Typography>


      </CardContent>
    </Card>
  );
};

export default CardVerb;
