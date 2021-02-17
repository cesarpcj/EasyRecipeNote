import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

export default function ingredientEditList(props) {
    return (
        <div className="ingredientEditList">
            {props.ingredients.map(ingredient => {
                return <div key={ingredient.name} className="ingredientEditItem">
                            
                            
                            <div className="text">
                            <p className="name">{ingredient.name}</p>

                            <p className="ing">{ingredient.quantity} {ingredient.unit}</p>
                                
                            </div>
                            <CancelIcon onClick={()=> props.removeIngredients(ingredient.name)}/>
                        </div>
            })}
        </div>
    )
}
