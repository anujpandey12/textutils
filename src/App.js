import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = (props) => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    
    setTimeout(() => {
      setAlert(null);  
    }, 2000);
  }
  
  const toggleMode = () => {
    if (mode === 'light') {  
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enabled", "success");  
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      showAlert("Light Mode is enabled", "success"); 
    }  
  }
  return (
    <div>
      <Router>
        <Header siteTitle="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path='textutils' element={<TextForm heading="Enter a text to analyze below:" showAlert={showAlert} mode={mode} />} />
            <Route path='about' element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
};

export default App;