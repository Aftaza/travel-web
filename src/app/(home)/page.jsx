"use client";
import Link from "next/link";
import Image from "next/image";
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
    <main className="flex flex-col w-[100vw]">
      <section className="h-[100vh] md:h-[120dvh] w-full pt-[100px] px-8 md:px-12 relative">
        <Image
          src="/images/bgHome.png"
          fill
          alt="Background"
          quality={100}
          style={{ objectFit: "cover" }}
        />
        <div className="flex flex-col gap-2 h-1/2 md:w-1/2 drop-shadow-md md:text-left text-center">
          <h2 className="text-color-white text-lg md:text-2xl font-semibold">
            TUJUAN TERBAIK DI SELURUH DUNIA
          </h2>
          <h1 className="text-[#ffffff] text-4xl md:text-[48px] font-bold leading-tight md:leading-normal">
            Bepergian ke sudut mana pun di dunia.
          </h1>
          <h2 className="text-[#ffffff] text-lg md:text-2xl font-semibold">
            Bepergian ke sudut mana pun di dunia.
          </h2>
          <button className="bg-[#4CACBC] rounded-3xl text-xl text-[#ffffff] font-semibold flex flex-row justify-center items-center gap-2 p-2 w-1/3 self-center">
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
        </div>
        <div className="h-fit flex justify-center">
          <div className="bg-color-white rounded-2xl p-3 h-fit flex justify-center gap-3 md:w-1/3 drop-shadow-xl">
            <div className="flex flex-col w-full">
              <label for="destination" className="font-bold">
                Destination
              </label>
              <input
                type="text"
                placeholder="Mau liburan kemana"
                className="text-[#000000] font-semibold"
              />
            </div>
            <button className="p-2 rounded-full bg-color-fourty w-12 h-12">
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
      <section className="min-h-dvh px-8 md:px-12 py-8 flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl md:text-4xl">Promo Liburan</h1>
            <Link
              href=""
              className="text-color-fourty underline font-bold flex gap-1 items-center"
            >
              View all
              <svg
                width="14"
                height="12"
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
          <div className="inset-0 relative">
            <button
              className="absolute left-0 h-8 w-8 md:h-12 md:w-12 rounded-full bg-color-fourty z-20 top-1/2 -translate-y-1/2 drop-shadow-lg grid place-content-center"
              onClick={scrollToBack}
            >
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  d="M23.7556 11.5793L2.24983e-05 21.6151L16.4759 11.3392L0.712966 -5.58225e-05L23.7556 11.5793Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              className="absolute right-0 md:h-12 md:w-12 h-8 w-8 rounded-full bg-color-fourty z-20 top-1/2 -translate-y-1/2 drop-shadow-lg grid place-content-center"
              onClick={scrollToNext}
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
            <div
              ref={containerRef}
              className="w-full flex gap-8 overflow-x-auto overflow-visible scroll-snap-type-mandatory drop-shadow-lg relative"
            >
              <div className="bg-color-fourty rounded-2xl flex flex-row w-[95%] md:w-2/5 flex-none scroll-snap-start">
                <div className="w-2/3 md:w-[45%] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/bromo.jpg"
                    fill={true}
                    alt="Bromo"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="rounded-2xl text-left text-color-white p-3 flex flex-col gap-1 text-sm md:text-md">
                  <h1 className="font-semibold">Gunung Bromo, Jawa Timur 1</h1>
                  <h2 className="font-light">Indonesia</h2>
                  <span className="flex gap-2 font-semibold">
                    <h3 className="line-through">Rp 1.200.000</h3>
                    <h3 className="text-[#FF6341]">15%</h3>
                  </span>
                  <h3 className="font-semibold">Rp 800.000</h3>
                  <p className="text-sm text-[#f9f9f9]">
                    Untuk 1 orang tiket pesawat, makan siang, makan....
                  </p>
                  <p className="text-sm my-2 md:my-4">Berangkat: 15-03-2024</p>
                  <div className="flex flex-row gap-3">
                    <button className="bg-transparent outline-color-white outline outline-1 rounded-2xl p-1 md:p-2 w-1/2">
                      Lihat detail
                    </button>
                    <Link
                      className="bg-color-primary rounded-2xl p-2 text-color-black w-1/2 flex justify-center"
                      href="/booking/isiform"
                    >
                      Pesan
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-color-fourty rounded-2xl flex flex-row w-[95%] md:w-2/5 flex-none scroll-snap-start">
                <div className="w-2/3 md:w-[45%] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/bromo.jpg"
                    fill={true}
                    alt="Bromo"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="rounded-2xl text-left text-color-white p-3 flex flex-col gap-1 text-sm md:text-md">
                  <h1 className="font-semibold">Gunung Bromo, Jawa Timur 2</h1>
                  <h2 className="font-light">Indonesia</h2>
                  <span className="flex gap-2 font-semibold">
                    <h3 className="line-through">Rp 1.200.000</h3>
                    <h3 className="text-[#FF6341]">15%</h3>
                  </span>
                  <h3 className="font-semibold">Rp 800.000</h3>
                  <p className="text-sm text-[#f9f9f9]">
                    Untuk 1 orang tiket pesawat, makan siang, makan....
                  </p>
                  <p className="text-sm my-2 md:my-4">Berangkat: 15-03-2024</p>
                  <div className="flex flex-row gap-3">
                    <button className="bg-transparent outline-color-white outline outline-1 rounded-2xl p-1 md:p-2 w-1/2">
                      Lihat detail
                    </button>
                    <button className="bg-color-primary rounded-2xl p-2 text-color-black w-1/2">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-color-fourty rounded-2xl flex flex-row w-[95%] md:w-2/5 flex-none scroll-snap-start">
                <div className="w-2/3 md:w-[45%] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/bromo.jpg"
                    fill={true}
                    alt="Bromo"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="rounded-2xl text-left text-color-white p-3 flex flex-col gap-1 text-sm md:text-md">
                  <h1 className="font-semibold">Gunung Bromo, Jawa Timur 3</h1>
                  <h2 className="font-light">Indonesia</h2>
                  <span className="flex gap-2 font-semibold">
                    <h3 className="line-through">Rp 1.200.000</h3>
                    <h3 className="text-[#FF6341]">15%</h3>
                  </span>
                  <h3 className="font-semibold">Rp 800.000</h3>
                  <p className="text-sm text-[#f9f9f9]">
                    Untuk 1 orang tiket pesawat, makan siang, makan....
                  </p>
                  <p className="text-sm my-2 md:my-4">Berangkat: 15-03-2024</p>
                  <div className="flex flex-row gap-3">
                    <button className="bg-transparent outline-color-white outline outline-1 rounded-2xl p-1 md:p-2 w-1/2">
                      Lihat detail
                    </button>
                    <button className="bg-color-primary rounded-2xl p-2 text-color-black w-1/2">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl md:text-4xl">Terpopuler</h1>
            <Link
              href=""
              className="text-color-fourty underline font-bold flex gap-1 items-center"
            >
              View all
              <svg
                width="14"
                height="12"
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
          <div className="flex gap-8 w-full overflow-x-scroll">
            <div className="bg-color-fourty rounded-2xl flex flex-col md:w-1/3 w-full flex-none">
              <div className="h-[212px] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/candipenataran.png"
                  fill={true}
                  alt="Candi Penataran"
                />
              </div>
              <div className="rounded-2xl text-[#ffffff] p-3 flex flex-col gap-1">
                <div className="flex flex-row gap-2 items-center font-semibold">
                  <svg
                    width="30"
                    height="28"
                    viewBox="0 0 31 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z"
                      fill="#FFCD6B"
                    />
                  </svg>
                  <h3>4.9</h3>
                  <h3>(90 reviews)</h3>
                </div>
                <h1 className="font-semibold text-color-black">
                  Gunung Bromo, Jawa Timur
                </h1>
                <h2 className="font-light">Indonesia</h2>
                <h3 className="font-semibold text-[#000000]">Rp 800.000</h3>
                <p className="text-sm text-[#f9f9f9] w-3/4">
                  Untuk 1 orang tiket pesawat, makan siang, makan....
                </p>
                <div className="flex flex-row gap-3 py-2">
                  <button className="bg-transparent outline-[#ffffff] outline outline-1 rounded-2xl p-2 w-1/2">
                    Lihat detail
                  </button>
                  <button className="bg-color-primary rounded-2xl p-2 text-color-black w-1/2">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-color-fourty rounded-2xl flex flex-col md:w-1/3 w-full flex-none">
              <div className="h-[212px] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/candipenataran.png"
                  fill={true}
                  alt="Candi Penataran"
                />
              </div>
              <div className="rounded-2xl text-[#ffffff] p-3 flex flex-col gap-1">
                <div className="flex flex-row gap-2 items-center font-semibold">
                  <svg
                    width="30"
                    height="28"
                    viewBox="0 0 31 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z"
                      fill="#FFCD6B"
                    />
                  </svg>
                  <h3>4.9</h3>
                  <h3>(90 reviews)</h3>
                </div>
                <h1 className="font-semibold text-[#000000]">
                  Gunung Bromo, Jawa Timur
                </h1>
                <h2 className="font-light">Indonesia</h2>
                <h3 className="font-semibold text-[#000000]">Rp 800.000</h3>
                <p className="text-sm text-[#f9f9f9] w-3/4">
                  Untuk 1 orang tiket pesawat, makan siang, makan....
                </p>
                <div className="flex flex-row gap-3 py-2">
                  <button className="bg-transparent outline-[#ffffff] outline outline-1 rounded-2xl p-2 w-1/2">
                    Lihat detail
                  </button>
                  <button className="bg-color-primary rounded-2xl p-2 text-color-black w-1/2">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-color-fourty rounded-2xl flex flex-col md:w-1/3 w-full flex-none">
              <div className="h-[212px] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/candipenataran.png"
                  fill={true}
                  alt="Candi Penataran"
                />
              </div>
              <div className="rounded-2xl text-[#ffffff] p-3 flex flex-col gap-1">
                <div className="flex flex-row gap-2 items-center font-semibold">
                  <svg
                    width="30"
                    height="28"
                    viewBox="0 0 31 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z"
                      fill="#FFCD6B"
                    />
                  </svg>
                  <h3>4.9</h3>
                  <h3>(90 reviews)</h3>
                </div>
                <h1 className="font-semibold text-[#000000]">
                  Gunung Bromo, Jawa Timur
                </h1>
                <h2 className="font-light">Indonesia</h2>
                <h3 className="font-semibold text-[#000000]">Rp 800.000</h3>
                <p className="text-sm text-[#f9f9f9] w-3/4">
                  Untuk 1 orang tiket pesawat, makan siang, makan....
                </p>
                <div className="flex flex-row gap-3 py-2">
                  <button className="bg-transparent outline-[#ffffff] outline outline-1 rounded-2xl p-2 w-1/2">
                    Lihat detail
                  </button>
                  <button className="bg-color-primary rounded-2xl p-2 text-color-black w-1/2">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-color-thirdy flex flex-col gap-4 py-8 px-8 md:px-12">
        <h1 className="text-color-white font-bold text-2xl md:text-4xl text-center">
          Partner Tour and Travel
        </h1>
        <div className="flex flex-row justify-between">
          <div className="aspect-square bg-[#ffffff] w-32"></div>
          <div className="aspect-square bg-[#ffffff] w-32"></div>
          <div className="aspect-square bg-[#ffffff] w-32"></div>
          <div className="aspect-square bg-[#ffffff] w-32"></div>
          <div className="aspect-square bg-[#ffffff] w-32"></div>
        </div>
      </div>
      <section className="min-h-dvh px-8 md:px-12 pt-8 flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl md:text-4xl w-1/2">
              Kategori Tempat
            </h1>
            <Link
              href=""
              className="text-color-fourty underline font-bold flex gap-1 items-center"
            >
              View all
              <svg
                width="14"
                height="12"
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
          <div className="h-[65dvh] flex justify-between gap-2 w-full overflow-x-scroll">
            <div className="md:w-[30%] rounded-3xl h-full bg-color-fourty overflow-hidden relative aspect-square flex-none">
              <p className="p-1 rounded-2xl absolute left-3 top-3 bg-[#F6E3C5] font-semibold z-10">
                Gunung
              </p>
              <Image src="/images/bromo.jpg" fill={true} alt="Bromo" />
            </div>
            <div className="md:w-[30%] rounded-3xl h-full bg-color-fourty relative overflow-hidden aspect-square flex-none">
              <p className="p-1 rounded-2xl absolute left-3 top-3 bg-[#F6E3C5] font-semibold z-10">
                Air Terjun
              </p>
              <Image src="/images/airterjun.png" fill={true} alt="Air Terjun" />
            </div>
            <div className="md:w-[30%] rounded-3xl h-full bg-color-fourty relative overflow-hidden aspect-square flex-none">
              <p className="p-1 rounded-2xl absolute left-3 top-3 bg-[#F6E3C5] font-semibold z-10">
                Pantai
              </p>
              <Image src="/images/pantai.jpg" fill={true} alt="Pantai" />
            </div>
          </div>
        </div>
        
      </section>
      <div className="bg-[#F6E3C5] p-8 flex flex-col gap-8">
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
                <div className="flex gap-5">
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                </div>
                <p className="font-semibold text-xs">
                  Nyari makanan mudah, udah ada tour guidenya. Tour guidenya
                  ramah banget dan penginapannya nyaman.
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
                <div className="flex gap-5">
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                </div>
                <p className="font-semibold text-xs">
                  Nyari makanan mudah, udah ada tour guidenya. Tour guidenya
                  ramah banget dan penginapannya nyaman.
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
                <div className="flex gap-5">
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                </div>
                <p className="font-semibold text-xs">
                  Nyari makanan mudah, udah ada tour guidenya. Tour guidenya
                  ramah banget dan penginapannya nyaman.
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
                <div className="flex gap-5">
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                </div>
                <p className="font-semibold text-xs">
                  Nyari makanan mudah, udah ada tour guidenya. Tour guidenya
                  ramah banget dan penginapannya nyaman.
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
                <div className="flex gap-5">
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                  <span className="aspect-square w-4 bg-color-secondary"></span>
                </div>
                <p className="font-semibold text-xs">
                  Nyari makanan mudah, udah ada tour guidenya. Tour guidenya
                  ramah banget dan penginapannya nyaman.
                </p>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
