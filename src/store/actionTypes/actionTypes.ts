export const ADD_VERB = 'irregularVerbs/addVerb'

export interface IFormAddVerb {
  infinitive: string
  pastSimple: string
  participate: string
  translate: string
}

export interface IAddVerb {
  type: typeof ADD_VERB
  data: IFormAddVerb
}
