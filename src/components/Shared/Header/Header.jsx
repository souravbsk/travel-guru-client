/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Hamburger from "hamburger-react";

const Header = ({ textColor, brandLogo, searchBar }) => {
  const { user, logOut } = useContext(AuthContext);

  const [navHide, setNavHide] = useState(true);
  const userName = user?.displayName?.split(" ")[0]

  return (
    <header className="max-w-full px-3 md:px-0 md:w-10/12 mx-auto py-10">
      <nav className="flex gap-6 flex-col md:flex-row justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link>
            <img className="w-24 md:w-32 object-fill" src={brandLogo} alt="" />
          </Link>
          
          <div className="flex gap-2 items-center md:hidden">
          <div>
            {user && (
              <p className={`font-semibold text-sm text-${textColor}`}>
                Welcome to,{userName}
              </p>
            )}
          </div>
            <button
              onClick={() => setNavHide(!navHide)}
              className={`text-${textColor} border p-1 text-xl`}
            >
              <Hamburger  />

            </button>
          </div>
        </div>
        <div className="flex gap-6 flex-col md:flex-row justify-between items-center md:gap-12">
          {searchBar && (
            <div className="relative hidden md:block">
              <input
                type="text"
                name="search"
                className="border w-fit ps-10 text-white border-white bg-transparent backdrop-blur-3xl px-2 py-2 rounded-md"
                placeholder="search your destination..."
                id=""
              />
              <FaSearch className="text-lg absolute top-1/2 -translate-y-1/2 left-3 text-white"></FaSearch>
            </div>
          )}
          <ul
            className={`flex flex-col px-11 md:px-0 py-6 md:py-0 md:backdrop-blur-none backdrop-blur-3xl md:flex-row duration-300 items-center h-screen md:h-auto z-40 md:bg-transparent gap-5 absolute md:static md:gap-12 ${
              navHide ? "-left-96" : "left-0"
            }`}
          >
            <li>
              <Link className={`text-${textColor} text-lg font-medium`}>
                News
              </Link>
            </li>
            <li>
              <Link to="/destination" className={`text-${textColor} text-lg font-medium`}>
                Destination
              </Link>
            </li>
            <li>
              <Link to="/blogs" className={`text-${textColor} text-lg font-medium`}>
                Blog
              </Link>
            </li>
            <li>
              <Link className={`text-${textColor} text-lg font-medium`}>
                Contact
              </Link>
            </li>
            <li>
              {user ? (
                <div className="flex items-center gap-2">
                  <p className={`font-semibold hidden md:block text-${textColor}`}>
                    Welcome to,{userName}
                  </p>
                  <button
                    onClick={logOut}
                    className="bg-yellow-500 text-lg font-medium text-slate-800 px-6 py-2 rounded-md"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="bg-yellow-500 text-lg font-medium text-slate-800 px-6 py-2 rounded-md">
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
