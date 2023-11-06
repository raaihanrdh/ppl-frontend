import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56" // Ubah kelas w-56 untuk mengatur lebar dropdown
          >
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>IRS</a>
            </li>
            <li>
              <a>KHS</a>
            </li>
            <li>
              <a>PKL</a>
            </li>
            <li>
              <a>Skripsi</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">SISTEM AKADEMIK</a>
      </div>
    </div>
  );
};

export default Navbar;
