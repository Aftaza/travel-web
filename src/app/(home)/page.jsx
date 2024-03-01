"use client";
import { Star } from "@/components/Star";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
export default function Home() {
  const containerRef = useRef();
  const scrollToNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollToBack = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  return (
    <main className="flex flex-col">
      <section className="h-[100vh] relative pt-16 px-12 flex flex-col overflow-hidden drop-shadow-lg">
        <video
          autoPlay
          loop
          muted
          className="inset-0 absolute h-full -z-10 scale-150 object-cover"
        >
          <source src="/videos/bgVideo.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-4 text-color-white text-center md:text-left md:w-1/3 drop-shadow-lg h-[60vh] md:h-fit justify-center md:justify-start">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold backdrop-blur-lg">
              TUJUAN TERBAIK DI SELURUH DUNIA
            </h2>
            <h1 className="text-4xl font-bold leading-normal">
              Bepergian ke sudut manapun di Dunia
            </h1>
            <h2 className="text-xl font-semibold">
              Bepergian ke sudut manapun di Dunia
            </h2>
          </div>
          <button className="p-3 rounded-full bg-color-fourty text-color-white w-1/2 font-bold self-center md:self-start flex gap-2 justify-center items-center">
            Explore
            <svg
              width="36"
              height="11"
              viewBox="0 0 41 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0L0 9Z"
                fill="white"
              />
            </svg>
          </button>
          <div className="bg-color-white rounded-2xl p-3 h-fit items-center flex md:hidden justify-center gap-3 md:w-1/3 drop-shadow-md">
            <div className="flex flex-col w-full">
              <label
                for="destination"
                className="font-bold text-color-black text-start"
              >
                Destination
              </label>
              <input
                type="text"
                placeholder="Mau liburan kemana"
                className="text-[#000000] font-semibold h-8 active:outline-none focus:outline-none"
              />
            </div>
            <button className="p-2 rounded-full bg-color-fourty w-12 h-12 flex-none">
              <svg
                width="30"
                height="30"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_17_11)">
                  <path
                    d="M49.5781 46.2181L40.0781 36.7066C39.7704 36.3913 39.4278 36.1121 39.0569 35.8744L36.6819 34.2337C41.5671 28.1817 41.6124 19.5486 36.7911 13.4455C31.9698 7.34234 23.5685 5.398 16.5611 8.76355C9.55368 12.1291 5.81028 19.9063 7.5471 27.4909C9.28393 35.0754 16.0374 40.4431 23.8094 40.4161C27.581 40.4172 31.2409 39.1343 34.1881 36.778L35.9694 39.1558C36.1806 39.4621 36.4191 39.7486 36.6819 40.0119L46.1819 49.5233C46.4048 49.7484 46.7084 49.875 47.025 49.875C47.3416 49.875 47.6451 49.7484 47.8681 49.5233L49.5306 47.8588C49.9815 47.4123 50.0024 46.69 49.5781 46.2181ZM23.8094 35.6604C17.251 35.6604 11.9344 30.3373 11.9344 23.7711C11.9344 17.2048 17.251 11.8817 23.8094 11.8817C30.3677 11.8817 35.6844 17.2048 35.6844 23.7711C35.6844 26.9243 34.4333 29.9484 32.2063 32.1781C29.9793 34.4078 26.9588 35.6604 23.8094 35.6604Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_11">
                    <rect width="57" height="57" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center h-[50vh]">
          <div className="bg-color-white rounded-2xl p-3 h-fit items-center hidden md:flex justify-center gap-3 md:w-1/3  drop-shadow-md">
            <div className="flex flex-col w-full">
              <label for="destination" className="font-bold">
                Destination
              </label>
              <input
                type="text"
                placeholder="Mau liburan kemana"
                className="text-[#000000] font-semibold h-8 active:outline-none focus:outline-none"
              />
            </div>
            <button className="p-2 rounded-full bg-color-fourty w-12 h-12 flex-none">
              <svg
                width="30"
                height="30"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_17_11)">
                  <path
                    d="M49.5781 46.2181L40.0781 36.7066C39.7704 36.3913 39.4278 36.1121 39.0569 35.8744L36.6819 34.2337C41.5671 28.1817 41.6124 19.5486 36.7911 13.4455C31.9698 7.34234 23.5685 5.398 16.5611 8.76355C9.55368 12.1291 5.81028 19.9063 7.5471 27.4909C9.28393 35.0754 16.0374 40.4431 23.8094 40.4161C27.581 40.4172 31.2409 39.1343 34.1881 36.778L35.9694 39.1558C36.1806 39.4621 36.4191 39.7486 36.6819 40.0119L46.1819 49.5233C46.4048 49.7484 46.7084 49.875 47.025 49.875C47.3416 49.875 47.6451 49.7484 47.8681 49.5233L49.5306 47.8588C49.9815 47.4123 50.0024 46.69 49.5781 46.2181ZM23.8094 35.6604C17.251 35.6604 11.9344 30.3373 11.9344 23.7711C11.9344 17.2048 17.251 11.8817 23.8094 11.8817C30.3677 11.8817 35.6844 17.2048 35.6844 23.7711C35.6844 26.9243 34.4333 29.9484 32.2063 32.1781C29.9793 34.4078 26.9588 35.6604 23.8094 35.6604Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_11">
                    <rect width="57" height="57" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-8 px-10 md:px-12 py-12 bg-color-white">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl md:text-4xl">Promo Liburan</h1>
            <Link
              href="/"
              className="text-color-fourty font-semibold underline flex gap-1 items-center"
            >
              View All
              <svg
                width="18"
                height="16"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4956 10.9961L-5.79623e-05 21.6262L16.2121 10.9392L0.168975 3.26328e-07L23.4956 10.9961Z"
                  fill="#4CACBC"
                />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <button
              onClick={scrollToBack}
              className=" bg-color-fourty w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 left-2 z-10 grid place-content-center"
            >
              <svg
                width="24"
                height="22"
                className="rotate-180"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7556 11.5793L2.24983e-05 21.6151L16.4759 11.3392L0.712966 -5.58225e-05L23.7556 11.5793Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              onClick={scrollToNext}
              className=" bg-color-fourty w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 right-2 z-10 grid place-content-center"
            >
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7556 11.5793L2.24983e-05 21.6151L16.4759 11.3392L0.712966 -5.58225e-05L23.7556 11.5793Z"
                  fill="white"
                />
              </svg>
            </button>
            <div ref={containerRef} className="flex gap-4 overflow-scroll scroll-snap-type-mandatory">
              <div className="flex flex-none w-[80vw] md:w-2/5 bg-color-fourty rounded-3xl h-fit overflow-hidden text-color-white drop-shadow-lg">
                <div className="w-[40%] relative flex-none">
                  <Image
                    src="/images/bromo.jpg"
                    fill={true}
                    alt="Bromo"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex flex-col gap-4 p-3">
                  <div className="flex flex-col">
                    <h1 className="text-lg md:text-xl font-semibold md:whitespace-nowrap">
                      Gunung Bromo, Jawa Timur
                    </h1>
                    <p className="font-light md:text-base text-sm">Indonesia</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm md:text-base font-semibold flex gap-2">
                      <h2 className="line-through">Rp. 1.200.000</h2>{" "}
                      <p className="text-[#FF6341]">15%</p>
                    </div>
                    <h1 className="text-base md:text-lg font-semibold">
                      Rp. 800.000
                    </h1>
                  </div>
                  <p className="text-xs md:text-sm font-light">
                    Untuk 1 orang tiket pesawat, makan siang, makan....
                  </p>
                  <p className="font-semibold md:text-base text-sm">
                    Berangkat: 15-04-2023
                  </p>
                  <div className="flex gap-2 justify-between">
                    <button className="md:text-base text-sm p-2 rounded-3xl outline outline-1 outline-color-white w-1/2 flex justify-center items-center">
                      Lihat detail
                    </button>
                    <button className="md:text-base text-sm p-2 rounded-3xl bg-color-primary text-color-black w-1/2 flex justify-center items-center">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-none w-[80vw] md:w-2/5 bg-color-fourty rounded-3xl h-fit overflow-hidden text-color-white drop-shadow-lg">
                <div className="w-[40%] relative flex-none">
                  <Image
                    src="/images/bromo.jpg"
                    fill={true}
                    alt="Bromo"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex flex-col gap-4 p-3">
                  <div className="flex flex-col">
                    <h1 className="text-lg md:text-xl font-semibold md:whitespace-nowrap">
                      Gunung Bromo, Jawa Timur
                    </h1>
                    <p className="font-light md:text-base text-sm">Indonesia</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm md:text-base font-semibold flex gap-2">
                      <h2 className="line-through">Rp. 1.200.000</h2>{" "}
                      <p className="text-[#FF6341]">15%</p>
                    </div>
                    <h1 className="text-base md:text-lg font-semibold">
                      Rp. 800.000
                    </h1>
                  </div>
                  <p className="text-xs md:text-sm font-light">
                    Untuk 1 orang tiket pesawat, makan siang, makan....
                  </p>
                  <p className="font-semibold md:text-base text-sm">
                    Berangkat: 15-04-2023
                  </p>
                  <div className="flex gap-2 justify-between">
                    <button className="md:text-base text-sm p-2 rounded-3xl outline outline-1 outline-color-white w-1/2 flex justify-center items-center">
                      Lihat detail
                    </button>
                    <button className="md:text-base text-sm p-2 rounded-3xl bg-color-primary text-color-black w-1/2 flex justify-center items-center">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-none w-[80vw] md:w-2/5 bg-color-fourty rounded-3xl h-fit overflow-hidden text-color-white drop-shadow-lg">
                <div className="w-[40%] relative flex-none">
                  <Image
                    src="/images/bromo.jpg"
                    fill={true}
                    alt="Bromo"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex flex-col gap-4 p-3">
                  <div className="flex flex-col">
                    <h1 className="text-lg md:text-xl font-semibold md:whitespace-nowrap">
                      Gunung Bromo, Jawa Timur
                    </h1>
                    <p className="font-light md:text-base text-sm">Indonesia</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm md:text-base font-semibold flex gap-2">
                      <h2 className="line-through">Rp. 1.200.000</h2>{" "}
                      <p className="text-[#FF6341]">15%</p>
                    </div>
                    <h1 className="text-base md:text-lg font-semibold">
                      Rp. 800.000
                    </h1>
                  </div>
                  <p className="text-xs md:text-sm font-light">
                    Untuk 1 orang tiket pesawat, makan siang, makan....
                  </p>
                  <p className="font-semibold md:text-base text-sm">
                    Berangkat: 15-04-2023
                  </p>
                  <div className="flex gap-2 justify-between">
                    <button className="md:text-base text-sm p-2 rounded-3xl outline outline-1 outline-color-white w-1/2 flex justify-center items-center">
                      Lihat detail
                    </button>
                    <button className="md:text-base text-sm p-2 rounded-3xl bg-color-primary text-color-black w-1/2 flex justify-center items-center">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl md:text-4xl">Terpopuler</h1>
            <Link
              href="/"
              className="text-color-fourty font-semibold underline flex gap-1 items-center"
            >
              View All
              <svg
                width="18"
                height="16"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4956 10.9961L-5.79623e-05 21.6262L16.2121 10.9392L0.168975 3.26328e-07L23.4956 10.9961Z"
                  fill="#4CACBC"
                />
              </svg>
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-scroll z-10 drop-shadow-xl">
            <div className="rounded-2xl relative flex flex-col justify-end overflow-hidden h-96 flex-none w-[80vw] md:w-fit">
              <p className="rounded-xl py-1 px-2 bg-color-black bg-opacity-80 w-fit absolute left-2 top-2 text-color-white font-semibold flex gap-1 items-center">
                4.9
                <Star className="w-4 -mt-[2px]" />
              </p>
              <Image
                src="/images/candipenataran.png"
                fill
                alt="Candi Penataran"
                className="object-cover -z-10"
                quality={100}
              />
              <div className="m-2 rounded-xl bg-color-fourty bg-opacity-85 h-fit flex flex-col gap-2 justify-between p-2 leading-none text-color-white">
                <div className="flex flex-col">
                  <h1 className="font-semibold">Candi Penataran, Blitar</h1>
                  <p className="">Indonesia</p>
                </div>
                <p className="text-sm">
                  Untuk 1 orang tiket pesawat, makan siang, makan....
                </p>
                <div className="flex justify-between gap-2 items-center">
                  <h3 className="font-semibold">Rp. 900.000</h3>
                  <button className="py-2 px-4 rounded-2xl bg-color-primary text-color-black font-semibold text-sm">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl relative flex flex-col justify-end overflow-hidden h-96 flex-none w-[80vw] md:w-fit">
              <p className="rounded-xl py-1 px-2 bg-color-black bg-opacity-80 w-fit absolute left-2 top-2 text-color-white font-semibold flex gap-1 items-center">
                4.9
                <Star className="w-4 -mt-[2px]" />
              </p>
              <Image
                src="/images/candipenataran.png"
                fill
                alt="Candi Penataran"
                className="object-cover -z-10"
                quality={100}
              />
              <div className="m-2 rounded-xl bg-color-fourty bg-opacity-85 h-fit flex flex-col gap-2 justify-between p-2 leading-none text-color-white">
                <div className="flex flex-col">
                  <h1 className="font-semibold">Candi Penataran, Blitar</h1>
                  <p className="">Indonesia</p>
                </div>
                <p className="text-sm">
                  Untuk 1 orang tiket pesawat, makan siang, makan....
                </p>
                <div className="flex justify-between gap-2 items-center">
                  <h3 className="font-semibold">Rp. 900.000</h3>
                  <button className="py-2 px-4 rounded-2xl bg-color-primary text-color-black font-semibold text-sm">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl relative flex flex-col justify-end overflow-hidden h-96 flex-none w-[80vw] md:w-fit">
              <p className="rounded-xl py-1 px-2 bg-color-black bg-opacity-80 w-fit absolute left-2 top-2 text-color-white font-semibold flex gap-1 items-center">
                4.9
                <Star className="w-4 -mt-[2px]" />
              </p>
              <Image
                src="/images/candipenataran.png"
                fill
                alt="Candi Penataran"
                className="object-cover -z-10"
                quality={100}
              />
              <div className="m-2 rounded-xl bg-color-fourty bg-opacity-85 h-fit flex flex-col gap-2 justify-between p-2 leading-none text-color-white">
                <div className="flex flex-col">
                  <h1 className="font-semibold">Candi Penataran, Blitar</h1>
                  <p className="">Indonesia</p>
                </div>
                <p className="text-sm">
                  Untuk 1 orang tiket pesawat, makan siang, makan....
                </p>
                <div className="flex justify-between gap-2 items-center">
                  <h3 className="font-semibold">Rp. 900.000</h3>
                  <button className="py-2 px-4 rounded-2xl bg-color-primary text-color-black font-semibold text-sm">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl relative flex flex-col justify-end overflow-hidden h-96 flex-none w-[80vw] md:w-fit">
              <p className="rounded-xl py-1 px-2 bg-color-black bg-opacity-80 w-fit absolute left-2 top-2 text-color-white font-semibold flex gap-1 items-center">
                4.9
                <Star className="w-4 -mt-[2px]" />
              </p>
              <Image
                src="/images/candipenataran.png"
                fill
                alt="Candi Penataran"
                className="object-cover -z-10"
                quality={100}
              />
              <div className="m-2 rounded-xl bg-color-fourty bg-opacity-85 h-fit flex flex-col gap-2 justify-between p-2 leading-none text-color-white">
                <div className="flex flex-col">
                  <h1 className="font-semibold">Candi Penataran, Blitar</h1>
                  <p className="">Indonesia</p>
                </div>
                <p className="text-sm">
                  Untuk 1 orang tiket pesawat, makan siang, makan....
                </p>
                <div className="flex justify-between gap-2 items-center">
                  <h3 className="font-semibold">Rp. 900.000</h3>
                  <button className="py-2 px-4 rounded-2xl bg-color-primary text-color-black font-semibold text-sm">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="flex flex-col gap-8 py-8 px-12 text-color-white bg-color-thirdy">
        <h1 className="font-semibold text-2xl md:text-4xl leading-none">
          Partner Tour and Travel
        </h1>
        <Marquee className="flex gap-22">
          <div className="flex justify-between gap-32 overflow-scroll">
            <div className="w-32 flex-none flex flex-col items-center">
              <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 12.5V137.5H137.5V12.5H12.5ZM84.8125 111.562C81.8802 111.866 78.9168 111.557 76.1106 110.653C73.3045 109.75 70.717 108.273 68.5127 106.315C66.3084 104.358 64.5354 101.963 63.3066 99.2833C62.0778 96.6037 61.42 93.6976 61.375 90.75V65.25H53.5V55.1875C57.7919 53.5239 61.5132 50.6582 64.218 46.9336C66.9227 43.209 68.4963 38.7836 68.75 34.1875C68.75 34.0383 68.8093 33.8952 68.9147 33.7898C69.0202 33.6843 69.1633 33.625 69.3125 33.625H80.6875V53.4375H96.3125V65.25H80.75V89.5625C80.635 90.5838 80.7483 91.6178 81.0817 92.59C81.4152 93.5621 81.9605 94.448 82.6782 95.1836C83.3959 95.9193 84.268 96.4863 85.2316 96.8436C86.1952 97.201 87.2262 97.3398 88.25 97.25C90.3967 97.1532 92.5108 96.6881 94.5 95.875L98.25 107C94.4411 110.043 89.687 111.658 84.8125 111.562Z"
                  fill="white"
                />
              </svg>
              <h1 className="text-2xl text-center font-semibold">Brand</h1>
            </div>
            <div className="w-32 flex-none flex flex-col items-center">
              <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80.4875 37.0526C80.7613 37.0347 81.0356 37.0778 81.2907 37.1787C81.5458 37.2795 81.7754 37.4357 81.9629 37.6359C82.1505 37.8362 82.2913 38.0755 82.3753 38.3366C82.4593 38.5978 82.4843 38.8743 82.4486 39.1463C82.4611 39.7208 82.4704 40.2953 82.4711 40.8697C82.475 44.5723 82.4563 48.2752 82.4841 51.9774C82.5047 54.687 82.9808 55.2087 85.6053 55.5343C92.1551 56.1372 98.7505 56.0412 105.28 55.2481C108.663 55.0135 111.984 54.2241 115.11 52.9116C115.881 52.6753 116.532 52.1545 116.932 51.4551C117.332 50.7557 117.451 49.9303 117.264 49.1465C116.021 40.4937 112.153 32.4308 106.18 26.0474C100.208 19.664 92.4203 15.2676 83.8693 13.4524C76.2768 11.8038 68.3733 12.3302 61.0665 14.9711C54.6521 17.2049 48.8753 20.9616 44.2318 25.9187C37.0837 33.0286 32.9498 42.6192 32.6889 52.6978C32.8226 64.8255 36.1084 76.7099 42.2238 87.1838C42.9713 88.7139 44.167 89.9803 45.6517 90.8146C47.1364 91.6488 48.8398 92.0114 50.5356 91.8541C54.6188 91.7561 58.7063 91.832 62.7922 91.832V91.8103C67.1333 91.8103 71.4743 91.8112 75.8152 91.8133C77.3731 91.8167 78.6061 92.189 78.5938 94.1399C78.5652 98.6725 78.598 103.205 78.5729 107.737C78.5648 109.113 78.1776 110.437 76.5346 110.45C74.8852 110.463 74.4946 109.145 74.474 107.766C74.442 105.596 74.4751 103.425 74.4778 101.255C74.4808 98.436 74.0189 97.7753 71.2078 97.2613C66.3513 96.4701 61.4021 96.4282 56.5328 97.1369C54.8109 97.2738 53.1218 97.6847 51.5295 98.3542C50.2054 98.9775 49.679 99.8858 50.3221 101.275C50.9912 102.72 51.6153 104.195 52.4046 105.574C58.825 116.377 65.9804 126.725 73.8203 136.547C74.7823 137.794 75.5273 137.82 76.5146 136.613C78.6939 133.948 80.9828 131.372 83.1392 128.688C91.5942 118.448 99.0772 107.442 105.491 95.814C109.775 88.2505 112.923 80.0976 114.832 71.6174C115.255 70.5316 115.419 69.3625 115.313 68.2023C115.207 67.042 114.832 65.9224 114.219 64.9316C113.606 63.9409 112.771 63.1061 111.78 62.4932C110.789 61.8804 109.669 61.5061 108.509 61.4C105.083 60.6423 101.577 60.3031 98.0688 60.3897C92.3875 60.3474 86.7055 60.3679 81.024 60.3729C79.4939 60.3744 78.356 59.935 78.3548 58.1398C78.3518 51.82 78.3433 45.4998 78.3663 39.1804C78.3715 37.8312 79.0218 37.0026 80.4875 37.0526Z"
                  fill="white"
                />
              </svg>

              <h1 className="text-2xl text-center font-semibold">Brand</h1>
            </div>
            <div className="w-32 flex-none flex flex-col items-center">
              <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.6875 108H74.0625L85 129.5H100.875L75 61.6875L56.6875 108ZM12.5 18.75V131.25L58.875 18.75H12.5ZM90.5 18.75L137.5 130.062V18.75H90.5Z"
                  fill="white"
                />
              </svg>

              <h1 className="text-2xl text-center font-semibold">Brand</h1>
            </div>
            <div className="w-32 flex-none flex flex-col items-center">
              <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.75 94.625C43.9472 95.5948 44.3064 96.5245 44.8125 97.375C46.8072 102.247 49.7616 106.668 53.5 110.375C57.2598 114.094 61.6928 117.063 66.5625 119.125C71.5666 121.313 76.9761 122.421 82.4375 122.375C87.9185 122.415 93.3472 121.308 98.375 119.125C103.225 117.062 107.638 114.092 111.375 110.375C115.144 106.668 118.139 102.249 120.188 97.375C122.222 92.2485 123.2 86.7638 123.063 81.25C123.05 75.7602 121.967 70.3256 119.875 65.25C117.826 60.3952 114.83 55.9972 111.063 52.3125C107.282 48.4853 102.774 45.4523 97.805 43.3915C92.8357 41.3308 87.5046 40.284 82.125 40.3125C76.574 40.3666 71.0905 41.5356 66 43.75C63.3678 44.9195 60.8559 46.3429 58.5 48C55.9282 49.7066 53.5404 51.6755 51.375 53.875V20.1875H107.938C109.313 20.1875 110.063 18.875 110.063 16.3125C110.063 13.75 109.25 12.5 107.875 12.5H46.6875C46.3336 12.4827 45.9805 12.547 45.6554 12.6879C45.3303 12.8288 45.0419 13.0425 44.8125 13.3125C44.5718 13.5484 44.3812 13.8306 44.2523 14.1421C44.1234 14.4536 44.0589 14.7879 44.0625 15.125V62.5C44.084 62.8731 44.191 63.2362 44.3753 63.5613C44.5595 63.8864 44.816 64.1648 45.125 64.375C45.8921 64.9233 46.7647 65.3064 47.6875 65.5C48.563 65.7698 49.4995 65.7698 50.375 65.5C50.9055 65.3441 51.4107 65.1126 51.875 64.8125C52.2049 64.4916 52.4983 64.1353 52.75 63.75C54.338 61.4998 56.1379 59.4069 58.125 57.5C61.1957 54.3401 64.8825 51.8442 68.9571 50.1671C73.0316 48.49 77.4071 47.6673 81.8125 47.75C86.2616 47.6903 90.6748 48.5536 94.7734 50.2856C98.8719 52.0175 102.567 54.5804 105.625 57.8125C108.771 60.848 111.268 64.4903 112.965 68.5188C114.663 72.5474 115.525 76.8785 115.5 81.25C115.462 85.5432 114.592 89.7883 112.938 93.75C111.323 97.9283 108.888 101.741 105.774 104.961C102.661 108.182 98.9337 110.745 94.8125 112.5C90.7256 114.167 86.3514 115.017 81.9375 115C75.9847 115.047 70.1381 113.423 65.0625 110.312V81.25C65.0926 77.0975 66.6755 73.1066 69.5 70.0625C71.0341 68.2585 72.9537 66.8221 75.1173 65.8593C77.2808 64.8965 79.6329 64.432 82 64.5C84.3129 64.4037 86.6203 64.7934 88.7733 65.6439C90.9264 66.4943 92.8772 67.7866 94.5 69.4375C96.0498 70.9796 97.2657 72.8241 98.0721 74.8563C98.8785 76.8885 99.2582 79.0648 99.1875 81.25C99.1961 83.5171 98.7527 85.7632 97.8834 87.857C97.014 89.9509 95.7361 91.8505 94.1243 93.4448C92.5125 95.0392 90.5991 96.2963 88.4959 97.1429C86.3927 97.9893 84.1419 98.4082 81.875 98.375H79.75L77.4375 97.9375H76.5C75.1875 97.5625 74.1875 98.5625 73.4375 100.937C72.6875 103.312 73 104.687 74.3125 105.187C76.8479 105.941 79.4799 106.32 82.125 106.312C85.3813 106.355 88.612 105.733 91.6205 104.487C94.6291 103.241 97.3525 101.395 99.625 99.0625C102.006 96.7607 103.88 93.9877 105.128 90.9207C106.377 87.8536 106.971 84.56 106.875 81.25C106.941 78.009 106.33 74.7898 105.082 71.7981C103.834 68.8064 101.975 66.1079 99.625 63.875C97.3561 61.5419 94.632 59.7 91.6216 58.4636C88.6112 57.2271 85.3788 56.6226 82.125 56.6875C78.8533 56.6276 75.6037 57.2339 72.5737 58.4695C69.5437 59.7052 66.7968 61.5443 64.5 63.875C62.2718 65.9451 60.4904 68.4489 59.2651 71.2326C58.0399 74.0163 57.3967 77.0211 57.375 80.0625V103.812C54.3989 100.407 52.107 96.4603 50.625 92.1875C50.125 90.875 48.75 90.625 46.4375 91.375C44.125 92.125 43 93.1875 43.4375 94.4375L43.75 94.625ZM82.8125 25.875C75.6505 25.7275 68.5377 27.0904 61.9375 29.875C61.5755 29.9015 61.234 30.0533 60.9717 30.3042C60.7094 30.5551 60.5426 30.8895 60.5 31.25C60.5287 32.1719 60.7191 33.0815 61.0625 33.9375C61.9375 36.125 62.9375 36.9375 64.1875 36.5C70.026 34.2297 76.2356 33.064 82.5 33.0625C89.1221 33.0079 95.6813 34.3495 101.75 37C107.023 39.2976 111.896 42.42 116.188 46.25C116.331 46.4052 116.505 46.5295 116.699 46.6155C116.892 46.7014 117.101 46.7472 117.313 46.75C117.875 46.75 118.813 46.125 120 44.9375L121.188 43.75C121.442 43.3602 121.572 42.9028 121.563 42.4375C121.523 41.9559 121.299 41.5081 120.938 41.1875C116.167 36.7006 110.617 33.1212 104.563 30.625C97.6047 27.5675 90.0995 25.9516 82.5 25.875H82.8125ZM72.75 87.8125C72.7966 88.2263 72.9325 88.625 73.1483 88.9811C73.3641 89.3373 73.6547 89.6422 74 89.875C74.5536 90.5221 75.3391 90.9261 76.1875 91C76.577 91.0178 76.958 90.8833 77.25 90.625L81.8125 86.0625L86.1875 90.3125C86.3427 90.5161 86.5406 90.6832 86.7674 90.802C86.9942 90.9208 87.2443 90.9884 87.5 91C88.3688 90.889 89.1681 90.4672 89.75 89.8125C91 88.5 91.1875 87.375 90.1875 86.375L85.8125 82L90.4375 77.375C91.1875 76.625 90.9375 75.5625 89.625 74.3125C88.3125 73.0625 87.125 72.625 86.3125 73.4375L81.75 77.9375L77.25 73.3125C76.9711 73.1264 76.6473 73.0185 76.3125 73C75.476 73.1451 74.7208 73.5894 74.1875 74.25C72.75 75.625 72.4375 76.625 73.1875 77.375L77.8125 82L73.1875 86.5C72.7895 86.8345 72.5236 87.2998 72.4375 87.8125H72.75ZM122.313 116.375C121.643 115.719 120.859 115.189 120 114.812C119.696 114.72 119.373 114.711 119.064 114.788C118.756 114.865 118.474 115.025 118.25 115.25L117.813 115.687C113.303 120.174 107.978 123.759 102.125 126.25C93.0542 130.067 83.0533 131.101 73.3935 129.22C63.7337 127.339 54.8512 122.629 47.875 115.687C43.1871 111.268 39.4634 105.927 36.9375 100C35.5127 96.4267 34.445 92.7211 33.75 88.9375C33.75 87.625 32.1875 87.125 29.8125 87.5C27.4375 87.875 26.3125 88.75 26.5 90C27.1765 94.539 28.437 98.9716 30.25 103.187C33.173 109.962 37.4233 116.082 42.75 121.187C47.8909 126.501 54.0287 130.748 60.8125 133.687C67.8186 136.625 75.3407 138.133 82.9375 138.125C90.5319 138.109 98.0491 136.601 105.063 133.687C111.846 130.748 117.984 126.501 123.125 121.187L123.5 120.812C124.063 119.437 123.625 118.062 122 116.375H122.313Z"
                  fill="white"
                />
              </svg>

              <h1 className="text-2xl text-center font-semibold">Brand</h1>
            </div>
            <div className="w-32 flex-none flex flex-col items-center">
              <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M125.437 39.6875H93.75V48.5H125.562L125.437 39.6875ZM118.75 100.312C116.346 101.905 113.507 102.713 110.625 102.625C108.717 102.824 106.789 102.627 104.96 102.046C103.132 101.465 101.443 100.513 100 99.25C97.3313 96.2242 95.942 92.2803 96.125 88.25H137.5C137.798 84.0534 137.44 79.836 136.437 75.75C135.468 71.8626 133.771 68.1939 131.437 64.9375C129.088 61.7788 126.054 59.1932 122.562 57.375C118.678 55.4596 114.393 54.4956 110.062 54.5625C105.989 54.5327 101.952 55.319 98.1875 56.875C94.7406 58.3281 91.6175 60.4527 89 63.125C86.3899 65.8507 84.3689 69.0845 83.0625 72.625C81.6606 76.4472 80.9619 80.4915 81 84.5625C80.9357 88.6913 81.6131 92.7981 83 96.6875C84.178 100.21 86.048 103.461 88.5 106.25C91.0369 108.988 94.1549 111.124 97.625 112.5C101.494 113.974 105.61 114.696 109.75 114.625C115.559 114.806 121.294 113.285 126.25 110.25C131.256 106.693 134.86 101.497 136.437 95.5625H122.625C121.886 97.5258 120.525 99.1938 118.75 100.312ZM97.3125 74.5625C97.7989 73.0043 98.6064 71.5652 99.6828 70.338C100.759 69.1109 102.081 68.1228 103.562 67.4375C105.525 66.5543 107.661 66.1269 109.812 66.1875C111.366 66.0548 112.931 66.2598 114.398 66.7884C115.865 67.317 117.2 68.1567 118.312 69.25C120.436 71.8496 121.799 74.9862 122.25 78.3125H96.3125C96.4137 77.0424 96.644 75.7859 97 74.5625H97.3125ZM64.25 71.5625C67.431 70.2379 70.1951 68.0785 72.25 65.3125C74.1389 62.375 75.0773 58.9271 74.9375 55.4375C75.06 52.2552 74.4394 49.0882 73.125 46.1875C72.0207 43.6745 70.248 41.5126 68 39.9375C65.6166 38.2998 62.91 37.1916 60.0625 36.6875C56.6926 35.9807 53.2554 35.6454 49.8125 35.6875H12.5V114.313H50.625C54.1043 114.315 57.5697 113.874 60.9375 113C64.1297 112.174 67.1539 110.8 69.875 108.938C72.5109 107.111 74.6572 104.664 76.125 101.813C77.7494 98.6237 78.5447 95.0771 78.4375 91.5C78.5559 87.0671 77.3125 82.7045 74.875 79C72.2537 75.2745 68.3657 72.6307 63.9375 71.5625H64.25ZM29.8125 49.125H46C47.4872 49.1232 48.9717 49.2486 50.4375 49.5C51.7872 49.7 53.0833 50.1675 54.25 50.875C55.3772 51.5126 56.2905 52.4694 56.875 53.625C57.5989 55.0107 57.9438 56.5631 57.875 58.125C57.9914 59.4702 57.7857 60.8239 57.2749 62.0738C56.7641 63.3237 55.9628 64.4339 54.9375 65.3125C52.7007 66.8502 50.0243 67.618 47.3125 67.5H29.8125V49.125ZM60.0625 95.625C59.4204 96.8988 58.4493 97.9777 57.25 98.75C56.0019 99.5263 54.6267 100.076 53.1875 100.375C51.5879 100.733 49.9515 100.901 48.3125 100.875H29.5625V79.3125H48.3125C51.5301 79.1716 54.7076 80.0701 57.375 81.875C58.5801 82.9564 59.5136 84.3064 60.0999 85.8157C60.6862 87.325 60.909 88.9511 60.75 90.5625C60.919 92.2805 60.6835 94.0143 60.0625 95.625Z"
                  fill="white"
                />
              </svg>
              <h1 className="text-2xl text-center font-semibold">Brand</h1>
            </div>
          </div>
        </Marquee>
      </span>
      <section className="flex flex-col p-12 gap-4 bg-color-white">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl md:text-4xl">Kategori Tempat</h1>
          <Link
            href="/"
            className="text-color-fourty font-semibold underline flex gap-1 items-center"
          >
            View All
            <svg
              width="18"
              height="16"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4956 10.9961L-5.79623e-05 21.6262L16.2121 10.9392L0.168975 3.26328e-07L23.4956 10.9961Z"
                fill="#4CACBC"
              />
            </svg>
          </Link>
        </div>
        <div className="h-[65dvh] flex gap-4 overflow-x-scroll -mx-2 md:mx-0">
          <div className="w-[80vw] md:w-1/2 lg:w-1/3 rounded-3xl h-full bg-color-fourty overflow-hidden relative aspect-square flex-none group transition duration-700 ease-in-out">
            <p className="absolute font-semibold z-10 text-color-white text-4xl inset-0 grid place-content-center group-hover:-translate-x-72 transition duration-700 ease-in-out">
              Gunung
            </p>
            <p className="absolute -translate-x-24 group-hover:translate-x-4 top-3 font-semibold z-10 text-color-white text-xl transition duration-700 ease-in-out">
              Gunung
            </p>
            <Image
              src="/images/bromo.jpg"
              fill={true}
              alt="Bromo"
              className="group-hover:scale-110 transition duration-700 ease-in-out"
            />
          </div>
          <div className="w-[85vw] md:w-1/2 lg:w-1/3 rounded-3xl h-full bg-color-fourty relative overflow-hidden aspect-square flex-none group transition duration-700 ease-in-out">
            <p className="absolute font-semibold z-10 text-color-white text-4xl inset-0 grid place-content-center group-hover:-translate-x-96 transition duration-700 ease-in-out">
              Air Terjun
            </p>
            <p className="absolute -translate-x-24 group-hover:translate-x-4 top-3 font-semibold z-10 text-color-white text-xl transition duration-700 ease-in-out">
              Air Terjun
            </p>
            <Image
              src="/images/airterjun.png"
              fill={true}
              alt="Air Terjun"
              className="group-hover:scale-110 transition duration-700 ease-in-out"
            />
          </div>
          <div className="w-[85vw] md:w-1/2 lg:w-1/3 rounded-3xl h-full bg-color-fourty relative overflow-hidden aspect-square flex-none group transition duration-700 ease-in-out">
            <p className="absolute font-semibold z-10 text-color-white text-4xl inset-0 grid place-content-center group-hover:-translate-x-72 transition duration-700 ease-in-out">
              Pantai
            </p>
            <p className="absolute -translate-x-24 group-hover:translate-x-4 top-3 font-semibold z-10 text-color-white text-xl transition duration-700 ease-in-out">
              Pantai
            </p>
            <Image
              src="/images/pantai.jpg"
              fill={true}
              alt="Pantai"
              className="group-hover:scale-110 transition duration-700 ease-in-out"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F6E3C5] p-8 flex flex-col gap-8">
        <div className="flex flex-col gap-2 font-bold items-center">
          <h3 className="md:text-2xl">Testimonial Pelanggan</h3>
          <h1 className="md:text-4xl">Pendapat pelanggan tentang kami</h1>
        </div>
        <div className="flex flex-row gap-4 overflow-y-visible overflow-x-clip">
          <div className="w-3/5 md:w-1/5 bg-[#fff] flex flex-col gap-2 p-2 md:p-3 flex-none relative">
            <h1 className="absolute -top-2 right-4 text-6xl font-bold">"</h1>
            <div className="flex flex-row gap-2 w-full items-center">
              <div className="w-[30%] aspect-square rounded-full overflow-hidden relative">
                <Image
                  src="/images/ava.png"
                  fill
                  alt="Putri"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-[70%] flex flex-col">
                <h6 className="text-xl font-bold">Putri</h6>
                <h6 className="text-xl font-bold">Jakarta</h6>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
              </div>
              <p className="font-semibold text-xs">
                Nyari makanan mudah, udah ada tour guidenya. Tour guidenya ramah
                banget dan penginapannya nyaman.
              </p>
            </div>
          </div>
          <div className="w-3/5 md:w-1/5 bg-[#fff] flex flex-col gap-2 p-2 md:p-3 flex-none relative">
            <h1 className="absolute -top-2 right-4 text-6xl font-bold">"</h1>
            <div className="flex flex-row gap-2 w-full items-center">
              <div className="w-[30%] aspect-square rounded-full overflow-hidden relative">
                <Image
                  src="/images/ava.png"
                  fill
                  alt="Putri"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-[70%] flex flex-col">
                <h6 className="text-xl font-bold">Putri</h6>
                <h6 className="text-xl font-bold">Jakarta</h6>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
              </div>
              <p className="font-semibold text-xs">
                Nyari makanan mudah, udah ada tour guidenya. Tour guidenya ramah
                banget dan penginapannya nyaman.
              </p>
            </div>
          </div>
          <div className="w-3/5 md:w-1/5 bg-[#fff] flex flex-col gap-2 p-2 md:p-3 flex-none relative">
            <h1 className="absolute -top-2 right-4 text-6xl font-bold">"</h1>
            <div className="flex flex-row gap-2 w-full items-center">
              <div className="w-[30%] aspect-square rounded-full overflow-hidden relative">
                <Image
                  src="/images/ava.png"
                  fill
                  alt="Putri"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-[70%] flex flex-col">
                <h6 className="text-xl font-bold">Putri</h6>
                <h6 className="text-xl font-bold">Jakarta</h6>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
              </div>
              <p className="font-semibold text-xs">
                Nyari makanan mudah, udah ada tour guidenya. Tour guidenya ramah
                banget dan penginapannya nyaman.
              </p>
            </div>
          </div>
          <div className="w-3/5 md:w-1/5 bg-[#fff] flex flex-col gap-2 p-2 md:p-3 flex-none relative">
            <h1 className="absolute -top-2 right-4 text-6xl font-bold">"</h1>
            <div className="flex flex-row gap-2 w-full items-center">
              <div className="w-[30%] aspect-square rounded-full overflow-hidden relative">
                <Image
                  src="/images/ava.png"
                  fill
                  alt="Putri"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-[70%] flex flex-col">
                <h6 className="text-xl font-bold">Putri</h6>
                <h6 className="text-xl font-bold">Jakarta</h6>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
              </div>
              <p className="font-semibold text-xs">
                Nyari makanan mudah, udah ada tour guidenya. Tour guidenya ramah
                banget dan penginapannya nyaman.
              </p>
            </div>
          </div>
          <div className="w-3/5 md:w-1/5 bg-[#fff] flex flex-col gap-2 p-2 md:p-3 flex-none relative">
            <h1 className="absolute -top-2 right-4 text-6xl font-bold">"</h1>
            <div className="flex flex-row gap-2 w-full items-center">
              <div className="w-[30%] aspect-square rounded-full overflow-hidden relative">
                <Image
                  src="/images/ava.png"
                  fill
                  alt="Putri"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-[70%] flex flex-col">
                <h6 className="text-xl font-bold">Putri</h6>
                <h6 className="text-xl font-bold">Jakarta</h6>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
                <Star className="w-6" />
              </div>
              <p className="font-semibold text-xs">
                Nyari makanan mudah, udah ada tour guidenya. Tour guidenya ramah
                banget dan penginapannya nyaman.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
