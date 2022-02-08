import Aboutme from './compos/Aboutme';
import Footer from './compos/Footer';
import Nav from './compos/Nav';
import Projects from './compos/Projects';
import Skills from './compos/Skills';
import Contacts from './compos/contants';
import Landing from './compos/Landing';
import {  useLayoutEffect, useState } from 'react';
import SyncLoader from "react-spinners/SyncLoader";

function App() {
  const [loading, setLoading] = useState(true)
  useLayoutEffect(()=>{

    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  },[])
  
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
               background: lightmode ? "#f7f4f3":"#171717"  }}>
        {
        loading ? 
        <div className="louading__bar">
      
      <h2 className="loading__welcome"><SyncLoader color={"#574AE2"} loading={loading}  height={5} width={"100%"}/></h2>
        </div>
        :
<>
       

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

   
   
      </>
        }  

    </div>
  );
}

export default App;
