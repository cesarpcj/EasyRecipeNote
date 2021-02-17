import React from 'react';
import Categories from '../../files/categories';
import RecipeCategoryItem from '../recipeEdit/recipeCategoryItem';


export default function RecipeCategoriesPick(props) {

    

    return (
        
        <div className="categories">
            
            {Categories.slice(1).map(cat =>{
                return <RecipeCategoryItem key={cat} add={props.add} remove={props.remove} picked={props.picked} cat={cat}/>
            })}
        </div>

    )
}
