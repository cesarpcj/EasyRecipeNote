import React,{useState} from 'react';
import IngredientAddName from './ingredientEditAddName';
import IngredientAddQuantityUnit from './ingredientAddQuantityUnit';
import IngredientAddSteps from './ingredientEditSteps';
import IngredientEditList from './ingredientEditList';



export default function EditBody(props) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("g");

    const addIngredient=()=>{
        props.add({name, quantity, unit});
        setName("");
        setQuantity("");
        setUnit("g");
    }
    return (
        <div className="list">
            
            {props.option === "notes" && <IngredientAddSteps set={props.setNotes} text={props.notes}/>}
            {props.option === "steps" && <IngredientAddSteps set={props.setSteps} text={props.steps}/>} 
            {props.option === "ingredients" &&  (<>
                <IngredientAddName setName={setName} name={name}/> 
                {name !== "" && 
                    <>
                    <IngredientAddQuantityUnit quantity={quantity} setQuantity={setQuantity} setUnit={setUnit} />
                    <button  onClick={addIngredient}>Add Ingredient</button>
                    </>
                }
                {props.ingredients.length > 0 && <IngredientEditList ingredients={props.ingredients} removeIngredients={props.removeIngredients}/>}
                </>)}
            
        </div>
    )
}