import React from 'react';
import IngredientItem from './ingredientItem';
import Steps from './steps';


export default function ingredientList(props) {
    return (
        <ul>
            {props.option === "ingredients" && props.recipe.ingredients.map(ingredient => {
                return <IngredientItem key={ingredient._id} data={ingredient}/>
            })}
            {props.option === "steps" && <Steps data={props.recipe.steps}/>}
            {props.option === "notes" && <Steps data={props.recipe.notes}/>}
            
        </ul>
    )
}
