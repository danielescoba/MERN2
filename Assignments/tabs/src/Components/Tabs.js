import React,{useState} from 'react';

const Tabs = (props) => {
    const[selectedIdx, setSelected] = useState(1);
    console.log(props);
    return (
        <div>
            {props.TabsItlems.map((tab,i)=> 
            return (
                <span
                    onClick={(event)=>{
                        //
                    }}
                    style={{
                        padding:20,
                        marginRight:10,
                        border;"1px solid gray",
                    }}
                    >
            ))}
            {tab.label}
            </span>
        </div>
    );
}
