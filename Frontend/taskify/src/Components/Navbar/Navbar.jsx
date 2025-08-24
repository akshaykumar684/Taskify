import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-md px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Taskify
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasks/new">New Task</Link>
          </li>
          <li>
            <Link to="/account/signIn">Sign In</Link>
          </li>
          <li>
            <Link to="/account/signUp">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
