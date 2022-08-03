import React, { createContext, useReducer } from "react";

const initialState = {
  candidate1: 0,
  candidate2: 0,
  candidate3: 0,
  candidate4: 0,
  total: false,
  porcentual: false,
  normal: false,
  showCandidate1: false,
  showCandidate2: false,
  showCandidate3: false,
  showCandidate4: false,
};

const Context = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "CANDIDATE1":
      return { ...state, candidate1: state.candidate1 + 1 };
    case "CANDIDATE2":
      return { ...state, candidate2: state.candidate2 + 1 };
    case "CANDIDATE3":
      return { ...state, candidate3: state.candidate3 + 1 };
    case "CANDIDATE4":
      return { ...state, candidate4: state.candidate4 + 1 };
    case "TOTAL":
      return { ...state, total: !state.total };
    case "PORCENTUAL":
      return { ...state, porcentual: !state.porcentual };
    case "NORMAL":
      return { ...state, normal: !state.normal };
    case "SHOWCANDIDATE1":
      return { ...state, showCandidate1: !state.showCandidate1 };
    case "SHOWCANDIDATE2":
      return { ...state, showCandidate2: !state.showCandidate2 };
    case "SHOWCANDIDATE3":
      return { ...state, showCandidate3: !state.showCandidate3 };
    case "SHOWCANDIDATE4":
      return { ...state, showCandidate4: !state.showCandidate4 };
    default:
      return state;
  }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = {
    state,
    dispatch,
    test: () => console.log("from context"),
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export default Context;
