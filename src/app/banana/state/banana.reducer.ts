import {
  GET_NEW_BANANA,
  PEEL_BANANA,
  EAT_BANANA,
  TIME_HOP_COMPLETE
} from "./banana.actions";
import * as bananaActions from "./banana.actions";

export function reducer(state: any, action: bananaActions.BananaAction): any {
  switch (action.type) {
    case GET_NEW_BANANA: {
      console.log("REDUCER: " + GET_NEW_BANANA);
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: "yellow"
      };
    }
    case PEEL_BANANA: {
      console.log("REDUCER: " + PEEL_BANANA);
      return {
        ...state,
        isPeeled: true
      };
    }
    case EAT_BANANA: {
      console.log("REDUCER: " + EAT_BANANA);
      return {
        ...state,
        bitesRemaining: state.bitesRemaining - action.payload
      };
    }
    case TIME_HOP_COMPLETE: {
      console.log("REDUCER: " + TIME_HOP_COMPLETE);
      return {
        ...state,
        color: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
