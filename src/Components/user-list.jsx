import { useEffect, useState } from "react"
import { fetchSpecUser, fetchUsers } from "./api"

export default function UserList(){
    const [userList,setUserList]=useState([])
    useEffect(()=>{fetchUsers().then(({data})=>{
        setUserList(data.users)
    })
    },[])
    const users = userList.map((user, index)=>{
        return(
            <section className="user-list" key={index}>
                <img className="user-img" src={user.avatar_url}></img>
                <li id="user-info">
                <h3>User: {user.username}</h3>
                <h4>Name: {user.name}</h4>
                </li>
            </section>
        )
    })
    
        return(
            <ul>{users}</ul>
        )   
}