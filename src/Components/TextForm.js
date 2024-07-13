import React, { useState } from 'react'


export default function TextForm(props) {
    const Uppercase = () => {
        let str = text.toUpperCase();
        setText1(str);
        props.showalert("Converted to uppercase!","success");
    }

    const lowercase = () => {
        let str = text.toLowerCase();
        setText1(str);
        props.showalert("Converted to lowercase!","success");
    }

    const clear = () => {
        let str="";
        setText(str);
        setText1(str);
        props.showalert("Text Cleared!","success");
    }

    const copy = () => {
        navigator.clipboard.writeText(text1);
        props.showalert("Copied to Clipboard!","success");
    }

    const change = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    const [text1, setText1] = useState('');

    return (
        <>
        <div style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder="Enter your text" onChange={change} id="mybox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className={`btn border-${props.mode=="light"?'dark':'light'} btn-${props.mode} mx-2`} onClick={Uppercase}>Convert to uppercase</button>
            <button className={`btn border-${props.mode=="light"?'dark':'light'} btn-${props.mode} mx-2`} onClick={lowercase}>Convert to lowercase</button>
            <button className={`btn border-${props.mode=="light"?'dark':'light'} btn-${props.mode} mx-2`} onClick={clear}>Clear text</button>
            {/* copy */}
            {/* extra space */}
            {/* capitalize */}
        </div>
        <br></br>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your Text summary</h2>
            <p>Number of words: {text.length==0?text.split(" ").length-1:(text[text.length-1]==" "?text.split(" ").length-1:text.split(" ").length)}</p>
            <p>Number of characters: {text.length}</p>
            <p>Read in {text.length==0?0:(text[text.length-1]==" "?(text.split(" ").length-1)*0.008:text.split(" ").length*0.008)} minutes</p>
            <br></br>
            <h2>Preview</h2>
            <textarea className="form-control" value={text1} id="mybox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}></textarea>
            <br></br>
            <button className={`btn border-${props.mode=="light"?'dark':'light'} btn-${props.mode} mx-2`} onClick={copy} >Copy text</button>
        </div>
        </>
    )
}