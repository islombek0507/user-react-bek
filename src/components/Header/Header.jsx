import { Link, NavLink } from "react-router-dom";
import './Header.scss'
export function Header() {
    return(
        <header>
     <div className="container">
         <Link to='/'>sss</Link>

         <nav className="nav">
             <ul className="nav__list">
 <li className="nav__item">
     <NavLink className={({isActive})=>isActive ? 'nav__link--active nav__link' : 'nav__link'} to = '/'>Home</NavLink>
 </li>
 <li className="nav__item">
     <NavLink className={({isActive})=>isActive ? 'nav__link--active nav__link' : 'nav__link'} to = '/users'>Users</NavLink>
 </li>
 <li className="nav__item">
     <NavLink className={({isActive})=>isActive ? 'nav__link--active nav__link' : 'nav__link'} to = '/posts'>Posts</NavLink>
 </li>
             </ul>
         </nav>
     </div>
        </header>
    )
}