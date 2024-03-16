import { useReducer } from "react";
import { createContainer } from "react-tracked";

export const actions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

type State = {
  isLoggedIn: boolean;
  farcasterId: string;
  farcasterHandle: string;
};
export const initialState: State = {
  isLoggedIn: false,
  farcasterId: "",
  farcasterHandle: "",
};

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
  createContainer(() => useReducer(reducer, initialState));

type action = {
  type: string;
  payload?: any;
};

export const reducer = (state: State, action: action): State => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        farcasterId: action.payload.user,
        farcasterHandle: action.payload.farcasterHandle,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isLoggedIn: false,
        farcasterId: "",
        farcasterHandle: "",
      };
    }

    default:
      return state;
  }
};
