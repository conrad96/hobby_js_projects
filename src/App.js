import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Contacts';
import Search from './Search';

function App() {
  
  return (
    <div className="App">
      <header className="app__header">
        <h2>PhoneBook</h2>
      </header>
      <div class="app__searchRecord">
        <Search />
      </div>
      <div className="app__contactsList">  
        <Contacts />
      </div>
    </div>
  );
}

export default App;
