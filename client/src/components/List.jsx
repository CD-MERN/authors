import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import DeleteButton from './DeleteButton';

const List = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchAuthors()
    }, []);


    const fetchAuthors = () => {
        axios.get('http://localhost:8000/api/authors')
            .then((response) => setAuthors(response.data.authors))
            .catch((error) => console.log("Error", error));
    }
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <div>
            <h3>List</h3><Link to="/authors/create">Add Author</Link>
            <div className='container'>
                {authors.map((author, index) => (
                    <div className="row" key={index}>
                        <div className='col-md-12'>
                            <div className="card mb-2">
                                <div className='card-header d-flex justify-content-between align-items-center'>

                                    <span>
                                        <span className='fw-bold'>
                                            {author.name}
                                        </span>
                                        -
                                        <span>
                                            {author._id}
                                        </span>
                                    </span>

                                    <span className='d-flex gap-3'>
                                        <Link to={`/authors/${author._id}/edit`} className="btn btn-warning">
                                            Edit
                                        </Link>

                                        <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List





