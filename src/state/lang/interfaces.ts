export type Lang = 'en' | 'pl';

export interface LangState {
  lang: Lang;
}

export interface ToggleLangAction {
  type: 'toggle_lang';
  payload: {
    lang: string;
  };
}
