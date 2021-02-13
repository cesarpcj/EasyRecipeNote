import React,{useState} from 'react';
import { useHistory ,Link} from 'react-router-dom';
import {login} from '../controller/authController';



export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const submit =(e) =>{
        e.preventDefault();
        login({email, password})
        .then((result) => {
            console.log(result);
            const user = result.data.data;
            localStorage.setItem('token', user.token);
            props.setUser(user);
        })
        .catch((err) => {
            console.log(err);
        });

    }
    return (
        <div className="login">
            <p className="title">Easy Recipe Note</p>
            <h1>Sign In</h1>
            <form onSubmit={submit} >
                <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required></input>
                <button>Sign In</button>
            </form>
            <p className="link">Not a member? <Link to="/register">Create a new Account. </Link></p>
            
        </div>
    )
}
