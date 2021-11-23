import React,{useState,useEffect} from 'react'
import "./NavBar.css"
import{Link} from "react-router-dom"
import NetflixAvatar from "../../Images/NetflixAvatar.jpg"
import NetflixLogo from "../../Images/NetflixLogo.jpg"
const NavBar = () => {
    const[show,setShow]=useState(false)
    const NavBarVisibility =()=>
    {
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    }
useEffect(()=>{
window.addEventListener("scroll",NavBarVisibility);
return () => {
window.removeEventListener("scroll",NavBarVisibility)
}
},[])
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <Link to ="/">
                <img src={NetflixLogo} className="nav-logo" alt="logo"/>
            </Link>
            <img src={NetflixAvatar} className="nav-avatar" alt="logo"/>
        </div>
    )
}

export default NavBar
