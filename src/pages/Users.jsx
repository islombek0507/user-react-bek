import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export function Users() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch(process.env.REACT_APP_URL + "/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div className="container">
            <h1>Users</h1>
           {users.length>0 && <ul>
               {users.map(user=>(
                     <li key={user.id}>
                     <Link to = {'/user/' + user.id} >{user.name}</Link>
                 </li>
               ))}
               </ul>}
        </div>
    )
}