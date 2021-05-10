import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';

function App() {
  
  return (
    <div className="App">
      <header className="app__header">
        <h2>PhoneBook</h2>
      </header>      
      <Search />      
    </div>
  );
}

export default App;
