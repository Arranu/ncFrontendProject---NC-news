import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSpecArt,fetchArtComs } from './api';
import CommentList from './comment-list';
import LikeButton from './like-button';
import CommentBox from './new-comment-box';

export default function SingleArticle(){
    const {article_id}=useParams()
    const [singleItem, setSingleItem]=useState([])
    const [commentList,setCommentList]=useState([])
        useEffect(()=>{
            fetchSpecArt(article_id).then(({data})=>{
                setSingleItem(data.article)
            })
        },[article_id])
        useEffect(()=>{fetchArtComs(article_id).then(({data})=>{
        setCommentList(data.comments.paginated)
        
        console.log("here")
            })
        },[article_id])

        return (
            <>
                <article >
                    <h2>{singleItem.title}</h2>
                    <img src={singleItem.article_img_url}></img>
                    <h4>by {singleItem.author}</h4>
                    <p>{singleItem.body}</p>
                    <LikeButton votes={singleItem.votes} likeType={`articles`} id={singleItem.article_id} />
                </article>
                
                    <CommentBox setCommentList={setCommentList} article_id={article_id} />
                
                    <CommentList commentList={commentList} setCommentList={setCommentList} />
            </>
        );
}