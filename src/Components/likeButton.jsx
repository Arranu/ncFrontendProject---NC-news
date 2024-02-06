import { useEffect, useState } from "react";

export default function LikeButton({votes}){
    console.log(votes)
    const [likes, setLikes] = useState(votes)
    const [liked, setLiked] = useState(false);
    return (
        <button
            className={`like-button ${liked ? 'liked' : ''}`} //REMINDER- write 2 seperate states for the like button
            onClick={() => {
                setLikes(likes + 1);
                setLiked(true);
            }}
        >
            {likes} Likes
        </button>
    );
}