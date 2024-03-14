import LikeButton from "./like-button";
import { useContext } from "react";
import { UserContext } from "../context/users";
import { delCom } from "./api";
export default function CommentList({commentList,setCommentList}){
    const {user}=useContext(UserContext)
    const comments = commentList.map((comment,index)=>{
        return (
            <section key={index} className="comment-list">
                {user.username===comment.author?
                <button
                className="delete-button"
                onClick={(event)=>{
                    event.preventDefault()
                    delCom(comment.comment_id)
                    setCommentList(commentList.slice(1))
                }}
                
                >Delete
                </button>
                : ""
                }
                    <li className="name-date" ><h4>{comment.author}</h4>
                <p className="date">{[new Date(comment.created_at).toLocaleDateString() ," " + new Date(comment.created_at).toLocaleTimeString()]}</p>
                </li>
                <p>{comment.body}</p>
                <LikeButton votes={comment.votes} likeType={`comments`} id={comment.comment_id}/>
            </section>
        )
    })
        return(
            <>
                <ul>{comments}</ul>
            </>
        )



}

