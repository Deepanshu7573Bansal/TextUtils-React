import l from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert'
import Footer from './Components/Footer'
import React, { useState } from 'react'
// import About from './Components/About'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const [color, setcolor] = useState('w');

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 5000);
  }

  const togglefun = (name) => {
    setmode(name);
    if (name == 'light') {
      document.body.style.background = 'white';
      setcolor("w");
      showalert("Light mode has been enabled", "success")
    }
    if (name == 'danger') {
      document.body.style.background = 'red';
      setcolor("r");
      showalert("Red mode has been enabled", "success")
    }
    if (name == 'success') {
      document.body.style.background = 'green';
      setcolor("g");
      showalert("Green mode has been enabled", "success")
    }
    if (name == 'primary') {
      document.body.style.background = 'blue';
      setcolor("b");
      showalert("Primary mode has been enabled", "success")
    }
    if (name == 'dark') {
      document.body.style.background = 'black';
      setcolor("bl");
      showalert("Dark mode has been enabled", "success")
    }
  }

  return (
    <>
        <Navbar title="TextUtils" mode={mode} togglefun={togglefun} />
        <Alert alert={alert} />
        <br></br>
        <div className="container">
          <TextForm heading="Enter the text to analyze" mode={mode} showalert={showalert} />
        </div>
        <Footer color={color}/>

      {/* <Router> */}
          {/* <Routes>
            <Route exact path="/about" element={<About mode={mode} color={color}/>}/>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showalert={showalert} />} />
          </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;