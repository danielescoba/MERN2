//useEffect allows us to query for all the things
import { useEffect, useState } from "react";
import { Link, navigate } from '@reach/router';
import axios from "axios";


const AllTruck = () => {
    const [allTruck, setAllTrucks] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/trucks')
            .then(response =>{
                console.log(response.data);
                setAllTrucks(response.data);
            })
            .catch(err => console.log(err));
    },[]) 
    return (
        <div>
            {
                allTruck.map((item, i) =>{
                    let avg = 0;
                    if(item.reviews.length != 0){
                    item.reviews.forEach(r=>{
                        avg += r.rating;
                        });
                        avg /= item.reviews.length;
                    }
                    
                    return(
                    <div key={i}>
                        <div>
                            <h3>{item.name}</h3>
                            <p>Style: {item.style}</p>
                            <p>Average Rating: {avg} stars</p>
                        </div>
                        <div>
                            <button onClick={()=> navigate(`/truck/${item._id}/edit`)}>Edit</button>
                            <button onClick={()=> navigate(`/truck/${item._id}`)}>Review</button>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default AllTruck
