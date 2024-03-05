'use client'
import { CardTravel, KategoriGunung } from "@/components/card";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {
  const [activeSection, setActiveSection] = useState("history");

  const handleHistoryClick = () => {
    setActiveSection("history");
  };

  const handleLikedClick = () => {
    setActiveSection("liked");
  };

  return (
    <main className="flex flex-col bg-[#E7E7E7]">
      <header className="relative h-48 bg-color-black">
        <span className="flex justify-center absolute inset-x-0 -bottom-12">
          <div className="w-24 h-24 rounded-full bg-color-fourty"></div>
        </span>
      </header>
      <section className="flex flex-col gap-4 items-center pt-12 pb-4 h-fit">
        <div className="flex flex-col gap-3 font-bold items-center pt-2">
          <div className="flex flex-col gap-1 items-center text-center">
            <h1 className="text-lg leading-none">Hendy Kurniawan</h1>
            <h3 className="text-sm font-medium text-[#808080] leading-none flex gap-1 items-center">
              <svg
                width="11"
                height="17"
                viewBox="0 0 11 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 8.40688C4.97904 8.40688 4.47941 8.19617 4.11104 7.8211C3.74267 7.44603 3.53571 6.93732 3.53571 6.40689C3.53571 5.87645 3.74267 5.36774 4.11104 4.99267C4.47941 4.6176 4.97904 4.40688 5.5 4.40688C6.02096 4.40688 6.52058 4.6176 6.88896 4.99267C7.25733 5.36774 7.46429 5.87645 7.46429 6.40689C7.46429 6.66953 7.41348 6.9296 7.31476 7.17225C7.21605 7.4149 7.07136 7.63538 6.88896 7.8211C6.70656 8.00682 6.49002 8.15413 6.2517 8.25464C6.01338 8.35515 5.75795 8.40688 5.5 8.40688ZM5.5 0.806885C4.04131 0.806885 2.64236 1.39688 1.61091 2.44709C0.579463 3.49729 0 4.92167 0 6.40689C0 10.6069 5.5 16.8069 5.5 16.8069C5.5 16.8069 11 10.6069 11 6.40689C11 4.92167 10.4205 3.49729 9.38909 2.44709C8.35764 1.39688 6.95869 0.806885 5.5 0.806885Z"
                  fill="#B1B1B1"
                />
              </svg>
              Surabaya, Jawa Timur
            </h3>
          </div>
          <p className="font-normal text-sm w-2/3 text-center">
            Saya senang sekali traveling keliling Indonesia terutama wisata
            candi
          </p>
          <div className="flex gap-3">
            <button onClick={handleHistoryClick} className={activeSection === "history" ? "text-[#0087C1] font-bold underline" : "text-color-black"}>Riwayat Perjalanan</button>
            <button onClick={handleLikedClick} className={activeSection === "liked" ? "text-[#0087C1] font-bold underline" : "text-color-black"}>Disukai</button>
          </div>
        </div>
      </section>
      <section className="min-h-screen relative">
        {activeSection === "history" ? (
          <div className="absolute inset-0 flex justify-around pt-10 z-10">
            <CardTravel />
            <CardTravel />
            <CardTravel />
          </div>
        ) : (
          <div className="absolute inset-0 flex justify-around pt-10 z-10">
            <KategoriGunung/>
            <KategoriGunung/>
            <KategoriGunung/>
          </div>
        )}
        <Image
          src="/images/bromo.jpg"
          fill
          alt="Background"
          quality={100}
          className="object-cover z-0"
        />
      </section>
    </main>
  );
}
