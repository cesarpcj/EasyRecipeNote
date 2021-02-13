import React from 'react';
import { Link } from 'react-router-dom';

export default function recipeEditNav(props) {
    return (
        <div className="navHome">
            <Link to={props.cancelPath} className="btn"> Cancel </Link>
            <button className="btn" onClick={props.submit}>Save</button>
        </div>
    )
}