"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useCookies } from "react-cookie";

const Drawer = () => {
  const router = useRouter();
  const [operatorData, setOperatorData] = useState(null);
  const [cookies, setCookie] = useCookies(["token"]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/me", {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setOperatorData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching operator data", error);
      });
  }, []);

  const handleGenerateAccountClick = () => {
    router.push("/GenerateAccount");
  };
  return (
    <div className="flex flex-1 bg-gray-200">
      <div className="drawer w-max h-max">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-24 ">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="z-30 menu p-4 w-60 min-h-full bg-gray-400 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a className="text-black">Dashboard</a>
            </li>
            <li>
              <a className="text-black" onClick={handleGenerateAccountClick}>
                Generate Account
              </a>
            </li>
            <li>
              <a className="text-black">Manage Account</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="p-3">
          <a className="pl-2 mt-2 text-black">Dashboard</a>
        </div>

        <div className="w-max shadow-xl mx-auto ">
          <div className="card-body mx-auto bg-white rounded-lg">
            <h1>Operator</h1>
            <figure>
              <img
                src="images/logo undip.png"
                alt="logo"
                className="h-11 w-11 rounded-full"
              />
            </figure>

            {operatorData && (
              <>
                <p>NIP : {operatorData.operator.NIP}</p>
                <p>Nama : {operatorData.operator.nama}</p>
                <p>Alamat : {operatorData.operator.alamat}</p>
                <p>Email : {operatorData.operator.email}</p>
                <p>No. Telepon : {operatorData.operator.notelepon}</p>
                <p>Fakultas : {operatorData.operator.fakultas}</p>
                <p>Departemen :{operatorData.operator.departemen}</p>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-28 mr-20">
          <div className="stats shadow bg-white">
            <div className="stat">
              <div className="stat-title">Total Akun Mahasiswa Aktif</div>
              <div className="stat-value">602</div>
              <div className="stat-desc"></div>
            </div>
          </div>

          <div className="stats shadow bg-white">
            <div className="stat">
              <div className="stat-title">Total Akun Dosen Aktif</div>
              <div className="stat-value">32</div>
              <div className="stat-desc"></div>
            </div>
          </div>

          <div className="stats shadow bg-white">
            <div className="stat">
              <div className="stat-title">Akun Departemen</div>
              <div className="stat-value">7</div>
              <div className="stat-desc"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
