import { fetchTops } from "../Components/api";
import { useEffect, useState } from "react"
import ArticleTable from "../Components/data-table";
export default function TopicsList(){
    const [topicsList,setTopicsList]=useState([])
    useEffect(()=>{fetchTops().then(({data})=>{
        setTopicsList(data.topics)
      })},[])
    
    const topics = topicsList.map((topic,index)=>{
      const displayTopic = topic.slug.slice(0,1).toUpperCase() + topic.slug.slice(1)
     
        return(
          
            <section className="topic-list" key={index}> 
                <h2 id="topic-info">{`${displayTopic} - ${topic.description}`}</h2>
                <ArticleTable topic={topic.slug}/>
            </section>
        )
      }
    )
    return(
      <ul>{topics}</ul>
      )
   
 }