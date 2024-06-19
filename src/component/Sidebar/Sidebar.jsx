import React from 'react'
import "./Sidebar.css"
import {MdSpaceDashboard} from 'react-icons/md'
import {AiFillCalendar, AiOutlineTable} from 'react-icons/ai'
import {FaTasks} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="s-container">
        <img src="./logo.png" alt="logo" className='logo' />
        <div className="menu">
            <NavLink 
            to="dashboard" 
            className="item" 
            title="DasBoard">
                <MdSpaceDashboard size={30}/>
            </NavLink>
            <NavLink 
            to="calendar" 
            className="item" 
            title="Calendar">
                <AiFillCalendar size={30}/>
            </NavLink>
            <NavLink 
            to="board" 
            className="item" 
            title="Trello Board">
                <FaTasks size={30}/>
            </NavLink>
            <NavLink 
            to="users" 
            className="item" 
            title="Users">
                <AiOutlineTable size={30}/>
            </NavLink>
            
        </div>
    </div>
  )
}

export default Sidebar