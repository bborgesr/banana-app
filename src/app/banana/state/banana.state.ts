export interface State {
  isPeeled: boolean;
  bitesRemaining: number;
  color: string;
}

export const initialState: State = {
  isPeeled: false,
  bitesRemaining: 9,
  color: "yellow"
} as State;
