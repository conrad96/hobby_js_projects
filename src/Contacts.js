import Table from 'react-bootstrap/Table';

function Contacts()
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
      
    return (
        <Table responsive hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>                                                                
                {
                    Array.from(data).map((obj)=> (
                        <tr>
                            <td>{obj.id}</td>
                            <td>{obj.firstName}</td>
                            <td>{obj.lastName}</td>
                            <td>{obj.contact}</td>
                        </tr>
                        
                    ))
                }
            </tbody>
        </Table>
    )
}

export default Contacts;