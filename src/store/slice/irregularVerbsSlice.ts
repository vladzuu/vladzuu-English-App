import { IAddVerb } from './../actionTypes/actionTypes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITransl {
  id: number
  infinitive: string
  pastSimple: string
  participate: string
  translate: string
  setReproduce: number
}

export interface IInitialState {
  chsum: string
  id: number
  verbs: ITransl[]
}

let initialState: IInitialState = {
  chsum: "bdc096a48ce365dcd14df56b26a8b8347b18aff0",
  id: 49413,
  verbs: [{
    id: 1,
    infinitive: "be",
    pastSimple: 'was(were)',
    participate: 'been',
    translate: 'Быть',
    setReproduce: 0,
  },
  {
    id: 2,
    infinitive: "bear",
    pastSimple: 'bore',
    participate: 'born',
    translate: 'Рожать',
    setReproduce: 0,
  },
  {
    id: 3,
    infinitive: "beat",
    pastSimple: 'beat',
    participate: 'beaten',
    translate: 'Бить',
    setReproduce: 0,
  },
  ]
}


const irregularVerbs = createSlice({
  name: 'irregularVerbs',
  initialState,
  reducers: {
    addNewVerb: (state, action: PayloadAction<IAddVerb>) => {
      let prevId = state.verbs[state.verbs.length - 1].id
      let newVerbs: ITransl = {
        id: prevId + 1,
        infinitive: action.payload.data.infinitive,
        pastSimple: action.payload.data.pastSimple,
        participate: action.payload.data.participate,
        translate: action.payload.data.translate,
        setReproduce: 0
      }
      console.log(action)
      state.verbs.push(newVerbs)
    }
  }
})

export const { addNewVerb } = irregularVerbs.actions

export default irregularVerbs.reducer

let v = [
  {
    "Infinitive": "be",
    "pastSimple": "was (were)",
    "Participle": "been",
    "transl": "быть"
  },
  {
    "Infinitive": "bear",
    "pastSimple": "bore",
    "Participle": "born",
    "transl": "рожать"
  },
  {
    "Infinitive": "beat",
    "pastSimple": "beat",
    "Participle": "beaten",
    "transl": "бить"
  },
  {
    "Infinitive": "become",
    "pastSimple": "became",
    "Participle": "become",
    "transl": "становиться"
  },
  {
    "Infinitive": "begin",
    "pastSimple": "began",
    "Participle": "begun",
    "transl": "начинать"
  },
  {
    "Infinitive": "bind",
    "pastSimple": "bound",
    "Participle": "bound",
    "transl": "связывать"
  },
  {
    "Infinitive": "bite",
    "pastSimple": "bit",
    "Participle": "bitten",
    "transl": "кусаться"
  },
  {
    "Infinitive": "blow",
    "pastSimple": "blew",
    "Participle": "blown",
    "transl": "дуть"
  },
  {
    "Infinitive": "break",
    "pastSimple": "broke",
    "Participle": "broken",
    "transl": "ломать"
  },
  {
    "Infinitive": "bring",
    "pastSimple": "brought",
    "Participle": "brought",
    "transl": "приносить"
  },
  {
    "Infinitive": "build",
    "pastSimple": "built",
    "Participle": "built",
    "transl": "строить"
  },
  {
    "Infinitive": "buy",
    "pastSimple": "bought",
    "Participle": "bought",
    "transl": "покупать"
  },
  {
    "Infinitive": "catch",
    "pastSimple": "caught{кат}",
    "Participle": "caught",
    "transl": "ловить"
  },
  {
    "Infinitive": "choose",
    "pastSimple": "chose",
    "Participle": "chosen",
    "transl": "выбирать"
  },
  {
    "Infinitive": "come",
    "pastSimple": "came",
    "Participle": "come",
    "transl": "приходить"
  },
  {
    "Infinitive": "cost",
    "pastSimple": "cost",
    "Participle": "cost",
    "transl": "стоить"
  },
  {
    "Infinitive": "cut",
    "pastSimple": "cut",
    "Participle": "cut",
    "transl": "резать"
  },
  {
    "Infinitive": "deal",
    "pastSimple": "dealt",
    "Participle": "dealt",
    "transl": "вести дела"
  },
  {
    "Infinitive": "dig",
    "pastSimple": "dug",
    "Participle": "dug",
    "transl": "копать"
  },
  {
    "Infinitive": "do",
    "pastSimple": "did",
    "Participle": "done",
    "transl": "делать"
  },
  {
    "Infinitive": "draw",
    "pastSimple": "drew",
    "Participle": "drawn",
    "transl": "рисовать, тянуть"
  },
  {
    "Infinitive": "drink",
    "pastSimple": "drank",
    "Participle": "drunk",
    "transl": "пить"
  },
  {
    "Infinitive": "drive",
    "pastSimple": "drove",
    "Participle": "driven",
    "transl": "водить автомобиль"
  },
  {
    "Infinitive": "eat",
    "pastSimple": "ate",
    "Participle": "eaten",
    "transl": "кушать"
  },
  {
    "Infinitive": "fall",
    "pastSimple": "fell",
    "Participle": "fallen",
    "transl": "падать"
  },
  {
    "Infinitive": "feed",
    "pastSimple": "fed",
    "Participle": "fed",
    "transl": "кормить"
  },
  {
    "Infinitive": "feel",
    "pastSimple": "felt",
    "Participle": "felt",
    "transl": "чувствовать"
  },
  {
    "Infinitive": "fight",
    "pastSimple": "fought",
    "Participle": "fought",
    "transl": "бороться"
  },
  {
    "Infinitive": "find",
    "pastSimple": "found",
    "Participle": "found",
    "transl": "находить"
  },
  {
    "Infinitive": "fly",
    "pastSimple": "flew",
    "Participle": "flown",
    "transl": "летать"
  },
  {
    "Infinitive": "forbid",
    "pastSimple": "forbade",
    "Participle": "forbidden",
    "transl": "запрещать"
  },
  {
    "Infinitive": "forget",
    "pastSimple": "forgot",
    "Participle": "forgotten",
    "transl": "забывать"
  },
  {
    "Infinitive": "forgive",
    "pastSimple": "forgave",
    "Participle": "forgiven",
    "transl": "простить"
  },
  {
    "Infinitive": "freeze",
    "pastSimple": "froze",
    "Participle": "frozen",
    "transl": "замораживать"
  },
  {
    "Infinitive": "get",
    "pastSimple": "got",
    "Participle": "got (gotten)",
    "transl": "получать"
  },
  {
    "Infinitive": "give",
    "pastSimple": "gave",
    "Participle": "given",
    "transl": "давать"
  },
  {
    "Infinitive": "go",
    "pastSimple": "went",
    "Participle": "gone",
    "transl": "идти"
  },
  {
    "Infinitive": "grow",
    "pastSimple": "grew",
    "Participle": "grown",
    "transl": "расти"
  },
  {
    "Infinitive": "have (has)",
    "pastSimple": "had",
    "Participle": "had",
    "transl": "иметь"
  },
  {
    "Infinitive": "hear",
    "pastSimple": "heard",
    "Participle": "heard",
    "transl": "слышать"
  },
  {
    "Infinitive": "hide",
    "pastSimple": "hid",
    "Participle": "hidden",
    "transl": "прятать"
  },
  {
    "Infinitive": "hit",
    "pastSimple": "hit",
    "Participle": "hit",
    "transl": "попадать, ударять"
  },
  {
    "Infinitive": "hold",
    "pastSimple": "held",
    "Participle": "held",
    "transl": "держать"
  },
  {
    "Infinitive": "hurt",
    "pastSimple": "hurt",
    "Participle": "hurt",
    "transl": "причинять боль"
  },
  {
    "Infinitive": "keep",
    "pastSimple": "kept",
    "Participle": "kept",
    "transl": "держать"
  },
  {
    "Infinitive": "know",
    "pastSimple": "knew",
    "Participle": "known",
    "transl": "знать"
  },
  {
    "Infinitive": "lay",
    "pastSimple": "laid",
    "Participle": "laid",
    "transl": "класть, стелить"
  },
  {
    "Infinitive": "lead",
    "pastSimple": "led",
    "Participle": "led",
    "transl": "вести, лидировать"
  },
  {
    "Infinitive": "learn",
    "pastSimple": "learnt (learned)",
    "Participle": "learnt (learned)",
    "transl": "учиться, узнавать"
  },
  {
    "Infinitive": "leave",
    "pastSimple": "left",
    "Participle": "left",
    "transl": "покидать, оставлять"
  },
  {
    "Infinitive": "lend",
    "pastSimple": "lent",
    "Participle": "lent",
    "transl": "давать взаймы"
  },
  {
    "Infinitive": "let",
    "pastSimple": "let",
    "Participle": "let",
    "transl": "позволять"
  },
  {
    "Infinitive": "lie",
    "pastSimple": "lay",
    "Participle": "lain",
    "transl": "лежать\/врать правильный"
  },
  {
    "Infinitive": "light",
    "pastSimple": "lit",
    "Participle": "lit",
    "transl": "зажигать, освещать"
  },
  {
    "Infinitive": "lose",
    "pastSimple": "lost",
    "Participle": "lost",
    "transl": "терять"
  },
  {
    "Infinitive": "make",
    "pastSimple": "made",
    "Participle": "made",
    "transl": "делать, мастерить"
  },
  {
    "Infinitive": "mean",
    "pastSimple": "meant",
    "Participle": "meant",
    "transl": "значить"
  },
  {
    "Infinitive": "meet",
    "pastSimple": "met",
    "Participle": "met",
    "transl": "встречать, знакомиться"
  },
  {
    "Infinitive": "pay",
    "pastSimple": "paid",
    "Participle": "paid",
    "transl": "платить"
  },
  {
    "Infinitive": "put",
    "pastSimple": "put",
    "Participle": "put",
    "transl": "класть, ставить"
  },
  {
    "Infinitive": "read",
    "pastSimple": "read",
    "Participle": "read",
    "transl": "читать"
  },
  {
    "Infinitive": "ride",
    "pastSimple": "rode",
    "Participle": "ridden",
    "transl": "ездить верхом"
  },
  {
    "Infinitive": "ring",
    "pastSimple": "rang",
    "Participle": "rung",
    "transl": "звонить"
  },
  {
    "Infinitive": "rise",
    "pastSimple": "rose",
    "Participle": "risen",
    "transl": "восходить, подниматься"
  },
  {
    "Infinitive": "run",
    "pastSimple": "ran",
    "Participle": "run",
    "transl": "бежать"
  },
  {
    "Infinitive": "say",
    "pastSimple": "said",
    "Participle": "said",
    "transl": "сказать"
  },
  {
    "Infinitive": "see",
    "pastSimple": "saw",
    "Participle": "seen",
    "transl": "видеть"
  },
  {
    "Infinitive": "seek",
    "pastSimple": "sought",
    "Participle": "sought",
    "transl": "искать"
  },
  {
    "Infinitive": "sell",
    "pastSimple": "sold",
    "Participle": "sold",
    "transl": "продавать"
  },
  {
    "Infinitive": "send",
    "pastSimple": "sent",
    "Participle": "sent",
    "transl": "посылать"
  },
  {
    "Infinitive": "set",
    "pastSimple": "set",
    "Participle": "set",
    "transl": "устанавливать"
  },
  {
    "Infinitive": "shake",
    "pastSimple": "shook",
    "Participle": "shaken",
    "transl": "трясти"
  },
  {
    "Infinitive": "shine",
    "pastSimple": "shone",
    "Participle": "shone",
    "transl": "светить, сиять"
  },
  {
    "Infinitive": "shoot",
    "pastSimple": "shot",
    "Participle": "shot",
    "transl": "стрелять"
  },
  {
    "Infinitive": "show",
    "pastSimple": "showed",
    "Participle": "shown",
    "transl": "показывать"
  },
  {
    "Infinitive": "shut",
    "pastSimple": "shut",
    "Participle": "shut",
    "transl": "закрывать, затворять"
  },
  {
    "Infinitive": "sing",
    "pastSimple": "sang",
    "Participle": "sung",
    "transl": "петь"
  },
  {
    "Infinitive": "sit",
    "pastSimple": "sat",
    "Participle": "sat",
    "transl": "сидеть"
  },
  {
    "Infinitive": "sleep",
    "pastSimple": "slept",
    "Participle": "slept",
    "transl": "спать"
  },
  {
    "Infinitive": "slide",
    "pastSimple": "slid",
    "Participle": "slid",
    "transl": "скользить"
  },
  {
    "Infinitive": "smell",
    "pastSimple": "smelt",
    "Participle": "smelt",
    "transl": "пахнуть, нюхать"
  },
  {
    "Infinitive": "speak",
    "pastSimple": "spoke",
    "Participle": "spoken",
    "transl": "говорить"
  },
  {
    "Infinitive": "spend",
    "pastSimple": "spent",
    "Participle": "spent",
    "transl": "тратить, проводить"
  },
  {
    "Infinitive": "split",
    "pastSimple": "split",
    "Participle": "split",
    "transl": "разделять, раскалывать"
  },
  {
    "Infinitive": "spoil",
    "pastSimple": "spoilt (spoiled)",
    "Participle": "spoilt (spoiled)",
    "transl": "портить"
  },
  {
    "Infinitive": "spread",
    "pastSimple": "spread",
    "Participle": "spread",
    "transl": "развернуть, распространять"
  },
  {
    "Infinitive": "stand",
    "pastSimple": "stood",
    "Participle": "stood",
    "transl": "стоять"
  },
  {
    "Infinitive": "steal",
    "pastSimple": "stole",
    "Participle": "stolen",
    "transl": "воровать"
  },
  {
    "Infinitive": "swim",
    "pastSimple": "swam",
    "Participle": "swum",
    "transl": "плавать"
  },
  {
    "Infinitive": "take",
    "pastSimple": "took",
    "Participle": "taken",
    "transl": "брать"
  },
  {
    "Infinitive": "teach",
    "pastSimple": "taught",
    "Participle": "taught",
    "transl": "обучать"
  },
  {
    "Infinitive": "tear",
    "pastSimple": "tore",
    "Participle": "torn",
    "transl": "рвать"
  },
  {
    "Infinitive": "tell",
    "pastSimple": "told",
    "Participle": "told",
    "transl": "рассказывать"
  },
  {
    "Infinitive": "think",
    "pastSimple": "thought",
    "Participle": "thought",
    "transl": "думать"
  },
  {
    "Infinitive": "throw",
    "pastSimple": "threw",
    "Participle": "thrown",
    "transl": "бросать"
  },
  {
    "Infinitive": "understand",
    "pastSimple": "understood",
    "Participle": "understood",
    "transl": "понимать"
  },
  {
    "Infinitive": "wake",
    "pastSimple": "woke",
    "Participle": "woken",
    "transl": "будить"
  },
  {
    "Infinitive": "wear",
    "pastSimple": "wore",
    "Participle": "worn",
    "transl": "носить (одежду)"
  },
  {
    "Infinitive": "win",
    "pastSimple": "won",
    "Participle": "won",
    "transl": "побеждать"
  },
  {
    "Infinitive": "write",
    "pastSimple": "wrote",
    "Participle": "written",
    "transl": "писать"
  }
]
let b = [[{ "word": "response", "phonetic": "/ɹɪˈspɒns/", "phonetics": [{ "text": "/ɹɪˈspɒns/", "audio": "" }, { "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/response-us.mp3", "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=675480", "license": { "name": "BY-SA 3.0", "url": "https://creativecommons.org/licenses/by-sa/3.0" } }], "meanings": [{ "partOfSpeech": "noun", "definitions": [{ "definition": "An answer or reply, or something in the nature of an answer or reply.", "synonyms": [], "antonyms": [] }, { "definition": "The act of responding or replying; reply: as, to speak in response to a question.", "synonyms": [], "antonyms": [] }, { "definition": "An oracular answer.", "synonyms": [], "antonyms": [] }, { "definition": "(liturgics) A verse, sentence, phrase, or word said or sung by the choir or congregation in sequence or reply to the priest or officiant.", "synonyms": [], "antonyms": [] }, { "definition": "(liturgics) A versicle or anthem said or sung during or after a lection; a respond or responsory.", "synonyms": [], "antonyms": [] }, { "definition": "A reply to an objection in formal disputation.", "synonyms": [], "antonyms": [] }, { "definition": "An online advertising performance metric representing one click-through from an online ad to its destination URL.", "synonyms": [], "antonyms": [] }, { "definition": "A reaction to a stimulus or provocation.", "synonyms": [], "antonyms": [] }], "synonyms": ["reaction"], "antonyms": [] }], "license": { "name": "CC BY-SA 3.0", "url": "https://creativecommons.org/licenses/by-sa/3.0" }, "sourceUrls": ["https://en.wiktionary.org/wiki/response"] }]]