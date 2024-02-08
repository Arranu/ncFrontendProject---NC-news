import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
            </ul>
        </nav>
    )
}