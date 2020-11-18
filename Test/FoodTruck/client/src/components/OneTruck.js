import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";


const OneTruck = props => {
    const [truck, setTruck] = useState({
        name:'',
        style:'',
        description: '',
        reviews :[],
        avg:0
    });

    const [review, setReview] = useState({
        name:'',
        review:'',
        rating: 3
    });

    const [errors,setErrors] = useState({});

    const submitHandler = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/trucks/${props.id}/review`, review)
            .then(response=>{
                if(response.data.errors){
                    setErrors(response.data.errors.reviews.errors);
                }else{
                    navigate('/');
                    // setReview({name:'', review:'',rating:3})
                    // setTruck(response.data);
                    // setErrors({});
                }
                console.log(response.data);
            })
            .catch(err=> console.log(err));
    }
    const changeHandler = e=>{
        setReview({
            ...review,
            [e.target.name]:e.target.value
        })
    }
    useEffect (()=>{
        axios.get(`http://localhost:8000/api/trucks/${props.id}`)
            .then(response=>{
                if(response.data == null){
                    navigate('/');
                }
                let avg = 0;
                if(response.data.reviews.length !== 0){
                response.data.reviews.forEach(r=>{
                    avg += r.rating;
                    });
                    avg /= response.data.reviews.length;
                }
                response.data.avg=avg;
                setTruck(response.data);
            })
            .catch(err=>console.log(err));
    })
    return (
        <div>
            <div>
                <h2>{truck.name}</h2>
                <p>Style: {truck.style}</p>
                <p>Description: {truck.description}</p>
                <p>Average Rating:{truck.avg} stars</p>
            </div>
            <div>
                {
                    truck.reviews.map((item, i)=>
                        <div>
                            <p>{item.name}</p>
                            <div>
                                <p>Review: {item.review}</p>
                                <p>Rating: {item.rating} stars</p>
                            </div>
                            </div>
                            )
                }
                            <div>
                                <form onSubmit={submitHandler}>
                                    <div>
                                        <div>
                                            {
                                                errors.name ?
                                                <div>
                                            <span>{errors.name.message}</span>
                                            </div>
                                            :
                                            ''
                                            }
                                            <label htmlFor="name">Name:</label>
                                            <input type="text" name="name" onChange={changeHandler} value={review.name}></input><br></br>
                                            {
                                                errors.review ?
                                                <div>
                                            <span>{errors.review.message}</span>
                                            </div>
                                            :
                                            ''
                                            }
                                            <label htmlFor="review">Review:</label>
                                            <input type="text" name="review" onChange={changeHandler} value={review.review}></input>
                                            <div>
                                            <label htmlFor="name">Rating:</label>
                                            <select name="rating" onChange={changeHandler} value={review.rating}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3" >3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            </div>
                                            <div>
                                            <button type="button" onClick={()=>setReview({name:'',review:'',rating:3})}>Cancel</button>
                                            <input type="submit" value="Submit"></input>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        
            </div>
        </div>
    )
}

export default OneTruck
