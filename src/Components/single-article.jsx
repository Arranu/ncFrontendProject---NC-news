import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSpecArt } from './api';
import CommentList from './comment-list';
import LikeButton from './likeButton';
export default function SingleArticle(){
    const {article_id}=useParams()
    const [singleItem, setSingleItem]=useState([])
    const [like, setLike] =useState("")
        useEffect(()=>{
            fetchSpecArt(article_id).then(({data})=>{
                setSingleItem(data.article)
            })
        },[article_id])

        return (
            <>
            <div>
                <h2>{singleItem.title}</h2>
                <img src={singleItem.article_img_url}></img>
                <h4>by {singleItem.author}</h4>
                <p>{singleItem.body}</p>
                <LikeButton votes={singleItem.votes}/>
            </div>
                <CommentList/>
            </>
        );
}