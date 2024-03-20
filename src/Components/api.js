import axios from "axios";
const baseLink = axios.create({baseURL:"https://nc-news-au.onrender.com/api"})

export function fetchArt(page,limit,topic){
    return baseLink.get("/articles", {params:{page:page,limit:limit,topic:topic}})
}
export function fetchTops(){
    return baseLink.get("/topics")
}
export function fetchUsers(){
    return baseLink.get("/users")
}
export function fetchSpecUser(user){
    return baseLink.get(`/users/${user}`)
}
export function fetchSpecArt(id){
    return baseLink.get(`/articles/${id}`)
}
export function fetchArtComs(id){
    return baseLink.get(`/articles/${id}/comments`)
}
export function postCom(id,user,post){
    return baseLink.post(`/articles/${id}/comments`,{
        userName:user,body:post
    })
}
export function editVote(id,location,like){
    return baseLink.patch(`/${location}/${id}`, {inc_votes:like})
}
export function delCom(id){
    return baseLink.delete(`/comments/${id}`)
}