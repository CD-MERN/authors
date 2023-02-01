import React from 'react'
import axios from 'axios';
const DeleteButton = ({authorId, successCallback})  => {
    const deleteItem = () => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then(() => {
            successCallback();
        })
        .catch((error) => console.log("Error", error));
    }

    return (
        <button className='btn btn-danger' type='button' onClick={deleteItem}>
            Delete
        </button>
    )
}
export default DeleteButton