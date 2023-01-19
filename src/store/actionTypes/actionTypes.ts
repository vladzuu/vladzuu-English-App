export const ADD_VERB = 'irregularVerbs/addVerb'
export const APPLY_VIEW_OPTION_VERBS = 'irregularVerbs/applySettingVerbList'

export interface IFormAddVerb {
  infinitive: string
  pastSimple: string
  participle: string
  translate: string
}

export interface IAddVerb {
  type: typeof ADD_VERB
  data: IFormAddVerb
}
