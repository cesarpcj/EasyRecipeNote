import React, {useEffect, useState} from 'react';
import {fetchRecipeById} from '../controller/recipesController';
import RecipeNav from '../components/recipe/recipeNav';
import Ingredients from '../components/recipe/ingredientList';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import RecipeMenu from '../components/recipe/recipeMenu';
import {useParams} from 'react-router-dom';

export default function RecipeView(props) {
    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState(null);
    const [option, setOption] = useState("ingredients");

    useEffect(() => {
      
        if(recipe === null ){
            fetchRecipeById(recipeId)
            .then((result) => {
                setRecipe(result);
            }).catch((err) => {
                console.log(err);
            });
        }
       
    },[])


    return (
        <div className="recipeView">
            
            {recipe && <>
                <div className="header">
                    <RecipeNav recipeId={recipeId}/>
                    <h1>{recipe.name}</h1>
                    

                </div>
                <div className="body">
                    <div className="info"> 
                        <div>
                            <AccessTimeIcon fontSize="large"/>
                            <p>{recipe.time} min</p>
                        </div>
                        <div>
                            <RoomServiceIcon fontSize="large"/>
                            <p>{recipe.servings} servings</p>
                        </div>
                        
                    </div>
                    <RecipeMenu setOption={setOption} option={option}/>
                    <Ingredients recipe={recipe} option={option}/>
                   
                </div>
            </>}
            
        </div>
    )
}
