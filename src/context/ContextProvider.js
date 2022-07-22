import React, { useState, createContext, useContext } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setactiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState);
  const [screenSize, setscreenSize] = useState(undefined);
  const [currentColorSelected, setcurrentColor] = useState('#03C9D7');
  const [currentMode, setcurrentMode] = useState('Light');
  const [themeSetting, setthemeSetting] = useState(false);

  const setMode = (e) => {
    setcurrentMode(e.target.value);

    localStorage.setItem('themeMode', e.target.value);

    setthemeSetting(false);
  };
  const setColor = (e) => {
    setcurrentColor(e);

    localStorage.setItem('themeColor', e);

    setthemeSetting(false);
  };

  const handleClick = (clicked) => {
    setisClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        currentColorSelected,
        currentMode,
        activeMenu,
        screenSize,
        setscreenSize,
        handleClick,

        isClicked,
        initialState,
        setisClicked,
        setactiveMenu,
        setcurrentColor,
        setcurrentMode,
        setMode,
        setColor,
        themeSetting,
        setthemeSetting,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const checksContext = () => useContext(StateContext);
