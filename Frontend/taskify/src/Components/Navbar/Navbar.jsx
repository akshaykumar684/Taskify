import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { isLoggedIn, loggedInUserEmail } = useSelector((state) => state.user);
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
          {isLoggedIn ? (
            <button class="btn btn-outline btn-primary">Sing Out</button>
          ) : (
            <>
              <li>
                <Link to="/account/signIn">Sign In</Link>
              </li>
              <li>
                <Link to="/account/signUp">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
