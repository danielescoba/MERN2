import React, {useState} from 'react'
import TruckForm from './TruckForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewTruck = () => {
    const [truck,setTruck] = useState({
        name:'',
        style:'',
        description:''
    });
    const [errors, setErrors] = useState({});
    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/trucks',truck)
            .then(response=>{
                if(response.data.errors){
                    setErrors(response.data.errors);
                }
                else{
                    navigate('/');
                }
            })
            .catch(err=> console.log(err))
    }
    const changeHandler = e =>{
        setTruck({
            ...truck,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <h2>New Food Truck</h2>
            <form onSubmit={submitHandler}>
                <TruckForm truck={truck} changeHandler={changeHandler} errors={errors} action="create"/>
            </form>
        </div>
    )
}

export default NewTruck
