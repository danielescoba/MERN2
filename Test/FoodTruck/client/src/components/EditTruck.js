import React, {useState, useEffect} from 'react'
import TruckForm from './TruckForm';
import axios from 'axios';
import { navigate } from '@reach/router';


const EditTruck = props => {
    const [truck,setTruck] = useState({
        name:'',
        style:'',
        description:''
    });
    const [errors, setErrors] = useState({});
    useEffect( () => {
        axios.get(`http://localhost:8000/api/trucks/${props.id}`)
            .then(response=>{
                if(response.data == null){
                    navigate('/');
                }
                setTruck(response.data);
            })
            .catch(err => console.log(err));
    },[])
    const submitHandler = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/trucks/${props.id}`,truck)
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
    const deleteHandler = ()=>{
        axios.delete(`http://localhost:8000/api/trucks/${props.id}`)
            .then(response => navigate('/'))
            .catch(err => console.log(err));
    }
    return (
        <div>
            <h2>Edit Food Truck</h2>
            <form onSubmit={ submitHandler}>
            <TruckForm truck={truck} changeHandler={changeHandler} deleteHandler={deleteHandler} errors={errors} action="edit"/>
            </form>
        </div>
    )
}

export default EditTruck
