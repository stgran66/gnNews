export type View = 'list' | 'grid';

export interface ViewState {
  view: View;
}

export interface ToggleViewAction {
  type: 'toggle_view';
  payload: {
    view: string;
  };
}
