import React from 'react';
import Categories from '../../files/categories';
import CategoriesItem from './categoriesItem';


export default function categoriesList(props) {

    return (
        
        <div className="categories">
            {Categories.map(cat =>{
                return <CategoriesItem key={cat} cat={cat} pick={props.pick} category={props.category}/>
                
            })}
        </div>

    )
}
