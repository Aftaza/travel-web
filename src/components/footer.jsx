"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  if (!path.includes("/about")) {
    return (
      <footer className="flex flex-col bg-color-primary">
        <div className="flex flex-col md:flex-row justify-center gap-12 p-8">
          <div className="flex flex-col gap-2 w-[10%] items-center self-end md:self-start">
            <Image
              src="/logoBlue.png"
              width={80}
              height={80}
              alt="Logo"
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-2 w-[15%]">
            <h1 className="font-bold text-xl">Info</h1>
            <div className="flex flex-col font-medium text-[#808080]">
              <Link href="/about">Tentang Kami</Link>
              <Link href="/about">Testimonial</Link>
              <Link href="/about">Kontak</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:self-start self-end w-fit md:w-[15%]">
            <h1 className="font-bold text-xl">Perusahaan</h1>
            <div className="flex flex-col font-medium text-[#808080]">
              <Link href="/about">Syarat & Ketentuan</Link>
              <Link href="/about">Kebijakan Privasi</Link>
              <Link href="/about">Bantuan Pelayanan</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-fit md:w-[15%]">
            <h1 className="font-bold text-xl">Kontak</h1>
            <div className="flex flex-col font-medium text-[#808080]">
              <Link href="/about">
                Jl. Tunjungan Siola, Surabaya, Jawa Timur, Indonesia
              </Link>
              <Link href="/about">Kebijakan Privasi</Link>
              <Link href="">Bantuan Pelayanan</Link>
            </div>
          </div>
        </div>
        <div className="flex p-2 justify-center bg-color-fourty font-semibold text-color-white text-center">
          <p>Copyright 2024 Travel All rights Reserved</p>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className="flex flex-col text-color-white absolute bottom-0 w-full">
        <div className="flex flex-col md:flex-row justify-center gap-12 p-8">
          <div className="flex flex-col gap-2 w-[10%] items-center self-end md:self-start">
            <Image
              src="/logoWhite.png"
              width={80}
              height={80}
              alt="Logo"
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-2 w-[15%]">
            <h1 className="font-bold text-xl">Info</h1>
            <div className="flex flex-col font-medium">
              <Link href="/about">Tentang Kami</Link>
              <Link href="/about">Testimonial</Link>
              <Link href="/about">Kontak</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:self-start self-end w-fit md:w-[15%]">
            <h1 className="font-bold text-xl">Perusahaan</h1>
            <div className="flex flex-col font-medium">
              <Link href="/about">Syarat & Ketentuan</Link>
              <Link href="/about">Kebijakan Privasi</Link>
              <Link href="/about">Bantuan Pelayanan</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-fit md:w-[15%]">
            <h1 className="font-bold text-xl">Kontak</h1>
            <div className="flex flex-col font-medium">
              <Link href="/about">
                Jl. Tunjungan Siola, Surabaya, Jawa Timur, Indonesia
              </Link>
              <Link href="/about">Kebijakan Privasi</Link>
              <Link href="/about">Bantuan Pelayanan</Link>
            </div>
          </div>
        </div>
        <div className="flex p-2 justify-center font-semibold text-color-white text-center">
          <p>Copyright 2024 Explorin All rights Reserved</p>
        </div>
      </footer>
    );
  }
};

export default Footer;
