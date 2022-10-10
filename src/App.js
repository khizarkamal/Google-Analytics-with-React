import './App.css';
import ReactGa from "react-ga";
import { useEffect } from 'react';
import ContactUs from "./contactUs"

function App() {

  useEffect(()=>{

    ReactGa.initialize('UA-245010941-1');
    //react page view
    ReactGa.pageview('/')
  },[]);

   
  return (
    <div className="App">
      <header className="App-header">
        Hello World
      </header>
      <ContactUs/>
    </div>
  );
}

export default App;
