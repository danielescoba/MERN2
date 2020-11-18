import React from 'react'
//This is to navigate a page to where I want!!
import {navigate} from '@reach/router';

const TruckForm = props => {
    const {truck, changeHandler, errors, action, deleteHandler} = props;


    return (
        <>
            <div>
                {
                    errors.name ?
                <div>
                    <span >{errors.name.message}</span>
                </div>
                :
                ''
                }
                <label>Name:</label><br/>
                <input type="text" name="name" onChange={changeHandler} value={truck.name}></input>
            </div>
            <div>
            {
                    errors.style ?
                <div>
                    <span >{errors.style.message}</span>
                </div>
                :
                ''
                }
                <label>Style:</label><br/>
                <input type="text" name="style" onChange={changeHandler} value={truck.style}></input>
            </div>
            <div>
            {
                    errors.description ?
                <div>
                    <span >{errors.description.message}</span>
                </div>
                :
                ''
                }
                <label>Description:</label><br/>
                <input type="text" name="description" onChange={changeHandler} value={truck.description}></input>
            </div>
            <div>
                
                    {
                        action === "edit" ?
                        <>
                        {/* type button does not submit data!! */}
                        <button type="button" onClick={deleteHandler }>Delete</button>
                        <button type="button" onClick={()=>navigate('/')}>Cancel</button>
                        <button type="submit">Update</button>
                        </>
                        :
                        <>
                        <button type="button" onClick={()=>navigate('/')}>Cancel</button>
                        <button type="submit">Add</button>
                        </>
                    }
                
            </div>
        </>
    )
}

export default TruckForm
