import { useParams } from "react-router-dom"
import ArticleTable from "../Components/data-table";
export default function SingleTopic(){
    const {topic}=useParams()
    const displayTopic = topic.slice(0,1).toUpperCase() + topic.slice(1)

          return (
            <>
            <h2>{displayTopic}</h2>
            <ArticleTable topic={topic}/>
              
              </> 
            );
}