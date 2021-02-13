import React from 'react'

export default function IngredientAddQuantityUnit(props) {
    
    return (
        <form className="qtyUnit">
            <input className="smallInput"  placeholder="Qty" type="text" value={props.quantity} onChange={(e)=>props.setQuantity(e.target.value)}></input>
            <select className="smallInput" id="unit" onChange={(e)=>props.setUnit(e.target.options[e.target.selectedIndex].text)}>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="ml">ml</option>
                <option value="l">l</option>
                <option value="pcs">pcs</option>
            </select>
            
        </form>
    )
}
