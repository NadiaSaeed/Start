import React from 'react';
import './navbaar.css';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";

function Navbaar() {
  return (
    <header>
      <nav>
        <div className='left'>
          <div className='navlogo'>
            <NavLink to="/"><img src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-Transparent-Background.png" alt="" /></NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" placeholder="Search Your Product Here"/>
            <div className="search_icon">
              <SearchIcon id="search" /> 
            </div>
          </div>
        </div>
        <div className='right'>
          <div className="nav_btn">
            <NavLink to="/login">signin</NavLink>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon id="icon"/>
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className='avtar'/>
          
        </div>
      </nav>
    </header>
  );
}

export default Navbaar;
