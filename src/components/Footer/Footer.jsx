import { Link } from "react-router-dom";
import './Footer.scss'
export const Footer = ()=>{
    return (
        <footer className="container">
            
                <p className="logo">Logo</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="users">Users</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </footer> 
    )
}