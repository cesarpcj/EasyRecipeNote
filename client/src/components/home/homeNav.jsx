import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
 
export default function HomeNav(props) {
    
    return (
        <div className="navHome">
            <Link to="/recipe/create" className="btn">New</Link>
            <form>
                <div className="search">

                    <SearchIcon style={{marginTop:"8px"}}/>
                    <input type="text"  placeholder="Search" onChange={(e)=>{props.setTerm(e.target.value)}}/>
                </div>

                

            </form>
        </div>
    )
}
