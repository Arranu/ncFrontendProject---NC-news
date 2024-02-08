import { useState } from "react";
export default function CommentBox(){
const [newPost, setNewPost] =useState({})
    return(
        <div className="comment-container">
            <section className="comment-flexbox">
            <h3 className="comment-text">Comments</h3>
            <textarea className="input-box"/>
            <button 
            className="comment-button"
            onClick={()=>{

                }}
            >Submit</button>
            </section>
        </div>
    )
}