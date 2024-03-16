import { fetchArt, fetchTops } from "../Components/api";
import { useEffect, useState } from "react"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
export default function TopicsList(){
    const [topicsList,setTopicsList]=useState([])
    const [articles,setArticles]=useState([])
    useEffect(()=>{fetchTops().then(({data})=>{
        setTopicsList(data.topics)
    })},[])
    const topics = topicsList.map((topic,index)=>{
        fetchArt(1,10,topic).then(({data})=>{
            setArticles(data.paginated)
        })
        console.log(articles)
        return(
            <section className="topic-list" key={index}>
                <li id="topic-info">
                    <h3>{topic.slug}</h3>
                    <h5>{topic.description}</h5>
                </li>
                    <TableContainer id="frontPageTable"component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="right">Topic&nbsp;</TableCell>
                    <TableCell align="right">Author&nbsp;</TableCell>
                    <TableCell align="right">Created&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {articles.map((row) => (
                    
                    <TableRow
                      key={row.article_id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      
                    >
                      
                      <TableCell align="left" ><Link to={`/articles/${row.article_id}`}>{row.title}</Link></TableCell>
                      <TableCell align="right">{row.topic}</TableCell>
                      <TableCell align="right">{row.author}</TableCell>
                      <TableCell align="right">{[new Date(row.created_at).toLocaleDateString() ," " + new Date(row.created_at).toLocaleTimeString()]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>

                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
            </section>   
        )

        
    })
    return(
        <ul>{topics}</ul>
    )
}