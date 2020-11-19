import React, {useState} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';


const AddProduct = () => {
    const [product, setProduct] = useState({
        title:'',
        price:'',
        description:''
    });
    const [errors, setErrors] = useState({});
    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',product)
            .then(response=>{
                if(response.data.errors){
                    setErrors(response.data.errors);
                }
                else{
                    navigate('/');
                }
            })
            .catch(err=>console.log(err))
    }
    const changeHandler = e =>{
        setProduct({
        ...product,
        // e.target.name get the name from the html when submit
        [e.target.name]:e.target.value
    })
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                <label>Title:</label>
                <input type="text" name="title" onChange={changeHandler} ></input>
                </div>
                <div>
                <label>Price:</label>
                <input type="number" name="price" onChange={changeHandler} ></input>
                </div>
                <div>
                <label>Description:</label>
                <input type="text" name="description" onChange={changeHandler} ></input>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AddProduct