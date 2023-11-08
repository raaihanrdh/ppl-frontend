"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useCookies } from "react-cookie";
//import { Navbar } from "flowbite-react";
import Navbar from "../Component/navbar";

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
    <div className="h-screen bg-gray-200">
      <Navbar/>
      <div className="flex-1 justify-center min-h-screen gap-10 bg-gray-200 m-10">
        <div className="w-max shadow-lg mx-auto rounded-lg ">
          <div className="card-body mx-auto bg-white rounded-lg">
            <h1 className="flex-1 text-xl">Operator</h1>
            <figure>
              <img
                src="images/logo undip.png"
                alt="logo"
                className="flex-1 h-32 w-26 rounded-full"
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

        <div className="flex justify-center gap-10 mt-10">
          <div className="stats shadow bg-white">
            <div className="stat">
              <div className="stat-title">Mahasiswa Aktif</div>
              <div className="stat-value text-center">602</div>
              <div className="stat-desc"></div>
            </div>
          </div>

          <div className="stats shadow bg-white">
            <div className="stat">
              <div className="stat-title">Dosen Aktif</div>
              <div className="stat-value text-center">32</div>
              <div className="stat-desc"></div>
            </div>
          </div>

          <div className="stats shadow bg-white">
            <div className="stat">
              <div className="stat-title">Akun Departemen</div>
              <div className="stat-value text-center">7</div>
              <div className="stat-desc"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;