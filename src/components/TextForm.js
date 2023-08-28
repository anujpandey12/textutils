import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');
    
    const handleUpClick = ()=> {
        let newText =  text.toUpperCase();      
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText =  text.toLowerCase();       
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "success");
    }

    const handleClearClick = () => {
        let newText =  '';       
        setText(newText);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }    

    return (
        <>
            <div style={{color: props.mode==='dark'?'white':'black'}}>
                <h4>{props.heading}</h4>
                <div className="mb-3">                
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={copyToClipBoard}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            </div>
            <div className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Nothing to preview!'}</p>
            </div>
        </>
    )
}