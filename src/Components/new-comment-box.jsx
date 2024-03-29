import { useState,useContext } from "react";
import { postCom } from "./api";
import { UserContext } from "../context/users";

export default function CommentBox({setCommentList,article_id}){
    const {user}=useContext(UserContext)
    return(
        <div className="comment-container">
            <section className="comment-flexbox">
            <h4 className="comment-text">Add a comment:</h4>
            <textarea id="input-box"/>
            <button 
            className="comment-button"
            onClick={()=>{
                const newbody =document.getElementById("input-box");
                if(newbody.value)
                {postCom(article_id,user.username,newbody.value).then(({data})=>{
                    const returnedData = data.newPost
                    setCommentList((comments)=>[   
                        returnedData, ...comments
                    ])
                    
                    
                    
                })}
                
                
                }}
            >Submit</button>
            </section>
        </div>
    )
}