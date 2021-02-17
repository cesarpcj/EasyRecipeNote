import React, { useState} from 'react';
import {createRecipe} from '../controller/recipesController';
import RecipeEditNav from '../components/recipeEdit/recipeEditNav';
import EditBody from '../components/recipeEdit/EditBody';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import RecipeMenu from '../components/recipe/recipeMenu';
import {useHistory} from 'react-router-dom';

import RecipeCategoriesPick from '../components/recipeEdit/recipeCategoriesPick';

export default function RecipeCreate(props) {
    
    const [option, setOption] = useState("ingredients");
    const [ingredients, setIngredients] = useState([]);
    const [category, setCategory] = useState(["All"]);
    const [steps, setSteps] = useState("");
    const [notes, setNotes] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [servings, setServings] = useState("");
    const history = useHistory();

    const addCategory = (name) =>{
        setCategory([...category, name])
    }
    const removeCategory = (name) =>{
        const clone = [...category];
        const newArr = clone.filter(el => el !== name);
        setCategory([...newArr])
    }
    const addIngredients = (obj) =>{
        setIngredients([...ingredients, obj])
    }
    const removeIngredients = (name) =>{
        const clone = [...ingredients];
        const newArr = clone.filter(el => el.name !== name);
        setIngredients([...newArr])
    }

    const create = () =>{
        createRecipe({ingredients,category,steps,notes, name, time, servings})
        .then((result) => {
            console.log(result);
            history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    const doNothing =(e)=>{
        e.preventDefault();
    }


    return (
        <div className="recipeView">
            
            {<>
                <div className="header">
                    <RecipeEditNav cancelPath={"/"} submit={create} canDelete={false}/>
                    <p>Choose categories:</p>
                    <RecipeCategoriesPick add={addCategory} remove={removeCategory} picked={category}/>
                    <form onSubmit={doNothing}>
                        <input
                            className="bigInput"
                            type='text'
                            name='name'
                            value={name}
                            placeholder="Name"
                            onChange={e => setName(e.target.value)}
                        />
                    </form>
                    

                </div>
                <div className="body">
                    <div className="info"> 
                        <div>
                            <AccessTimeIcon fontSize="large"/>
                            <form onSubmit={doNothing}>
                                <input
                                    className="smallInput"
                                    placeholder="minutes"
                                    type='text'
                                    name='time'
                                    value={time}
                                    onChange={e => setTime(e.target.value)}
                                />
                            </form>
                        </div>
                        <div>
                            <RoomServiceIcon fontSize="large"/>
                            <form onSubmit={doNothing}>

                                <input
                                    className="smallInput"
                                    placeholder="servings"
                                    type='text'
                                    name='servings'
                                    value={servings}
                                    onChange={e => setServings(e.target.value)}
                                />
                            </form>
                        </div>
                        
                    </div>
                    <RecipeMenu setOption={setOption} option={option}/>
                    <EditBody ingredients={ingredients} option={option} add={addIngredients} removeIngredients={removeIngredients} setSteps={setSteps} steps={steps} setNotes={setNotes} notes={notes}/>
                    
                    
                   
                </div>
            </>}
            
            
        </div>
    )
}

