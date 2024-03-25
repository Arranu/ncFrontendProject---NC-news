import { useEffect, useState } from "react"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { fetchArt } from "../Components/api";
import { Link } from "react-router-dom";

export default function ArticleTable(topic){

const [rows, setRows] = useState([])
const [page,setPage] = useState(0)
const [limit,setLimit] = useState(10)
const [count,setCount] = useState(0)
    useEffect(()=>{
        fetchArt(page+1,limit,topic.topic).then(({data})=>{
            setRows(data.articles.paginated)
            setCount(data.articles.total)
        })
    },[page,limit])

    function handleChangePage(event, newpage) { 
      setPage(newpage); 
    } 

    function handleChangeRowsPerPage(event) { 
      setLimit(parseInt(event.target.value))
    } 
        return (
            <>
            <TableContainer id="frontPageTable"component={Paper}>
              <Table sx={{ minWidth: 850 }} aria-label="simple table">
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
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        count={count}
                        rowsPerPage={limit}
                        page={page}
                        onPageChange={handleChangePage} 
                        onRowsPerPageChange={handleChangeRowsPerPage} 
                        />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
            </>
          );

}
