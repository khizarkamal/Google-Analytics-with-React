import './App.css';
import ReactGa from "react-ga";
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    ReactGa.initialize('G-FQXCWRX2GT');

    ReactGa.pageview('/')
  },[]);

   
  return (
    <div className="App">
      <header className="App-header">
        Hello World
      </header>
    </div>
  );
}

export default App;
