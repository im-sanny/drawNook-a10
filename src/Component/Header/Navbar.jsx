import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import ThemeControler from "../ThemeControler";
import { Fade, Slide } from "react-awesome-reveal";

const Navbar = () => {
  const { logout, user } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/allArt">All Art & craft Items</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/addCraft">Add Craft Item</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/myArt">My Art&Craft List</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar dark:bg-gray-100 dark:text-gray-800 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-white dark:bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:ml-0 -ml-5">
            <img
              src={"https://i.ibb.co/HhfsNgg/letter-d.png"}
              alt=""
              className="h-8"
            />
            <Slide direction="up" duration={1000}>DrawNook</Slide>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 border-x-2 border-green-400 space-x-2">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end gap-1">
          <ThemeControler></ThemeControler>
          {!user ? (
            // If user is not logged in
            <>
              <div>
                <button className="btn btn-ghost hidden sm:inline-block lg:inline-block md:inline-block font-bold">
                  <NavLink to="/register">Registration</NavLink>
                </button>
              </div>
              <div className="dropdown dropdown-end">
                <button className="m-1 btn btn-ghost font-bold">
                  <NavLink to="/login">Login</NavLink>
                </button>
                <ul className="p-2 lg:hidden shadow menu dropdown-content z-[1] bg-white dark:bg-base-100 rounded-box w-">
                  <li>
                    <NavLink to="/register">Registration</NavLink>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            // If user is logged in
            <div className="relative">
              <div className="tooltip tooltip-left" onClick={toggleDropdown}>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt="User Avatar" />
                  </div>
                </div>
              </div>
              {/* Profile dropdown menu */}
              {isDropdownOpen && (
                <ul className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-white dark:bg-base-00 rounded-box w-36 absolute right-0">
                  {/* Username */}
                  <li className="font-bold">{user.displayName}</li>
                  {/* Logout option */}
                  <li className="font-bold">
                    <button className="btn btn-ghost" onClick={logout}>
                      Log out
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
