import React,{useState} from 'react';

const Box = (props) => {


    // AllColors = State variable  : setAllColors = function to update colors 
    const [AllColors, setAllColors] = useState([""]);
    const [newColors, setNewColors] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // setAllColors([...AllColors, newColors])
        const tempColor = AllColors;
        tempColor.push(newColors)
        setAllColors(tempColor)
        setNewColors("")
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Setting state */}
            <input type="text" onChange={ (e) => setNewColors(e.target.value)} value={newColors} ></input>
            <input type="submit" value="Add Color Box"  />
            </form>
            {
                AllColors.map((item, i )=>
                <div key = {i} style={{width:50,height:50,backgroundColor:`${item}`}}></div>
                )
            }
        </div>
    );
}

export default Box
