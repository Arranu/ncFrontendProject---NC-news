import { Link } from "react-router-dom"
import { UserContext } from "../context/users"
import { useContext, useEffect, useState} from "react"
import { fetchSpecUser } from "./api"
export default function Navbar(){
    const {user}=useContext(UserContext)
    const [currentUser,setCurrentUser]=useState({})

    const CurrentUser =()=>{
        useEffect(()=>{fetchSpecUser(user).then(({data})=>{
            setCurrentUser(data.user)
        })
        },[user])

        return(
            <div>
                <h5>{currentUser.username}</h5>
                <img src={currentUser.avatar_url}/>
            </div>
        )
    }
    return(
        <nav>
            <ul className="navbar">
                <li id="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/users">Users</Link>
                </li>
                <CurrentUser/>
            </ul>
        </nav>
    )
}