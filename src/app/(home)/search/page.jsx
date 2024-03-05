import { CardTravel } from "@/components/card";
import Image from "next/image";
import React from "react";

const SearchPage = () => {
  return (
    <main className="flex flex-col">
      <section className="h-96 relative grid place-content-center">
        <Image
          src="https://serve.aftaza.my.id/public/images/bromo.jpg"
          fill
          quality={100}
          alt="Background"
          className="object-cover -z-10"
        />
        <div className="flex flex-col gap-4 items-center w-screen">
          <h1 className="text-[120px] leading-none font-extrabold text-color-white drop-shadow-lg">
            DESTINASI
          </h1>
          <div className="bg-color-white bg-opacity-0 outline outline-1 outline-color-white rounded-sm h-10 w-1/3 flex items-center justify-between px-2">
            <input
              type="text"
              name=""
              id=""
              className="bg-color-white bg-opacity-0 text-color-white w-5/6 h-full focus:outline-none active:outline-none placeholder:text-color-white placeholder:opacity-90 font-semibold"
              placeholder="Ide apa yang harus dilakukan untuk perjalanan"
            />
            <svg
              width="33"
              height="33"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.1167 37.625L23.8292 26.3375C22.9333 27.0542 21.9031 27.6215 20.7385 28.0396C19.574 28.4576 18.3347 28.6667 17.0208 28.6667C13.766 28.6667 11.0116 27.5391 8.75767 25.284C6.50375 23.0289 5.37619 20.2745 5.375 17.0208C5.375 13.766 6.50256 11.0116 8.75767 8.75767C11.0128 6.50375 13.7672 5.37619 17.0208 5.375C20.2757 5.375 23.0307 6.50256 25.2858 8.75767C27.5409 11.0128 28.6679 13.7672 28.6667 17.0208C28.6667 18.3347 28.4576 19.574 28.0396 20.7385C27.6215 21.9031 27.0542 22.9333 26.3375 23.8292L37.625 35.1167L35.1167 37.625ZM17.0208 25.0833C19.2604 25.0833 21.1644 24.2998 22.7327 22.7327C24.301 21.1656 25.0845 19.2616 25.0833 17.0208C25.0833 14.7812 24.2998 12.8779 22.7327 11.3108C21.1656 9.74368 19.2616 8.95953 17.0208 8.95833C14.7812 8.95833 12.8779 9.74249 11.3108 11.3108C9.74368 12.8791 8.95953 14.7824 8.95833 17.0208C8.95833 19.2604 9.74249 21.1644 11.3108 22.7327C12.8791 24.301 14.7824 25.0845 17.0208 25.0833Z"
                fill="#EEEEEE"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="p-12 flex flex-row gap-8">
        <aside className="w-1/3 flex flex-col gap-4 items-center px-8 text-color-white">
          <div className="flex flex-col p-2 bg-color-fourty w-full rounded-lg">
            <h3 className="font-semibold">Rentang Harga</h3>
            <input type="range" name="" id="" />
          </div>
          <div className="flex flex-col p-2 bg-color-fourty w-full rounded-lg">
            <h3 className="font-semibold">Kategori</h3>
            <li>Gunung</li>
            <li>Pantai</li>
            <li>Air Terjun</li>
            <li>Candi</li>
          </div>
          <div className="flex flex-col p-2 bg-color-fourty w-full rounded-lg">
            <h3 className="font-semibold">Filter</h3>
            <p className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              Harga Termurah
            </p>
            <p className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              Harga Tertinggi
            </p>
            <p className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              Terpopuler
            </p>
          </div>
        </aside>
        <div className="w-2/3 grid grid-cols-2 gap-4 drop-shadow-xl">
          <CardTravel />
          <CardTravel />
          <CardTravel />
          <CardTravel />
          <CardTravel />
        </div>
      </section>
    </main>
  );
};
export default SearchPage;
