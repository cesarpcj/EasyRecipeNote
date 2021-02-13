import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

export default function ingredientEditList(props) {
    return (
        <div>
            {props.ingredients.map(ingredient => {
                return <div key={ingredient._id} className="ingredientEditItem">

                            <p>{ingredient.name}</p>
                            
                            <p>{ingredient.quantity} {ingredient.unit}</p>
                                
                            <CancelIcon onClick={()=> props.removeIngredients(ingredient.name)}/>
                        </div>
            })}
        </div>
    )
}
