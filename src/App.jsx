import Aboutme from './compos/Aboutme';
import Footer from './compos/Footer';
import Nav from './compos/Nav';
import Projects from './compos/Projects';
import Skills from './compos/Skills';
import Contacts from './compos/contants';
import Landing from './compos/Landing';
import {  useLayoutEffect, useState } from 'react';


function App() {
  
  
  const [darkmode, setDarkMode] = useState(false)
  const [lightmode, setLightmode] = useState(true)

 

  const handleLightmode = () => {
    setLightmode(true)
    setDarkMode(false)
   
  }
    const handledarkmode = () => {
        setDarkMode(true)
        setLightmode(false)
    }
    useLayoutEffect(() => {
        
    }, [darkmode])
  return (
    <div className="App" style={{ overflow: "hidden",
               background: lightmode ? "#f7f4f3":"#171717"  ,transition: "300ms"}}>
      <Nav 
      handledarkmode={handledarkmode} 
      handleLightmode={handleLightmode}
      darkmode={darkmode} 
      lightmode={lightmode} />
      <Landing 
      darkmode={darkmode} 
      lightmode={lightmode} 
      handledarkmode={handledarkmode}/>
      <Aboutme 
         darkmode={darkmode} 
         lightmode={lightmode}/>
      <Skills
         darkmode={darkmode} 
         lightmode={lightmode}/>
      <Projects
         darkmode={darkmode} 
         lightmode={lightmode}/>
       <Contacts
          darkmode={darkmode} 
          lightmode={lightmode}/>
    <Footer/> 
    </div>
  );
}

export default App;
