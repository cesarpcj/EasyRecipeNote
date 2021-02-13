import React from 'react'

export default function ingredientItem(props) {
    return (
        <div className="ingredientItem">
            <p>{props.data.name}</p>
            <p>{props.data.quantity} {props.data.unit}</p>
            
        </div>
    )
}
