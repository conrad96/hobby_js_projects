import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <h2>PhoneBook</h2>
      </header>
      <div class="app__searchRecord">
        <form>
          <input type="text" placeholder="Search..." className="form-control" />
        </form>
      </div>
      <div className="app__contactsList">  
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contacts</th>
            </tr>
          </thead>          
        </Table>
      </div>
    </div>
  );
}

export default App;
