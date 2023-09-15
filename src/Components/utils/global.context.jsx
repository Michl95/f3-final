import React, { createContext, useReducer, useEffect } from "react";

// Definimos el estado inicial
const initialState = {
  theme: "light",
  users: [], // almaceno datos de usuarios
};

export const GlobalContext = createContext();

// Acciones para el useReducer
const SET_THEME = "SET_THEME";
const SET_USERS = "SET_USERS";

// gestionamo el estado global
const reducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};


export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({
      type: SET_THEME,
      payload: newTheme,
    });
    // Guardamos el tema en localStorage
    localStorage.setItem("theme", newTheme);
  };

  // obtenemos datos de la API "https://jsonplaceholder.typicode.com/users"
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: SET_USERS, payload: data });
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Obtenemos la clase almacenda en el storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch({ type: SET_THEME, payload: savedTheme });
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        toggleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};