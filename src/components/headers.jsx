"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Headers = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={`hover:bg-[#0E0A0AD1] ${
        color ? "bg-[#0E0A0AD1]" : "bg-transparent"
      } flex flex-row justify-between px-4 md:px-8 py-2 text-color-white items-center font-semibold fixed w-[100vw] z-40 transition duration-700 ease-in-out`}
    >
      <div>
        <Image src="/logoWhite.png" alt="Logo" width={80} height={50} quality={100} objectFit="contain"/>
      </div>
      <div className="md:flex flex-row gap-3 hidden">
        <Link href={"/"}>Beranda</Link>
        <Link href={"/"}>Paket</Link>
        <Link href={"/"}>Destinasi</Link>
        <Link href={"/"}>Kontak</Link>
      </div>
      <Link
        href={"/login"}
        className="rounded-2xl py-1 px-4 bg-color-thirdy hidden md:flex drop-shadow-xl"
      >
        Login
      </Link>
      <button
        className="aspect-square w-8 rounded-lg outline outline-2 flex items-center justify-center md:hidden"
        onClick={() => setOpen(!open)}
      >
        =
      </button>
      {open && (
        <nav className="bg-[#0E0A0AD1] fixed inset-x-0 top-12 h-fit z-40 drop-shadow-lg p-2 flex flex-col gap-3">
          <Link href={"/"}>Beranda</Link>
          <Link href={"/"}>Paket</Link>
          <Link href={"/"}>Destinasi</Link>
          <Link href={"/"}>Kontak</Link>
          <Link
            href={"/login"}
            className="rounded-2xl py-1 px-4 bg-color-thirdy w-fit"
          >
            Login
          </Link>
        </nav>
      )}
    </nav>
  );
};

export default Headers;