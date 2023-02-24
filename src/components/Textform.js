import React, { useState } from 'react'

export default function Textform(props) {
  const handleOnChange = (event)=>{

    setText(event.target.value);
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to Uppercase','success');
  }
  const handlelowClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const[text,setText]= useState('Enter Text Here');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="form-group">
   
    <textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8"/>
    <button onClick={handleUpClick} className="btn btn-primary my-2" >ConvertUppercase</button>
    <button onClick={handlelowClick} className="btn btn-primary my-2 mx-2" >ConvertLowercase</button>
  </div>
      
    </div>
    <div className="container">
      <h1>Text Summary</h1>
      <p>{text.split(" ").length}words and {text.length}Character</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
