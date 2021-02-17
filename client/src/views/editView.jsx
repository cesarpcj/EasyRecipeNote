import React,{useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {fetchRecipeById, updateRecipe, deleteRecipe} from '../controller/recipesController';
import RecipeEditNav from '../components/recipeEdit/recipeEditNav';
import EditBody from '../components/recipeEdit/EditBody';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import RecipeMenu from '../components/recipe/recipeMenu';


export default function EditView(props) {
    const {recipeId} = useParams();
    const [option, setOption] = useState("ingredients");
    const [recipe,setRecipe] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [category, setCategory] = useState([]);
    const [steps, setSteps] = useState("");
    const [notes, setNotes] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [servings, setServings] = useState("");
    const history = useHistory();

    useEffect(() => {
        
        if(recipe === null ){
            fetchRecipeById(recipeId)
            .then((result) => {
                setRecipe(result);
                setIngredients(result.ingredients);
                setCategory(result.category);
                setSteps(result.steps);
                setNotes(result.notes);
                setName(result.name);
                setServings(result.servings);
                setTime(result.time);
            }).catch((err) => {
                console.log(err);
            });
        }
       
    },[]);

    const doNothing =(e)=>{
        e.preventDefault();
    }

    const addIngredients = (obj) =>{
        setIngredients([...ingredients, obj])
    }
    const removeIngredients = (name) =>{
        const clone = [...ingredients];
        const newArr = clone.filter(el => el.name !== name);
        setIngredients([...newArr])
    }

    const update =()=>{
        return updateRecipe({ingredients,category,steps,notes, name, time, servings}, recipeId)
        .then((result) => {
            console.log(result);
            history.push(`/recipe/${recipeId}`);
        }).catch((err) => {
            console.log(err);
        });
    }
    const delRecipe =()=>{
        return deleteRecipe(recipeId)
        .then((result) => {
            console.log(result);
            history.push(`/`);
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className="recipeView">
            
            {<>
                <div className="header">
                    <RecipeEditNav cancelPath={`/recipe/${recipeId}`} submit={update} deleteRecipe={delRecipe} canDelete={true}/>
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
            </>
            }
            
            
        </div>
    )
}
