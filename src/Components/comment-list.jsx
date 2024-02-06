import { useEffect, useState } from "react";
import { fetchArtComs } from "./api";
import { useParams } from "react-router-dom";
export default function CommentList(){
const {article_id} =useParams()
const [commentList,setCommentList]=useState([])
useEffect(()=>{fetchArtComs(article_id).then(({data})=>{
    setCommentList(data.comments)
})
},[article_id])
const comments = commentList.map((comment,index)=>{
    return (
        <section className="comment-list">
            
            <li className="nameDate" key={index}><h4>{comment.author}</h4>
            <p className="date">{comment.created_at}</p>
            </li>
            <p>{comment.body}</p>
            <p>Likes: {comment.votes}</p>
            <button>Like</button>
        </section>
    )
})
    return(
        <>
        <div className="comment-container">
        <section className="comment-flexbox">
         <h3 className="comment-text">Comments</h3>
         <textarea className="input-box"/>
         <button className="comment-button">Submit</button>
        </section>
     </div>
        <ul key={comments.comment_id}>{comments}</ul>
     </>
    )



}