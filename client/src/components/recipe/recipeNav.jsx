import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function recipeNav(props) {
    return (
        <div className="navHome">
            <Link to="/" className="backBtn"> <ArrowBackIcon/></Link>
            <Link to={`/recipe/edit/${props.recipeId}`} className="whiteBtn"> Edit </Link>
           
        </div>
    )
}