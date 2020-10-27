import React, { useState } from  'react';

    
    
const UserForm = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [ConfirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { FirstName, LastName, email, password, ConfirmPassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            

<p>First Name: <span state={ (e) => setFirstName(e.target.value) } value={ FirstName }>{FirstName}</span> </p><br></br>
<p>Last Name: <span state={ (e) => setLastName(e.target.value) } value={ LastName }>{LastName}</span> </p><br></br>
<p>Email: <span state={ (e) => setEmail(e.target.value) } value={ email }>{email}</span> </p><br></br>
<p>Password: <span state={ (e) => setPassword(e.target.value) } value={ password }>{password}</span> </p><br></br>
<p>Confirm Password: <span state={ (e) => setConfirmPassword(e.target.value) } value={ ConfirmPassword }>{ConfirmPassword}</span> </p><br></br>
            {/* <input type="text" state={ (e) => setLastName(e.target.value) } value={ LastName } />
            <input type="text" state={ (e) => setEmail(e.target.value) } value={ email } />
            <input type="text" state={ (e) => setPassword(e.target.value) } value={ password } />
            <input type="text" state={ (e) => setConfirmPassword(e.target.value) } value={ ConfirmPassword } /> */}

        </form>
    );
};
    
export default UserForm;