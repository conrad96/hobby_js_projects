import {TextField} from '@material-ui/core'
import Contacts from './Contacts';
import './Search.css';

function Search()
{
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

    let contactList = [];
    
    function searchFirstName(name)
    {
        let record = data.find( ({firstName})=> firstName.includes(name) );
        if(record !== undefined) contactList.push(record);
    }

    function searchLastName(name)
    {
        let record = data.find( ({lastName})=> lastName.includes(name) );
        if(record !== undefined) contactList.push(record);
    }

    function searchContact(contact)
    {
        let record = data.find( ({contact})=> contact.includes(contact) );
        if(record !== undefined) contactList.push(record);        
    }

    searchFirstName('Conrad');
    searchLastName('Mary');
    searchContact('0788042453');

    console.log(contactList);

    return (
        <div className="search__body">
            <div class="search__record">
                <form className="search__box">          
                    <TextField className="search__field" label="search" />
                </form>
            </div>
            <div className="search__contactsList">  
                <Contacts list={contactList} />
            </div>
        </div>        
    )
}

export default Search;