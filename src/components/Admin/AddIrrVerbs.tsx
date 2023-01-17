import { TextField } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import { useForm, SubmitHandler, Controller, useFormState } from "react-hook-form";
import { useAppDispatch } from './../../store/store'
import { ADD_VERB, IFormAddVerb } from '../../store/actionTypes/actionTypes';



const AddIrrVerbs = () => {
  const dispatch = useAppDispatch()

  const { control, handleSubmit } = useForm<IFormAddVerb>();
  const onSubmit: SubmitHandler<IFormAddVerb> = data => {
    if (data) {
      dispatch({ type: ADD_VERB, data: { ...data } });
    }
  }

  return (
    <div>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)} >
        <Controller
          name="infinitive"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField
            {...field}
            id="filled-basic"
            label="Infinitive"
            variant="filled" />} />

        <Controller
          name="pastSimple"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField
            {...field}
            id="filled-basic"
            label="Past Simple"
            variant="filled" />} />

        <Controller
          name="participate"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField
            {...field}
            id="filled-basic"
            label="Participate"
            variant="filled" />}
        />
        <Controller
          name="translate"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField
            {...field}
            id="filled-basic"
            label="Translate"
            variant="filled" />}
        />
        <Button variant="contained" type="submit">Add</Button>
      </form>
    </div>
  );
};

export default AddIrrVerbs;
