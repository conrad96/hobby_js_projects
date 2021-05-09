
function Contacts(id, firstName, LastName, contact)
{
    return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{LastName}</td>
            <td>{contact}</td>
        </tr>
    )
}

export default Contacts;