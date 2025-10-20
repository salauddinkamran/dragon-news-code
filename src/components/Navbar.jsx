import React from 'react';
import { NavLink } from 'react-router';
import userImg from "../assets/image/user.png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div></div>
      <div className='nav flex gap-5 text-accent'>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className='login-btn flex gap-5'>
        <img src={userImg} alt="" />
        <button className='btn btn-primary px-10'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;