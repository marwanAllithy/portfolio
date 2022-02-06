import Aboutme from './compos/Aboutme';
import Footer from './compos/Footer';
import Nav from './compos/Nav';
import Projects from './compos/Projects';
import Skills from './compos/Skills';
import Contacts from './compos/contants';
import Landing from './compos/Landing';
import { useEffect, useLayoutEffect, useState } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import style, {ThemeProvider} from 'styled-components'
// import {darkTheme, lightTheme} from "./themes"
import styled from 'styled-components';


function App() {
  const [loading, setLoading] = useState(true)
  useLayoutEffect(()=>{

    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  },[])
  
  const [darkmode, setDarkMode] = useState("dark")
  const [lightmode, setLightmode] = useState("light")
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === 'light' ?  setTheme('dark') : setTheme("light")
  }
  const StyledApp = styled.div

  const handleLightmode = () => {
    setLightmode(true)
    setDarkMode(false)
   
  }
    const handledarkmode = () => {
        setDarkMode(true)
        setLightmode(false)
    }
    useEffect(() => {
        
    }, [darkmode])
  return (
    <div className="App" style={{ overflow: "hidden"}}>
       {/* {
        loading ? 
        <div className="louading__bar">
      
      <h2 className="loading__welcome"><SyncLoader color={"#574AE2"} loading={loading}  height={5} width={"100%"}/></h2>
        </div>
        :  */}
<>
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> */}
        {/* <StyledApp> */}

      <Nav 
      handledarkmode={handledarkmode} 
      handleLightmode={handleLightmode}
      darkmode={darkmode} 
      lightmode={lightmode} />
      <Landing 
      darkmode={darkmode} 
      lightmode={lightmode} 
      handledarkmode={handledarkmode}/>
      <Aboutme />
      <Skills/>
      <Projects/>
       <Contacts/>
    <Footer/> 
      {/* </StyledApp> */}
      {/* </ThemeProvider> */}
   
      </>
       {/* }  */}

    </div>
  );
}

export default App;
