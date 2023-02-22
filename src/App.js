import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';






function App() {
  return (
    <div className="App">
      <input id="toggle" type="checkbox"/>
    <label for="toggle">Toggle Button</label>
      <SearchBar />
      
    </div>
  );
}

export default App;
