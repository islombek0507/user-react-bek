import { useEffect, useState } from "react"
import './Posts.scss'
export function Posts() {
const [posts, setPosts] = useState([])
const [users, setUsers] = useState([])
const [userId, setUserId] = useState('all')
const [allPosts, setAllPosts]= useState(posts)
useEffect(() => {
    fetch(process.env.REACT_APP_URL + '/posts')
    .then(res => res.json())
    .then(data => {
        setAllPosts(data)
    } )


    fetch(process.env.REACT_APP_URL + "/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
}, [])

useEffect(() => {
    if(userId === 'all'){
        return setPosts(allPosts)
    }
    const filterPosts = allPosts.filter(post => post.userId === userId - 0)
    setPosts(filterPosts)
}, [userId]);
const handleChangeUser = (evt) => setUserId(evt.target.value)
    return(
        <div className="container">

<select className="select" onChange={handleChangeUser}>
    <option  value="all">All</option>
    {users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ))}
</select>

            <h1>Posts</h1>
            {posts.length > 0 && <ul className="posts__list">
                {posts.map(post => (
                    <li className="posts__item" key={post.id}>
                        <h4 className="posts__title">{post.title}</h4>
                        <p className="posts__text">{post.body}</p>
                    </li>
                ))}
            </ul> }
        </div>
    )
}