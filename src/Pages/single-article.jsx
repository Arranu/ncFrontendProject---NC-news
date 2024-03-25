import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSpecArt,fetchArtComs } from '../Components/api';
import CommentList from '../Components/comment-list';
import LikeButton from '../Components/like-button';
import CommentBox from '../Components/new-comment-box';

export default function SingleArticle(){
    const {article_id}=useParams()
    const [singleItem, setSingleItem]=useState([])
    const [commentList,setCommentList]=useState([])
        useEffect(()=>{
            fetchSpecArt(article_id).then(({data})=>{
                setSingleItem(data.article)
            fetchArtComs(article_id).then(({data})=>{
                setCommentList(data.comments.paginated)
            })
        },[article_id])
    })

        return (
            <>
                <article >
                    <h2>{singleItem.title}</h2>
                    <img src={singleItem.article_img_url}></img>
                    <h4>by {singleItem.author}</h4>
                    <p>{singleItem.body}</p>
                    <LikeButton votes={singleItem.votes} likeType={`articles`} id={singleItem.article_id} />
                </article>
                <section>
                    <CommentBox setCommentList={setCommentList} article_id={article_id} />
                </section>
                <section>
                    <CommentList commentList={commentList} setCommentList={setCommentList} />
                </section>
            </>
        );
}