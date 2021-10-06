import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { NavbarData } from './NavbarData'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = ()=>setClick(!click)
    const closeMenu = ()=>setClick(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Vectorzz
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i class={click ? "fas fa-chevron-right" : "fas fa-chevron-left"}></i>
                    </div>
                </div>

                {/* <ul className={click ? "nav-menu" : "nav-menu active"}>
                    {
                        NavbarData.map((item)=>{
                            const {title,cName,link} = item;
                            return(
                                <li className="nav-item">
                                    <Link to={link} className={cName} onClick={closeMenu}>{title}</Link>
                                </li>
                            )
                        })
                    }
                </ul> */}

            </nav>
        </>
    )
}

export default Navbar
