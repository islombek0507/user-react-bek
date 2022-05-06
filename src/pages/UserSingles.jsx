import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './UserSingle.scss'
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
         <div className="single">
             <img className="single__img" src="https://picsum.photos/150" alt="user img" />
             <div className="single__content"><h3 className="single__name">{user.name}</h3>
             <p className="single__mail"><small>@{user.email}</small></p>
             <p className="single__user">{user.username}</p></div>
         </div>

         <h2>Posts</h2>
         {posts.length > 0 && <ul className="single__list">
            {posts.map(post => (
                <li className="single__item" key={post.id}>  
                    <h4 className="single__title">{post.title}</h4>
                    <p className="single__text">{post.body}</p>
                </li>
            )) }
         </ul>}
     </div>  
    )
}