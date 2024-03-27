import { Link } from "react-router-dom"
import { UserContext } from "../context/users"
import { useContext, useEffect, useState} from "react"
import { fetchSpecUser } from "./api"
export default function Navbar(){
    const {user}=useContext(UserContext)
    const [currentUser,setCurrentUser]=useState({})
    const CurrentUser =()=>{
        useEffect(()=>{fetchSpecUser(user.username).then(({data})=>{
            setCurrentUser(data.user)
        })
        },[user])

        return(
            <div id="logged-in">
                <h5 id='profile-text'>User: {currentUser.username}</h5>
                <img id='profile-image' src={currentUser.avatar_url} alt="" />
            </div>
        )
    }
    return(
        <nav>
            <ul className="navbar">
                <li id="navbar-links">
                    <Link className="navbar-button"to="/">Home</Link>
                    <Link className="navbar-button"to="/users">Users</Link>
                    <Link className="navbar-button"to="/topics">Topics</Link>
                </li>
                <CurrentUser/>
            </ul>
        </nav>
    )
}