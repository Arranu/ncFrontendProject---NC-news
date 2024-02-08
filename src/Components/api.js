import axios from "axios";

const baseLink = axios.create({baseURL:"https://nc-news-au.onrender.com/api"})

export function fetchArt(){
    return baseLink.get("/articles")
}
export function fetchTops(){
    return baseLink.get("/topics")
}
export function fetchUsers(){
    return baseLink.get("/users")
}
export function fetchSpecArt(id){
    return baseLink.get(`/articles/${id}`)
}
export function fetchArtComs(id){
    return baseLink.get(`/articles/${id}/comments`)
}
export function postCom(id){
    return baseLink.post(`/articles/${id}/comments`)
}
export function editVote(id,location){
    return baseLink.patch(`/${location}/${id}`, {inc_votes:1}).then(()=>{
        console.log("Success")
    })
}
export function delCom(id){
    return baseLink.delete(`/comments/${id}`)
}