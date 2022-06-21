import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light") // whether node is dark or light

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-success")
  //   document.body.classList.remove("bg-primary")
  //   document.body.classList.remove("bg-danger")
  // }

  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add('bg-' + cls)
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabld", "success");
    } 
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabld", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3"> 
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>       
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}
export default App;