import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/image/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);
  const handleLogOut = (e) => {
    e.preventDefault()
    console.log("user tring to LogOut!");
    userSignOut()
      .then(() => {
        alert("You Logged Out successfully✅")
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-between items-center py-5">
      <div>{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userImg} alt="" />
        {user ? (
          <Link onClick={handleLogOut} className="btn btn-primary px-10">
            LogOut
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
