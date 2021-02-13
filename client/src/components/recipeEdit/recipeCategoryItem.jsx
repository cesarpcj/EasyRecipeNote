import React, {useState}from 'react'

export default function RecipeCategoryItem(props) {

    const [classname, setClassName] = useState('notSelected');
    
    const pickHandle = (cat) =>{
        const picked = [...props.picked];
        if(picked.includes(cat)){
            props.remove(cat);
            setClassName('notSelected');
        }else{
            props.add(cat);
            setClassName('selected');

        }
    }
    return (
        <div className={classname} onClick={()=>pickHandle(props.cat)}>
                    <p>{props.cat}</p>
                    </div>
    )
}
