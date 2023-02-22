import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import React, {useState} from 'react';






function App() {

  const [toggleDark, setToggleDark] = useState(false)


  return (
    <div className="App">
      {/* <input onChange={() => setToggleDark(!toggleDark)} id="toggle" type="checkbox"/>
      <label for="toggle"></label> */}
      <SearchBar />
      
    </div>
  );
}

export default App;
