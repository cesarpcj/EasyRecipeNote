import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeNav(props) {
    
    return (
        <div className="navHome">
            <Link to="/recipe/create" className="btn">New</Link>
            <form>
                <input type="text" className="search" onChange={(e)=>{props.setTerm(e.target.value)}}/>
            </form>
        </div>
    )
}
