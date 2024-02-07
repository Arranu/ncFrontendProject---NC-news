import { useEffect, useState } from "react";
import { fetchArtComs } from "./api";
import { useParams } from "react-router-dom";
import LikeButton from "./likeButton";
export default function CommentList(){
    const {article_id} =useParams()
    const [commentList,setCommentList]=useState([])
    useEffect(()=>{fetchArtComs(article_id).then(({data})=>{
        setCommentList(data.comments)
    })
    },[article_id])
    const comments = commentList.map((comment,index)=>{
        return (
            <section key={index} className="comment-list">
                
                <li className="nameDate" ><h4>{comment.author}</h4>
                <p className="date">{new Date(comment.created_at).toDateString()}</p>
                </li>
                <p>{comment.body}</p>
                <LikeButton votes={comment.votes} likeType={`comments`} id={comment.comment_id}/>
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
            <ul>{comments}</ul>
        </>
        )



}