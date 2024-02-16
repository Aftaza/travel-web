import React from "react";
import Link from "next/link";

const Headers = () => {
  return (
    <div className="bg-[#0E0A0AD1] flex flex-row justify-between px-8 py-2 text-[#ffffff] items-center font-semibold">
      <div className="flex flex-row items-center">
        <div className="bg-[#ffffff] rounded-full aspect-square w-12">
        </div>
        <h1 className="text-xl">Travel</h1>
      </div>
      <div className="flex flex-row gap-3">
        <Link href={"/"}>Beranda</Link>
        <Link href={"/"}>Paket</Link>
        <Link href={"/"}>Destinasi</Link>
        <Link href={"/"}>Kontak</Link>
      </div>
      <button className="bg-[#6CC4A1] rounded-2xl py-1 px-4">Login</button>
    </div>
  );
};

export default Headers;
