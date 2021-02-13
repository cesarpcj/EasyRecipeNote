import React from 'react';
import {Link} from 'react-router-dom';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomServiceIcon from '@material-ui/icons/RoomService';

export default function recipeList(props) {

    return (
        <ul className="recipeList">
            {props.recipes.length > 0 && 
                props.recipes.map(recipe => {
                    return <Link key={recipe._id} to={`/recipe/${recipe._id}`}>
                    
                    <li className="item">
                        <div className="title">
                            <p>{recipe.name}</p>
                        </div>
                        <div className="timePortion">
                            <div className="unit">
                                <AccessTimeIcon/>
                                <p>  &nbsp;{recipe.time} min</p>
                            </div>
                            <div className="unit">
                            <RoomServiceIcon/>
                            <p>  &nbsp;{recipe.servings} servings</p>
                            </div>
                            

                        </div>

                    </li>
                    </Link>
                })
            
            
            }
            
        </ul>
    )
}
