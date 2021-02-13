import React,{useState} from 'react';
import {register} from '../controller/authController';
import {useHistory, Link} from 'react-router-dom';


export default function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors , setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false);
    const history = useHistory();

    const submit =(e) =>{
        e.preventDefault();
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const err = [];

        if(confirmPassword !== password) {
           
            err.push("- password doesn't match");
        }
        if(!isEmail){
           
            err.push("- please type a valid email");
        }
        setErrors([...err]);

        
        if(err.length < 1){

            register({name, email, password})
            .then((result) => {
                
                history.push(`/login`);
                
            }).catch((err) => {
                console.log(err);
            });
        }else{
            setShowErrors(true);
        }
    }

    return (
        

        <div className="login">
            <p className="title">Easy Recipe Note</p>
            <h1>Sign Up</h1>
            {showErrors && errors.map(error =>{
                return <p key={error} className="error">{error}</p>
            })}
            <form onSubmit={submit} >
                <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} required></input>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required></input>
                <input type="confirmPassword" placeholder="Re-type password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} required></input>
                <button>Sign Up</button>
            </form>
            <p className="link">Already a member? <Link to="/login">Click here to sign in. </Link></p>

        </div>
    )
}