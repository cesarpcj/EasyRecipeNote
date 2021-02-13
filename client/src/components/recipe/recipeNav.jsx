import React from 'react';
import { Link } from 'react-router-dom';

export default function recipeNav(props) {
    return (
        <div className="navHome">
            <Link to="/" className="btn"> {"<"} </Link>
            <Link to={`/recipe/edit/${props.recipeId}`} className="btn"> Edit </Link>
           
        </div>
    )
}