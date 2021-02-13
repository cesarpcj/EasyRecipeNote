import React, {useState, useEffect} from 'react';
import Nav from '../components/home/homeNav';
import Categories from '../components/home/categoriesList';
import RecipesList from '../components/home/recipeList';
import {fetchRecipes} from '../controller/recipesController';
import {useHistory} from 'react-router-dom';

export default function Home(props) {
    const [category, setCategory] = useState("doce");
    const [recipes, setRecipes] = useState([]);
    const [term ,setTerm] = useState("");
    const history = useHistory();
    useEffect(() => {
        
        fetchRecipes(category)
        .then((result) => {
            const clone = [...result];
            const recipesFiltered = clone.filter(recipe => recipe.name.toLowerCase().includes(term.toLowerCase()));
            setRecipes(recipesFiltered);
        }).catch((err) => {
            console.log(err);
            props.resetUser(null);
            
            history.push('/login');

        });
       
    }, [category, term])

    return (
        <div>
            <Nav setTerm={setTerm} ter/>
            <Categories pick={setCategory} category={category}/>
            <RecipesList recipes={recipes}/>
            
        </div>
    )
}
