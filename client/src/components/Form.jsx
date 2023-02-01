import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'

const Form = ({ editMode }) => {
    const [name, setName] = useState({
        value: '',
        error: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();


    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (editMode) {
            updateProduct();
        } else {
            createProduct();
        }
    }

    const createProduct = () => {
        const data = {
            name: name.value,
        }
        axios.post('http://localhost:8000/api/authors/create', data)
            .then(() => {
                reset();
                navigate('/');
            })
            .catch((error) => {
                const errors = error.response.data.error.errors;

                if (errors.name) {
                    setName({ ...name, error: errors.name.message })
                } else {
                    setName({ ...name, error: '' })
                }
            })
    }

    const updateProduct = () => {
        const data = {
            name: name.value,
        }
        console.log(data);
        axios.put(`http://localhost:8000/api/authors/${id}`, data)
        .then(() => {
            reset();
            navigate('/')
        })
        .catch((error) => {
            const errors = error.response.data.error.errors;

            if (errors.name) {
                setName({ ...name, error: errors.name.message })
            } else {
                setName({ ...name, error: '' })
            }
        })
    }

    const reset = () => {
        setName({
            value: '',
            error: ''
        });
    }

    useEffect(() => {
        if (editMode && id) {
            reset();
            fetchProduct();
        }
    }, []);

    const fetchProduct = () => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((response) => {
                reset();
                setName({ ...name, value: response.data.author.name });
            })
            .catch((error) => {
                navigate('/error')
            });
    }

    return (
        <div>
            <form className='mb-5' onSubmit={onSubmitHandler}>
                <h3>Form</h3>
                <div className='container'>
                    <div className='row mb-3'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label>Name</label>
                                <input name='name' required type="text" className={`form-control ${name.error.length ? 'border-danger' : ''}`} value={name.value} onChange={(e) => setName({ ...name, value: e.target.value })} />
                                {name.error.length ?
                                    <small className='text-danger'>{name.error}</small> : ''
                                }
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center gap-5'>
                        <Link to="/" className='btn btn-secondary'>Cancel</Link>
                        <button type="submit" className="btn btn-primary px-4 text-center">{editMode ? 'Update' : 'Create'}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form