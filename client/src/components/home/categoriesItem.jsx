import React, {useState, useEffect} from 'react'

export default function CategoriesItem(props) {
    const [classname, setClassname] = useState("item");

    useEffect(() => {
        
        if(props.category === props.cat){
            setClassname("selectedGreen");
        }else{
            setClassname("item");
        }
        
    }, [props.category,props.cat])


    return (
        <div className={classname} onClick={()=>props.pick(props.cat)}>
            <p>{props.cat}</p>
        </div>
    )
}
