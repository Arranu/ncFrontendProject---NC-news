import { fetchTops } from "../Components/api";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export default function TopicsList(){
    const [topicsList,setTopicsList]=useState([])
    useEffect(()=>{fetchTops().then(({data})=>{
        setTopicsList(data.topics)
      })},[])
    
    const topics = topicsList.map((topic,index)=>{

     
        return(
          
            <section className="topic-list" key={index}>
                <li id="topic-info">
                    <h3><Link to={`/topics/${topic.slug}`}>{topic.slug}</Link></h3>
                    <h5>{topic.description}</h5>
                </li>
            </section>
        )
      }
    )
    return(
      <ul>{topics}</ul>
      )
   
 }