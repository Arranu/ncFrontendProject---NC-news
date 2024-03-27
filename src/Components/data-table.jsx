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
import Loading from "./loading";
export default function ArticleTable(topic){
const [rows, setRows] = useState([])
const [page,setPage] = useState(0)
const [limit,setLimit] = useState(10)
const [count,setCount] = useState(0)
const [sort_by,setSort_By]=useState('created_at')
const [order,setOrder]=useState('DESC')
const [loaded,setLoaded] = useState(false)
    useEffect(()=>{
        fetchArt(page+1,limit,topic.topic,sort_by,order).then(({data})=>{
            setRows(data.articles.paginated)
            setCount(data.articles.total)
            setLoaded(true)
        })
    },[page,limit,sort_by,order])

    //Pagination Handlers
    function handleChangePage(event, newpage) { 
      
      setPage(newpage); 
    } 

    function handleChangeRowsPerPage(event) { 
      setLimit(parseInt(event.target.value))
    } 
    //Sorting Handlers
    function handleSort(event){
      setSort_By(event.target.innerText.replace(" ","_").toLowerCase()) 
    }
        return (
            <>
            <TableContainer id="frontPageTable"component={Paper}>
              <Table sx={{ minWidth: 600 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell key={"title"}align="left"  onClick={handleSort}>Title</TableCell>
                    {topic.topic?"":<TableCell align="right" onClick={handleSort}>Topic</TableCell>}
                    <TableCell align="right" onClick={handleSort}>Author</TableCell>
                    <TableCell align="right" onClick={handleSort}>Created at</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.article_id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left" ><Link to={`/articles/${row.article_id}`}>{row.title}</Link></TableCell>
                      {topic.topic?"":<TableCell align="right">{row.topic}</TableCell>}
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
            <Loading loaded={loaded}/>
            </>
            
          );

}
