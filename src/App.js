import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from "./components/Intro/Intro";
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Footer from './components/Footer/Footer';


// export const ThemeContext = createContext();

function App() {

  //const theme = createTheme();
  
  return (
    <div>
      <>
        <Navbar />
          <Layout>
            <Intro />
            <Skills />
            <Projects />
            <Experience />
            <About />
          </Layout>
          <Footer />   
      </>
      {/* <ThemeContext.Provider value={{theme}}>
      <Navbar />
        <Layout>
          <Intro />
          <Skills />
          <Projects />
          <Experience />
          <About />
        </Layout>
        <Footer />
      </ThemeContext.Provider> */}
    </div>
  );
}

export default App;
