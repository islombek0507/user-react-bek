import { useEffect, useState } from "react"
import { Loader } from "../components/Loader/Loader";
import { Link } from "react-router-dom"

import './Users.scss';

export function Users() {
    const [users, setUsers] = useState({
        isLoading: true,
        isError: false,
        data: [],
    })

    useEffect(()=>{
        fetch(process.env.REACT_APP_URL + "/users")
        .then(res=>res.json())
        .then(data=> { 
            setUsers(
                {
                    isError: false,
                    isLoading: false,
                    data: data, 
                }
            )
        }
    )
    },[])

    return(
        <div className="container user">
            <h1>Users</h1>
            {users.isLoading && <Loader />}
           {users.data.length>0 && <ul className="user__list">
               {users.data.map(user=>(
                     <li className="user__item" key={user.id}>
                     <Link className="user__link" to = {'/user/' + user.id} >{user.name}</Link>
                 </li>
               ))}
               </ul>}
        </div>
    )
}