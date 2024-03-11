import { useEffect, useState } from "react"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { fetchArt } from "./api";
import { Link } from "react-router-dom";
const columns = [
    { id: 'title', label: 'Title', minWidth: 170 },
    { id: 'topic', label: 'Topic', minWidth: 100 },
    { id: 'author',label: 'Author',minWidth: 100 },
    { id: 'body', label: 'Body', minWidth: 170, align: 'right',},
    { id: 'created_at', label: 'Created at', minWidth: 170, align: 'right'},
    { id: 'vote', label: 'Vote', minWidth: 170, align: 'right'}
];

export default function ArticleList({rows,setRows}){

    useEffect(()=>{
        fetchArt().then(({data})=>{
                setRows(data.articles)
        })
    },[])

        return (
            
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
                  {rows.map((row) => (
                    
                    <TableRow
                      key={row.title}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      
                    >
                      {console.log(row.title)}
                      
                      <TableCell align="left" ><Link to={`/articles/${row.id}`}>{row.title}</Link></TableCell>
                      <TableCell align="right">{row.topic}</TableCell>
                      <TableCell align="right">{row.author}</TableCell>
                      <TableCell align="right">{[new Date(row.created_at).toLocaleDateString() ," " + new Date(row.created_at).toLocaleTimeString()]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );

}