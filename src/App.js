import React,{useState} from "react";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Footer from "./components/footer/Footer";

export const themeContext = React.createContext(null)

function App() {

  const[theme, setTheme]=useState('dark')
  const toggleTheme=()=>{
    setTheme((curr)=>(curr === 'light'?'dark':'light'))
  }

  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
    <div className="app-wrapper" id={theme}>
      <Navbar/>
      <div className="body-container">
        <Home/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </div>
    </themeContext.Provider>
  );
}

export default App;
