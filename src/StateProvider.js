import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayout
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull informations from data Layer;
export const useStateValue = () => useContext(StateContext);
