import Table from 'react-bootstrap/Table';

function Contacts(contacts)
{
    let data = contacts.list;
    
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