import { IAddVerb } from './../actionTypes/actionTypes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from './../data/irregularVerbsData'


export interface ITransl {
  id: number
  infinitive: string
  pastSimple: string
  participle: string
  translate: string
  setReproduce: number
  lastAttemptDate: string
}

export interface IInitialState {
  settingList: {
    viewOption: 'card' | 'table',
    isTranscription: boolean,
    amountWorlds: number
  }
  chsum: string
  id: number
  verbs: ITransl[]
}

const irregularVerbs = createSlice({
  name: 'irregularVerbs',
  initialState,
  reducers: {
    applyViewOption: (state, { payload }) => {
      state.settingList.viewOption = payload.setting
    },
    applyAmountOption: (state, { payload }) => {
      state.settingList.amountWorlds = payload
    },
    applyTranscriptOption: (state, { payload }) => {
      state.settingList.isTranscription = payload
    },
    setReproduce: (state, { payload }) => {
      state.verbs = state.verbs.map((value) => {
        for (let id of payload.idCorrectAnswer) {
          if (value.id === id) {
            return { ...value, setReproduce: payload.level, lastAttemptDate: 'no' }
          }
        }
        return value
      })
    },
    //set last attempt date for timeout 1 day in education
    setLastAttemptDate: (state, { payload }) => {
      state.verbs = state.verbs.map((value) => {
        for (let id of payload.idIncorrectAnswer) {
          if (value.id === id) {
            console.log(id)
            return { ...value, lastAttemptDate: payload.localDate }
          }
        }
        return value
      })
    }

  }
})

export const { applyViewOption, applyAmountOption, applyTranscriptOption, setReproduce, setLastAttemptDate } = irregularVerbs.actions


export default irregularVerbs.reducer

