import React, {useState, useEffect} from 'react';

export default function RecipeMenuItem(props) {
    const [classname, setClassname] = useState("notSelected");
    useEffect(() => {
        
        if(props.option === props.item && classname !== "selected"){
            setClassname("selected");
        }else{
            setClassname("notSelected");
        }
        
    }, [props.option])
    return (
        <div className={classname} onClick={()=>{props.setOption(props.item)}}>
            {props.item}
        </div>
    )
}
