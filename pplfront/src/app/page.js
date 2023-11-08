"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [cookies, setCookie] = useCookies(["token"]);

  const handleLogin = async (event) => {
    event.preventDefault();

    console.log(email, password);

    if (!email && !password) alert("Email dan password harus dimasukkan");

    try {
      const res = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      if (res) {
        const { role } = res.data;

        setCookie("token", res.data.accessToken, {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });

        // if (role === "admin") {
          router.push("/dashboard-admin");
        // } else if (role === "mahasiswa") {
        //   router.push("/dashboard-mahasiswa");
        // }
      }
    } catch (error) {
      console.log(password, email);
    }
  };

  return (
    <div className="bg-base-100">
      <div className="h-screen flex flex-col items-center  bg-black-100">
        <h1 className="text-white pt-32 text-3xl">SELAMAT DATANG !</h1>
        <div className=" bg-white w-[720px] h-[720px] mt-10 p-10  rounded-lg shadow-lg items-center justofy-center">
          <div className="mt-5 ">
        <img
              src="images/logo undip.png "
              alt="logo"
              className=" w-40 h-43 m-auto"
            ></img>
            </div>
          {error && <span>{error}</span>}
          
          <div className="bg-white mt-5 p-10">
            <div className="mb-5"><a className="text-3xl font-bold"> LOGIN </a></div>
          
          <form onSubmit={handleLogin} action="">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-bold mb-2"
                style={{ color: "black" }}
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded text-black"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-bold mb-2"
                style={{ color: "black" }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded"
                style={{ color: "black" }}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              disabled={!email || !password}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;