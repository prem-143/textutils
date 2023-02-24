import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert'; 
import About from './components/About';
// import { Routes ,Route } from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type) =>
  {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }
  const togglemode = () =>
  {
    if(mode === 'dark')
    {
      setMode('light');
      showAlert("Light mode Enable","success");
      setInterval(() => {
        document.title="Install Now"
      }, 1500);
    }
    else
    {
      setMode('dark');
      showAlert("Dark mode Enable","danger");
    }
    
  }
  return (
    <>
       <Navbar title="TextUtils" togglemode = {togglemode} mode={mode}></Navbar>
       <Alert alert={alert}/>
       <div className="container">
       <Textform showAlert={showAlert} heading="Text Transformation"></Textform>
      </div>
      {/* <div className="container">
      <Route path='/about' element={<About/>} />
       </div> */}
      
    </>
  );
}

export default App;
