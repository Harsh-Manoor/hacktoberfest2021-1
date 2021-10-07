import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { NavbarData } from './NavbarData'

const Navbar = () => {

    const [click, setClick] = useState(true)
    const handleClick = ()=>setClick(!click)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Vectorzz
                    </Link>
                    <Link className="menu-icon" to="#" onClick={handleClick}>
                        <i class="fas fa-chevron-left"></i>
                    </Link>
                </div>
            </nav>

            <nav className={click ? "nav-menu" : "nav-menu active"}>
                <ul className="navbar-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-icon">
                            <i class="fas fa-chevron-right" onClick={handleClick}></i>
                        </Link>
                    </li>
                    {NavbarData.map((item)=>{
                        const {title,cName,link} = item;
                        return(
                            <li className={cName} >
                                <Link to={link} onClick={handleClick}>{title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
