import React from "react";
import Navbar from "../Component/navbar";

const EntryPkl = () => {
  return (
    <div className="flex-none h-screen  bg-gray-300">
      <Navbar />
      <main>
        <div className="m-10 container mx-auto bg-gray">
          <h1 className="text-4xl font-semibold   dark:text-black mt-5">
            Entry PKL
          </h1>
          <div className="flex mt-10 gap-10 bg-gray-300  ">
            <div className="item-center">
              <div className="container mx-auto bg-white p-4 rounded-lg text-center">
                <img src="image/profil.jpg" alt="profil" width={200} />
                <p className="font-semibold text-lg text-black">
                  Nama: John Doe
                </p>
                <p className="font-semibold text-lg text-black">
                  NIM: 1234567890
                </p>
                <div className="bg-gray-300 text-white px-4 py-2 rounded-md mt-2">
                  Status
                </div>
              </div>
            </div>
            <div className="flex grow gap-10 bg-white shadow-lg rounded-lg p-6">
              <div className="w-full h-full">
                <div className="mb-4">
                  <label className="label" htmlFor="statuspkl">
                    <span className="label-text text-black text">
                      Status PKL
                    </span>
                  </label>
                  <div className="input-box">
                    <input
                      type="text"
                      id="statuspkl"
                      placeholder="Status PKL"
                      className="input input-bordered bg-white shadow-md w-full"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="label" htmlFor="nilaipkl">
                    <span className="label-text">Nilai PKL</span>
                  </label>
                  <div className="input-box">
                    <input
                      type="text"
                      id="nilaipkl"
                      placeholder="Nilai PKL"
                      className="input input-bordered bg-white shadow-md w-full"
                    />
                  </div>
                </div>
                <div className="mb-10"> </div>
                <div className="flex mb-4 items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PDF,PNG, JPG, or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      className="block w-min mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="default_size"
                      type="file"
                    ></input>
                  </label>
                </div>
                <div className="mb-4">
                  <button className="btn btn-primary hover:bg-gray-300 text-white w-32 h-10 ">
                    Save
                  </button>
                  <button className="btn ml-3 w-32 h-8">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EntryPkl;
