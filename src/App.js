import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { createTheme, ThemeProvider} from '@material-ui/core';
import { createContext } from 'react';
import Intro from "./components/Intro/Intro";
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
export const ThemeContext = createContext();


function App() {

  const theme = createTheme();
  
  return (
    <div>
      <ThemeContext.Provider value={{theme}}>
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
