import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Contacts';

function App() {
  let data = [
    {
      id: 1,
      firstName: "Conrad",
      lastName: "Mugisha",
      contact: "0706848422"
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      contact: "0788042453"
    },
    {
      id: 3,
      firstName: "Mary",
      lastName: "Jane",
      contact: "0774561298"
    }
  ];
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
          <tbody>
            {
              data.map((obj)=> {
                console.log(obj.firstName);
                
                <Contacts id={obj.id} firstName={obj.firstName} lastName={obj.lastName} contact={obj.contact} />
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
