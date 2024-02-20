import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <div className="flex justify-between items-center p-4 z-[100] w-full absolute bg-slate-900/50">
      <div className="text-white font-semibold text-lg flex gap-6">
      <Link to="/">
        <h1 className="text-[#38BDF8] text-4xl  font-bold cursor-pointer">
          MOVIEZONE
        </h1>
      </Link>
      <div className=" ml-9 flex gap-5 ">
        <Link to="/">
          <button className="text-white mt-1 over:bg-[#38BDF8]">Home</button>
        </Link>
        <Link to="/movies">
          <button className="text-white mt-1">Movies</button>
        </Link>

        <Link to="/tv">
          <button className="text-white mt-1">TV Shows</button>
        </Link>
        </div>
      
        <div className=" mt-2 max-w-lg">
        <div className=" flex w-full rounded-lg focus-within:shadow-lg overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-lg text-white pr-2 bg-transparent border-b-2 border-[#38BDF8] focus:border-[#38BDF8] transition-all duration-300 ease-in-out"
            type="text"
            id="search"
            placeholder="Search"
          />
        </div>
      </div>
      </div>

      
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">My Watchlist</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-[#38BDF8] px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#38BDF8] px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
