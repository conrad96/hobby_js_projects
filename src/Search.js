import {TextField} from '@material-ui/core'
import './Search.css';

function Search()
{
    return (
        <form className="search__box">          
            <TextField className="search__field" label="search" />
        </form>
    )
}

export default Search;