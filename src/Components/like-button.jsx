import { useEffect, useState } from "react";
import { editVote } from "./api";
import { BsFillHandThumbsUpFill,BsFillHandThumbsDownFill } from "react-icons/bs";
export default function LikeButton({votes,likeType,id}){
    const [likes, setLikes] = useState(0)
    const [liked, setLiked] = useState(false);
    return (
        <div id="like-bar">
        <button
            className={`like-button ${liked ? 'liked' : ''}`} //REMINDER- write 2 seperate CSS states for the like button
            onClick={(event) => {
                // console.log(event)
                event.preventDefault()
                setLikes(likes + 1);
                setLiked(true);
                editVote(id,likeType,1)
            }}
    > {<BsFillHandThumbsUpFill/>}
        </button>
        <p id="likes-count">{likes+votes} Likes</p>
            
        <button
        className={`like-button ${liked ? 'liked' : ''}`} //REMINDER- write 2 seperate CSS states for the like button
            onClick={(event) => {
                // console.log(event)
                event.preventDefault()
                setLikes(likes - 1);
                setLiked(true);
                editVote(id,likeType,-1)
            }}
        >{<BsFillHandThumbsDownFill/>}
        </button>
        </div>
    );
}