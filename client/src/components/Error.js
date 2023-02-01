import { Link } from 'react-router-dom';

const Error = () => {

    return (
        <div>
            <div className='container'>
                
            <h2>Ooooooooooooops!</h2>
            <h3>Error</h3><Link to="/authors/create">Add Author</Link>
            </div>
        </div>
    )
}

export default Error





