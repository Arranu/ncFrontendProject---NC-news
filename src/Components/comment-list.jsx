import LikeButton from "./like-button";
export default function CommentList({commentList,setCommentList}){
    const comments = commentList.map((comment,index)=>{
        return (
            <section key={index} className="comment-list">
                <li className="name-date" ><h4>{comment.author}</h4>
                <p className="date">{new Date(comment.created_at).toDateString()}</p>
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