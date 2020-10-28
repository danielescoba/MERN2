import React, { useState } from  'react';

    
    
const UserForm = (props) => {
    const [FirstName, setFirstName] = useState("");
//     const [FirstNameError, setFirstNameError] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const [ConfirmPassword, setConfirmPassword] = useState("");   

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { FirstName, LastName, email, password };
        console.log("Welcome", newUser);
    };
//     const handleTitle = (e) => {
//             setFirstName(e.target.value);
//             if(e.target.value.length < 1) {
//                 setFirstNameError("First Name is required!");
//             } else if(e.target.value.length < 2) {
//                 setFirstNameError("First Name must be 2 characters or longer!");
//             }

// };
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } state={ (e) => setFirstName(e.target.value) } value={ FirstName }  />
                    {
                        FirstName.length < 2 ?
                        <p style={{color:'red'}}> First Name must be at least 2 characters</p> :
                        ''
                    }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } validations={["required", "min:4" ]} state={ (e) => setLastName(e.target.value) } value={ LastName } />
                {
                        LastName.length < 2 ?
                        <p style={{color:'red'}}> Last Name must be at least 2 characters</p> :
                        ''
                    }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } state={ (e) => setEmail(e.target.value) } value={ email }/>
                                {
                        email.length < 2 ?
                        <p style={{color:'red'}}> email must be at least 2 characters</p> :
                        ''
                    }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } state={ (e) => setPassword(e.target.value) } value={ password } />
                                {
                        password.length < 8 ?
                        <p style={{color:'red'}}> Password needs 8 characters</p> :
                        ''
                    }
                    {
                        password != ConfirmPassword ?
                        <p style={{color:'red'}}>Password must Match Confirm Password</p>:
                        ''
                    }

            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } state={ (e) => setConfirmPassword(e.target.value) } value={ ConfirmPassword }/>
            </div>



        </form>
    );
};


export default UserForm;