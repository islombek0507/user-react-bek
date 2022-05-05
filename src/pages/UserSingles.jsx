import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function UserSinge() {

    const {id} = useParams();
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([])

useEffect(() => {
    fetch(process.env.REACT_APP_URL + '/users/' + id)
    .then(res => res.json())
    .then(data =>setUser(data))

    fetch(process.env.REACT_APP_URL + '/posts?userId=' + id)
    .then(res => res.json())
    .then(data => setPosts(data))
}, [id])


    return(
     <div className="container">
         <div>
             <img src="https://picsum.photos/150" alt="user img" />
             <h3>{user.name}</h3>
             <p><small>@{user.email}</small></p>
             <p>{user.username}</p>
         </div>

         <h2>Posts</h2>
         {posts.length > 0 && <ul>
            {posts.map(post => (
                <li key={post.id}>  
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </li>
            )) }
         </ul>}
     </div>  
    )
}