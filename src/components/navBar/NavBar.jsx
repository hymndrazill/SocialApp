import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Link } from "react-router-dom"
import "./navbar.scss"
const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
        <span>hymnDrazillSocial.</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
        <SearchOutlinedIcon/>
        <input type="text" placeholder='search' />

        </div>
      </div>

      {/* RIGHT SIDE OF THE NAVBAR */}
      <div className="right">
        <Person2OutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        <div className="user">
          <img src="https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>Firas</span>
        </div>


      </div>

    </div>
  )
}

export default NavBar
