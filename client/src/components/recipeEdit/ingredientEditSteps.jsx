import React from 'react'

export default function ingredientEditSteps(props) {
    const doNothing =(e)=>{
        e.preventDefault();
    }
    return (
        <form onSubmit={doNothing}>
            <textarea  type="text" value={props.text} onChange={(e)=>props.set(e.target.value)}/>
        </form>
    )
}
