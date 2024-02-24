import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#F6E3C5]">
      <div className="flex flex-col gap-4 md:flex-row justify-evenly py-8 px-8 md:px-32">
        <div className="flex flex-col self-end">
          <div className="bg-[#fff] w-12 h-12 rounded-full"></div>
          <p className="font-semibold">Travel</p>
        </div>
        <div className="flex flex-col font-bold w-fit">
          <h1 className="text-2xl">Info</h1>
          <Link href="/" className="text-[#636363]">
            Tentang Kami
          </Link>
          <Link href="/" className="text-[#636363]">
            Testimonial
          </Link>
          <Link href="/" className="text-[#636363]">
            Kontak
          </Link>
        </div>
        <div className="flex flex-col font-bold w-fit self-end">
          <h1 className="text-2xl">Perusahaan</h1>
          <Link href="/" className="text-[#636363]">
            Syarat & Ketentuan
          </Link>
          <Link href="/" className="text-[#636363]">
            Kebijakan Privasi
          </Link>
          <Link href="/" className="text-[#636363]">
            Bantuan Pelayanan
          </Link>
        </div>
        <div className="flex flex-col font-bold w-fit pr-24">
          <h1 className="text-2xl">Kontak</h1>
          <Link href="/" className="text-[#636363]">
            Jl. Tunjungan Siola, Surabaya, Jawa Timur, Indonesia
          </Link>
          <Link href="/" className="text-[#636363]">
          (031)9893748
          </Link>
          <Link href="/" className="text-[#636363]">
            contact@gmail.com
          </Link>
        </div>
      </div>
      <div className="bg-[#4CACBC] flex justify-center w-full p-2 text-[#ffffff] font-semibold">
        Copyright 2024 Travel All rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
