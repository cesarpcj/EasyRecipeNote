import axios from 'axios';

const base = axios.create({
    baseURL: '/api/recipe',
    headers: {
        'Content-Type': 'application/json',
      }
});

base.interceptors.request.use(config=> {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

const fetchRecipes = (category) =>{
    return base.get(`/category/${category}`)
    .then((result) => {
        const data = result.data.recipes;
        return Promise.resolve(data);
    }).catch((err) => {
        return Promise.reject(err);
    });
}

const fetchRecipeById = (id) =>{
    return base.get(`/${id}`)
    .then((result) => {
        return Promise.resolve(result.data.recipe)
    }).catch((err) => {
        return Promise.reject(err);
    });
}

const createRecipe = (recipe) =>{
    const fixedRecipe = {
        name : recipe.name,
        category : JSON.stringify(recipe.category),
        time : recipe.time,
        servings: recipe.servings,
        ingredients : JSON.stringify(recipe.ingredients),
        steps: recipe.steps,
        notes: recipe.notes

    }
    return base.post('/create', fixedRecipe)
    .then((result) => {
        return Promise.resolve(result.data.msg);
    }).catch((err) => {
        return Promise.reject(err);
    });

}
const updateRecipe = (recipe, id) =>{
    const fixedRecipe = {
        name : recipe.name,
        category : JSON.stringify(recipe.category),
        time : recipe.time,
        servings: recipe.servings,
        ingredients : JSON.stringify(recipe.ingredients),
        steps: recipe.steps,
        notes: recipe.notes

    }
    return base.post(`/update/${id}`, fixedRecipe)
    .then((result) => {
        return Promise.resolve(result.data.msg);
    }).catch((err) => {
        return Promise.reject(err);
    });

}

export {fetchRecipes, fetchRecipeById, createRecipe, updateRecipe};