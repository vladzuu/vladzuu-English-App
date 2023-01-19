import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { ITransl } from '../../../store/slice/irregularVerbsSlice';

interface CardVerbProps {
  verb: ITransl;
}

const CardVerb = ({ verb }: CardVerbProps) => {

  //Wrong realization, will change later
  function playAudio(url: string) {
    new Audio(url).play();
  }

  return (
    <Card sx={{ width: 345 }} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign='center'>
          {verb.translate}
        </Typography>
        <Typography >
          <IconButton onClick={() => { playAudio(`https://api.dictionaryapi.dev/media/pronunciations/en/${verb.infinitive}-us.mp3`) }}>
            <RecordVoiceOverIcon />
          </IconButton>
          V: {verb.infinitive}
        </Typography>
        <Typography>
          <IconButton onClick={() => { playAudio(`https://api.dictionaryapi.dev/media/pronunciations/en/${verb.pastSimple}-us.mp3`) }} >
            <RecordVoiceOverIcon />
          </IconButton>
          V2: {verb.pastSimple}
        </Typography>
        <Typography>
          <IconButton onClick={() => { playAudio(`https://api.dictionaryapi.dev/media/pronunciations/en/${verb.participle}-us.mp3`) }}>
            <RecordVoiceOverIcon />
          </IconButton>
          V3: {verb.participle}
        </Typography>


      </CardContent>
    </Card>
  );
};

export default CardVerb;
