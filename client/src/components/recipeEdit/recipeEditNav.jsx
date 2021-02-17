import React, {useState} from 'react';
import { Link } from 'react-router-dom';


export default function RecipeEditNav(props) {
    const [isDeleting, setIsDeleting] = useState(false);
    return (
        <div className="navHome">
            <Link to={props.cancelPath} className="btn"> Cancel </Link>
            {props.canDelete && <>
                 {isDeleting ?
                    <button className="redBtn" onClick={props.deleteRecipe}>Confirm</button>
                 :
                    <button className="redBtn" onClick={()=>setIsDeleting(true)}>Delete</button>
                 }
            </>
           
            }
            <button className="whiteBtn" onClick={props.submit}>Save</button>
        </div>
    )
}