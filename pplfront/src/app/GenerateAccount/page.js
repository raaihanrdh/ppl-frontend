"use client";

import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const GenerateAcc = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["token"]);
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    angkatan: "",
    fakultas: "",
    prodi: "",
    status: "",
    doswal: "",
    email: "",
    iddosen: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/usersmhs",
        {
          nama: formData.nama,
          NIM: formData.nim,
          angkatan: formData.angkatan,
          fakultas: formData.fakultas,
          prodi: formData.prodi,
          status: formData.status,
          email: formData.email,
          iddosen: formData.iddosen
        },

        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );

      if (res) {
        router.push("/dashboard-admin");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event, field) => {
    const { value } = event.target;
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg p-10">
        <h1 className="text-3xl font-semibold text-black mb-9 text-center">
          ENTRY DATA MAHASISWA
        </h1>

        <form
          className="grid grid-cols-2 gap-7 w-full"
          onSubmit={handleSubmit}
          action=""
        >
          <div className="mb-4">
            <div className="flex flex-col">
              <label
                className="block text-sm font-semibold text-black mb-1"
                htmlFor="nama"
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                placeholder="Nama"
                className="input input-bordered w-full bg-white border-black text-black p-2"
                value={formData.nama}
                onChange={(e) => handleChange(e, "nama")}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label
                className="block text-sm font-semibold text-black mb-1"
                htmlFor="nim"
              >
                NIM
              </label>
              <input
                type="text"
                id="nim"
                placeholder="NIM"
                className="input input-bordered w-full bg-white border-black text-black p-2"
                value={formData.NIM}
                onChange={(e) => handleChange(e, "nim")}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label
                className="block text-sm font-semibold text-black mb-1"
                htmlFor="angkatan"
              >
                Angkatan
              </label>
              <select
                id="angkatan"
                className="input input-bordered w-full bg-white border-black text-black p-2"
                value={formData.angkatan}
                onChange={(e) => handleChange(e, "angkatan")}
              >
                <option value="">Pilih Angkatan</option>
                <option value="2020">2022</option>
                <option value="2021">2023</option>
                <option value="2022">2024</option>
                {/* Tambahkan opsi lain sesuai kebutuhan */}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label
                className="block text-sm font-semibold text-black mb-1"
                htmlFor="fakultas"
              >
                Fakultas
              </label>
              <input
                type="text"
                id="fakultas"
                placeholder="Fakultas"
                className="input input-bordered w-full bg-white border-black text-black p-2"
                value={formData.fakultas}
                onChange={(e) => handleChange(e, "fakultas")}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-col">
              <label
                className="block text-sm font-semibold text-black mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="input input-bordered w-full bg-white border-black text-black p-2"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label
                className="block text-sm font-semibold text-black mb-1"
                htmlFor="prodi"
              >
                Prodi
              </label>
              <input
                type="text"
                id="prodi"
                placeholder="Prodi"
                className="input input-bordered w-full bg-white border-black text-black p-2"
                value={formData.prodi}
                onChange={(e) => handleChange(e, "prodi")}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label
                className="block text-sm font-semibold text-black mb-1"
                htmlFor="status"
              >
                Status
              </label>
              <select
                id="status"
                className="input input-bordered w-full bg-white border-black text-black p-2"
                value={formData.status}
                onChange={(e) => handleChange(e, "status")}
              >
                <option value="">Pilih Status</option>
                <option value="Aktif">Aktif</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label
                className="block text-sm font-semibold text-black mb-1"
                htmlFor="iddosen"
              >
                Id Dosen
              </label>
              <input
                type="text"
                id="iddosen"
                placeholder="id dosen"
                className="input input-bordered w-full bg-white border-black text-black p-2"
                value={formData.iddosen}
                onChange={(e) => handleChange(e, "iddosen")}
              />
            </div>
          </div>
          <div className="mt-10">
            <button type="submit" className="btn btn-primary">
              Simpan Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenerateAcc;
