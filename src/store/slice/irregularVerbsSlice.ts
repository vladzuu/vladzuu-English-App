import { IAddVerb } from './../actionTypes/actionTypes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

let initialState: IInitialState = {
  settingList: {
    amountWorlds: 15,
    viewOption: 'card',
    isTranscription: false
  },
  chsum: "bdc096a48ce365dcd14df56b26a8b8347b18aff0",
  id: 49413,
  verbs: [
    {
      "id": 1,
      "infinitive": "be",
      "pastSimple": "was (were)",
      "participle": "been",
      "translate": "быть",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 2,
      "infinitive": "bear",
      "pastSimple": "bore",
      "participle": "born",
      "translate": "рожать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 3,
      "infinitive": "beat",
      "pastSimple": "beat",
      "participle": "beaten",
      "translate": "бить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 4,
      "infinitive": "become",
      "pastSimple": "became",
      "participle": "become",
      "translate": "становиться",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 5,
      "infinitive": "begin",
      "pastSimple": "began",
      "participle": "begun",
      "translate": "начинать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 6,
      "infinitive": "bind",
      "pastSimple": "bound",
      "participle": "bound",
      "translate": "связывать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 7,
      "infinitive": "bite",
      "pastSimple": "bit",
      "participle": "bitten",
      "translate": "кусаться",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 8,
      "infinitive": "blow",
      "pastSimple": "blew",
      "participle": "blown",
      "translate": "дуть",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 9,
      "infinitive": "break",
      "pastSimple": "broke",
      "participle": "broken",
      "translate": "ломать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 10,
      "infinitive": "bring",
      "pastSimple": "brought",
      "participle": "brought",
      "translate": "приносить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 11,
      "infinitive": "build",
      "pastSimple": "built",
      "participle": "built",
      "translate": "строить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 12,
      "infinitive": "buy",
      "pastSimple": "bought",
      "participle": "bought",
      "translate": "покупать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 13,
      "infinitive": "catch",
      "pastSimple": "caught{кат}",
      "participle": "caught",
      "translate": "ловить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 14,
      "infinitive": "choose",
      "pastSimple": "chose",
      "participle": "chosen",
      "translate": "выбирать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 15,
      "infinitive": "come",
      "pastSimple": "came",
      "participle": "come",
      "translate": "приходить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 16,
      "infinitive": "cost",
      "pastSimple": "cost",
      "participle": "cost",
      "translate": "стоить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 17,
      "infinitive": "cut",
      "pastSimple": "cut",
      "participle": "cut",
      "translate": "резать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 18,
      "infinitive": "deal",
      "pastSimple": "dealt",
      "participle": "dealt",
      "translate": "вести дела",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 19,
      "infinitive": "dig",
      "pastSimple": "dug",
      "participle": "dug",
      "translate": "копать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 20,
      "infinitive": "do",
      "pastSimple": "did",
      "participle": "done",
      "translate": "делать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 21,
      "infinitive": "draw",
      "pastSimple": "drew",
      "participle": "drawn",
      "translate": "рисовать, тянуть",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 22,
      "infinitive": "drink",
      "pastSimple": "drank",
      "participle": "drunk",
      "translate": "пить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 23,
      "infinitive": "drive",
      "pastSimple": "drove",
      "participle": "driven",
      "translate": "водить автомобиль",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 24,
      "infinitive": "eat",
      "pastSimple": "ate",
      "participle": "eaten",
      "translate": "кушать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 25,
      "infinitive": "fall",
      "pastSimple": "fell",
      "participle": "fallen",
      "translate": "падать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 26,
      "infinitive": "feed",
      "pastSimple": "fed",
      "participle": "fed",
      "translate": "кормить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 27,
      "infinitive": "feel",
      "pastSimple": "felt",
      "participle": "felt",
      "translate": "чувствовать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 28,
      "infinitive": "fight",
      "pastSimple": "fought",
      "participle": "fought",
      "translate": "бороться",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 29,
      "infinitive": "find",
      "pastSimple": "found",
      "participle": "found",
      "translate": "находить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 30,
      "infinitive": "fly",
      "pastSimple": "flew",
      "participle": "flown",
      "translate": "летать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 31,
      "infinitive": "forbid",
      "pastSimple": "forbade",
      "participle": "forbidden",
      "translate": "запрещать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 32,
      "infinitive": "forget",
      "pastSimple": "forgot",
      "participle": "forgotten",
      "translate": "забывать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 33,
      "infinitive": "forgive",
      "pastSimple": "forgave",
      "participle": "forgiven",
      "translate": "простить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 34,
      "infinitive": "freeze",
      "pastSimple": "froze",
      "participle": "frozen",
      "translate": "замораживать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 35,
      "infinitive": "get",
      "pastSimple": "got",
      "participle": "got (gotten)",
      "translate": "получать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 36,
      "infinitive": "give",
      "pastSimple": "gave",
      "participle": "given",
      "translate": "давать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 37,
      "infinitive": "go",
      "pastSimple": "went",
      "participle": "gone",
      "translate": "идти",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 38,
      "infinitive": "grow",
      "pastSimple": "grew",
      "participle": "grown",
      "translate": "расти",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 39,
      "infinitive": "have (has)",
      "pastSimple": "had",
      "participle": "had",
      "translate": "иметь",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 40,
      "infinitive": "hear",
      "pastSimple": "heard",
      "participle": "heard",
      "translate": "слышать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 41,
      "infinitive": "hide",
      "pastSimple": "hid",
      "participle": "hidden",
      "translate": "прятать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 42,
      "infinitive": "hit",
      "pastSimple": "hit",
      "participle": "hit",
      "translate": "попадать, ударять",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 43,
      "infinitive": "hold",
      "pastSimple": "held",
      "participle": "held",
      "translate": "держать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 44,
      "infinitive": "hurt",
      "pastSimple": "hurt",
      "participle": "hurt",
      "translate": "причинять боль",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 45,
      "infinitive": "keep",
      "pastSimple": "kept",
      "participle": "kept",
      "translate": "держать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 46,
      "infinitive": "know",
      "pastSimple": "knew",
      "participle": "known",
      "translate": "знать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 47,
      "infinitive": "lay",
      "pastSimple": "laid",
      "participle": "laid",
      "translate": "класть, стелить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 48,
      "infinitive": "lead",
      "pastSimple": "led",
      "participle": "led",
      "translate": "вести, лидировать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 49,
      "infinitive": "learn",
      "pastSimple": "learnt (learned)",
      "participle": "learnt (learned)",
      "translate": "учиться, узнавать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 50,
      "infinitive": "leave",
      "pastSimple": "left",
      "participle": "left",
      "translate": "покидать, оставлять",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 51,
      "infinitive": "lend",
      "pastSimple": "lent",
      "participle": "lent",
      "translate": "давать взаймы",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 52,
      "infinitive": "let",
      "pastSimple": "let",
      "participle": "let",
      "translate": "позволять",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 53,
      "infinitive": "lie",
      "pastSimple": "lay",
      "participle": "lain",
      "translate": "лежать\/врать правильный",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 54,
      "infinitive": "light",
      "pastSimple": "lit",
      "participle": "lit",
      "translate": "зажигать, освещать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 55,
      "infinitive": "lose",
      "pastSimple": "lost",
      "participle": "lost",
      "translate": "терять",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 56,
      "infinitive": "make",
      "pastSimple": "made",
      "participle": "made",
      "translate": "делать, мастерить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 57,
      "infinitive": "mean",
      "pastSimple": "meant",
      "participle": "meant",
      "translate": "значить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 58,
      "infinitive": "meet",
      "pastSimple": "met",
      "participle": "met",
      "translate": "встречать, знакомиться",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 59,
      "infinitive": "pay",
      "pastSimple": "paid",
      "participle": "paid",
      "translate": "платить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 60,
      "infinitive": "put",
      "pastSimple": "put",
      "participle": "put",
      "translate": "класть, ставить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 61,
      "infinitive": "read",
      "pastSimple": "read",
      "participle": "read",
      "translate": "читать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 62,
      "infinitive": "ride",
      "pastSimple": "rode",
      "participle": "ridden",
      "translate": "ездить верхом",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 63,
      "infinitive": "ring",
      "pastSimple": "rang",
      "participle": "rung",
      "translate": "звонить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 64,
      "infinitive": "rise",
      "pastSimple": "rose",
      "participle": "risen",
      "translate": "восходить, подниматься",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 65,
      "infinitive": "run",
      "pastSimple": "ran",
      "participle": "run",
      "translate": "бежать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 66,
      "infinitive": "say",
      "pastSimple": "said",
      "participle": "said",
      "translate": "сказать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 67,
      "infinitive": "see",
      "pastSimple": "saw",
      "participle": "seen",
      "translate": "видеть",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 68,
      "infinitive": "seek",
      "pastSimple": "sought",
      "participle": "sought",
      "translate": "искать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 69,
      "infinitive": "sell",
      "pastSimple": "sold",
      "participle": "sold",
      "translate": "продавать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 70,
      "infinitive": "send",
      "pastSimple": "sent",
      "participle": "sent",
      "translate": "посылать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 71,
      "infinitive": "set",
      "pastSimple": "set",
      "participle": "set",
      "translate": "устанавливать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 72,
      "infinitive": "shake",
      "pastSimple": "shook",
      "participle": "shaken",
      "translate": "трясти",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 73,
      "infinitive": "shine",
      "pastSimple": "shone",
      "participle": "shone",
      "translate": "светить, сиять",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 74,
      "infinitive": "shoot",
      "pastSimple": "shot",
      "participle": "shot",
      "translate": "стрелять",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 75,
      "infinitive": "show",
      "pastSimple": "showed",
      "participle": "shown",
      "translate": "показывать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 76,
      "infinitive": "shut",
      "pastSimple": "shut",
      "participle": "shut",
      "translate": "закрывать, затворять",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 77,
      "infinitive": "sing",
      "pastSimple": "sang",
      "participle": "sung",
      "translate": "петь",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 78,
      "infinitive": "sit",
      "pastSimple": "sat",
      "participle": "sat",
      "translate": "сидеть",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 79,
      "infinitive": "sleep",
      "pastSimple": "slept",
      "participle": "slept",
      "translate": "спать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 80,
      "infinitive": "slide",
      "pastSimple": "slid",
      "participle": "slid",
      "translate": "скользить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 81,
      "infinitive": "smell",
      "pastSimple": "smelt",
      "participle": "smelt",
      "translate": "пахнуть, нюхать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 82,
      "infinitive": "speak",
      "pastSimple": "spoke",
      "participle": "spoken",
      "translate": "говорить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 83,
      "infinitive": "spend",
      "pastSimple": "spent",
      "participle": "spent",
      "translate": "тратить, проводить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 84,
      "infinitive": "split",
      "pastSimple": "split",
      "participle": "split",
      "translate": "разделять, раскалывать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 85,
      "infinitive": "spoil",
      "pastSimple": "spoilt (spoiled)",
      "participle": "spoilt (spoiled)",
      "translate": "портить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 86,
      "infinitive": "spread",
      "pastSimple": "spread",
      "participle": "spread",
      "translate": "развернуть, распространять",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 87,
      "infinitive": "stand",
      "pastSimple": "stood",
      "participle": "stood",
      "translate": "стоять",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 88,
      "infinitive": "steal",
      "pastSimple": "stole",
      "participle": "stolen",
      "translate": "воровать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 89,
      "infinitive": "swim",
      "pastSimple": "swam",
      "participle": "swum",
      "translate": "плавать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 90,
      "infinitive": "take",
      "pastSimple": "took",
      "participle": "taken",
      "translate": "брать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 91,
      "infinitive": "teach",
      "pastSimple": "taught",
      "participle": "taught",
      "translate": "обучать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 92,
      "infinitive": "tear",
      "pastSimple": "tore",
      "participle": "torn",
      "translate": "рвать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 93,
      "infinitive": "tell",
      "pastSimple": "told",
      "participle": "told",
      "translate": "рассказывать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 94,
      "infinitive": "think",
      "pastSimple": "thought",
      "participle": "thought",
      "translate": "думать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 95,
      "infinitive": "throw",
      "pastSimple": "threw",
      "participle": "thrown",
      "translate": "бросать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 96,
      "infinitive": "understand",
      "pastSimple": "understood",
      "participle": "understood",
      "translate": "понимать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 97,
      "infinitive": "wake",
      "pastSimple": "woke",
      "participle": "woken",
      "translate": "будить",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 98,
      "infinitive": "wear",
      "pastSimple": "wore",
      "participle": "worn",
      "translate": "носить (одежду)",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 99,
      "infinitive": "win",
      "pastSimple": "won",
      "participle": "won",
      "translate": "побеждать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    },
    {
      "id": 100,
      "infinitive": "write",
      "pastSimple": "wrote",
      "participle": "written",
      "translate": "писать",
      "setReproduce": 0,
      "lastAttemptDate": "no"
    }
  ]
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

