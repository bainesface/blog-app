import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    actions = {
      addBlogPost: (dispatch) => {
        return () => {};
      },
    };

    return <Context.Provider value={{ state }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
