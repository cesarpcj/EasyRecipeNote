//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.scss';
import Home from './views/home';
import RecipeCreate from './views/recipeCreate';
import Recipe from './views/recipeView';
import EditView from './views/editView';
import Login from './views/login';
import Register from './views/register';
import { Route,  Switch, BrowserRouter, Redirect } from 'react-router-dom';
import {getUser} from './controller/authController';

function App() {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    
    if(user === null)
      getUser()
      .then((result) => {
        setUser(result);
      }).catch((err) => {
        console.log(err);
      
      });
    
    setIsLoaded(true);

    
  },[user])

  return (
    <div className="App">
      {isLoaded && 
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
               <Home resetUser={setUser}/>
            </Route>

            <Route exact path="/recipe/create">
                {user === null ? <Redirect to="/login"/> : <RecipeCreate/>}
            </Route>

            <Route exact path="/recipe/:recipeId">
                {user === null ? <Redirect to="/login"/> : <Recipe/>}
            </Route>

            <Route exact path="/recipe/edit/:recipeId">
                {user === null ? <Redirect to="/login"/> : <EditView/>}
            </Route>

            <Route exact path="/login">
                
                {user !== null ? <Redirect to="/"/> : <Login setUser={setUser}/>}
            </Route>

            <Route exact path="/register">
                
                {user !== null ? <Redirect to="/"/> : <Register/>} 
            </Route>
            
          </Switch>
        </BrowserRouter>
      }
      
    </div>
  );
}

export default App;
