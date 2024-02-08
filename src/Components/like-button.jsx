import { useEffect, useState } from "react";
import { editVote } from "./api";
export default function LikeButton({votes,likeType,id}){
    const [likes, setLikes] = useState(0)
    const [liked, setLiked] = useState(false);
    
    return (
        <button
            className={`like-button ${liked ? 'liked' : ''}`} //REMINDER- write 2 seperate CSS states for the like button
            onClick={() => {
                setLikes(likes + 1);
                setLiked(true);
                editVote(id,likeType)
            }}
        >
            {likes+votes} Likes
        </button>
    );
}