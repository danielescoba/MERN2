import React, { useState } from  'react';

    
    
        const MovieForm = (props) => {
        const [title, setTitle] = useState("");
        const [titleError, setTitleError] = useState("");
        
        const handleTitle = (e) => {
            setTitle(e.target.value);
            if(e.target.value.length < 1) {
                setTitleError("Title is required!");
            } else if(e.target.value.length < 3) {
                setTitleError("Title must be 3 characters or longer!");
            }
        }
        
        {/* rest of component removed for brevity */}
        
        return (
            <form onsubmit={ (e) => e.preventDefault() }>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={ handleTitle } />
                    {
                        titleError ?
                        <p style={{color:'red'}}>{ titleError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create Movie" />
            </form>
        );
    }

    export default MovieForm;