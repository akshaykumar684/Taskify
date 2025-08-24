import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useAxiosPost } from "../../hooks";
import { userActions } from "../../store/user/userSlice";

export const Navbar = () => {
  const { isLoggedIn, loggedInUserEmail } = useSelector((state) => state.user);

  const [{ isLoading, isError }, makePostCall] = useAxiosPost(
    "http://localhost:4000/user/logOut"
  );

  const dispatch = useDispatch();
  const { updateLoggedInUserDetails } = userActions;

  const signOutHandler = async () => {
    try {
      await makePostCall({});
      dispatch(
        updateLoggedInUserDetails({
          isLoggedIn: false,
          loggedInUserEmail: null,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-base-200 shadow-md px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Taskify
        </Link>
      </div>

      <div className="flex-none flex items-center gap-4">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <Link to="/tasks/new">New Task</Link>
              </li>
              <li>
                <span className="text-sm font-medium">{loggedInUserEmail}</span>
              </li>
              <li>
                <button
                  className="btn btn-outline btn-primary"
                  onClick={signOutHandler}
                >
                  {isLoading ? (
                    <span className="loading loading-dots loading-xs"></span>
                  ) : (
                    "Sign Out"
                  )}
                </button>
              </li>
            </>
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
