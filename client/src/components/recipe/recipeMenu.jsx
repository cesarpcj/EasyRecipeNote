import React from 'react';
import RecipeMenuItem from './recipeMenuItem';

export default function RecipeMenu(props) {
    
    return (
        <div className="menu">
            <RecipeMenuItem item={"ingredients"} setOption={props.setOption} option={props.option}/>
            <RecipeMenuItem item={"steps"} setOption={props.setOption} option={props.option}/>
            <RecipeMenuItem item={"notes"} setOption={props.setOption} option={props.option}/>
            
        </div>
    )
}
