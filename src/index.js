import React, { useMemo } from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeCtxProvider, useThemeMode } from './Hooks/ThemeContext';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { dark, light } from './theme';

const Root = () => {
  const { darkMode } = useThemeMode();
  let theme = React.useMemo(() => {
    return createTheme(darkMode ? dark : light);
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

// Start the Rendering from the
// Root component
ReactDOM.render(
  <React.StrictMode>
    <ThemeCtxProvider>
      <Root />
    </ThemeCtxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
