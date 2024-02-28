import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="h-[100vh] relative pt-16 px-12 flex flex-col drop-shadow-lg">
        <video
          autoPlay
          loop
          muted
          className="inset-0 absolute object-cover h-full -z-10"
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
          <button className="py-2 px-4 rounded-2xl bg-color-fourty text-color-white w-1/2 font-bold self-center md:self-start">
            Explore
          </button>
          <div className="bg-color-white rounded-2xl p-3 h-fit items-center flex md:hidden justify-center gap-3 md:w-1/3 drop-shadow-md">
            <div className="flex flex-col w-full">
              <label for="destination" className="font-bold text-color-black text-start">
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
      <section className="flex flex-col gap-8 px-10 md:px-12 py-12">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl md:text-4xl">Promo Liburan</h1>
            <Link href="/" className="text-color-fourty font-semibold">
              View All
            </Link>
          </div>
          <div className="flex gap-4 overflow-scroll">
            <div className="flex flex-none md:w-2/5 bg-color-fourty rounded-3xl h-fit overflow-hidden text-color-white drop-shadow-lg">
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
                  <h1 className="text-lg md:text-xl font-semibold">
                    Gunung Bromo, Jawa Timur
                  </h1>
                  <p className="font-light md:text-base text-sm">Indonesia</p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm md:text-base font-semibold flex gap-2">
                    Rp. 1.200.000 <mark className="bg-color-fourty">15%</mark>
                  </h2>
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
            <div className="flex flex-none md:w-2/5 bg-color-fourty rounded-3xl h-fit overflow-hidden text-color-white drop-shadow-lg">
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
                  <h1 className="text-lg md:text-xl font-semibold">
                    Gunung Bromo, Jawa Timur
                  </h1>
                  <p className="font-light md:text-base text-sm">Indonesia</p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm md:text-base font-semibold flex gap-2">
                    Rp. 1.200.000 <mark className="bg-color-fourty">15%</mark>
                  </h2>
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
            <div className="flex flex-none md:w-2/5 bg-color-fourty rounded-3xl h-fit overflow-hidden text-color-white drop-shadow-lg">
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
                  <h1 className="text-lg md:text-xl font-semibold">
                    Gunung Bromo, Jawa Timur
                  </h1>
                  <p className="font-light md:text-base text-sm">Indonesia</p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm md:text-base font-semibold flex gap-2">
                    Rp. 1.200.000 <mark className="bg-color-fourty">15%</mark>
                  </h2>
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
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl md:text-4xl">Terpopuler</h1>
            <Link href="/" className="text-color-fourty font-semibold">
              View All
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-scroll">
            <div className="rounded-2xl relative flex flex-col justify-end overflow-hidden h-96 flex-none">
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
            <div className="rounded-2xl relative flex flex-col justify-end overflow-hidden h-96 flex-none">
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
            <div className="rounded-2xl flex flex-col overflow-hidden h-96 bg-color-fourty flex-none">
              <div className="h-1/2 relative">
                <Image
                  src="/images/candipenataran.png"
                  fill
                  alt="Candi"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col gap-2 text-color-white p-2 h-1/2 justify-evenly">
                <div className="flex flex-col">
                  <span className="flex gap-1 font-semibold">
                    <h1>Candi Penataran, Blitar</h1>
                    <h3>4.9</h3>
                  </span>
                </div>
                <p className="font-light text-sm">
                  Untuk 1 orang tiket pesawat, makan siang, makan....
                </p>
                <h1 className="font-semibold">Rp 900.000</h1>
                <div className="flex gap-2 justify-between">
                  <button className="p-2 rounded-3xl outline outline-1 outline-color-white w-1/2 flex justify-center items-center">
                    Lihat detail
                  </button>
                  <button className="p-2 rounded-3xl bg-color-primary text-color-black w-1/2 flex justify-center items-center">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl relative flex flex-col justify-end overflow-hidden h-96 flex-none">
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
      <span className="flex flex-col gap-8 py-4 px-12 text-color-white bg-color-secondary">
        <h1 className="font-semibold text-2xl leading-none">
          Partner Tour and Travel
        </h1>
        <div className="flex justify-between gap-4 overflow-scroll">
          <div className="w-32 aspect-square flex-none bg-color-white"></div>
          <div className="w-32 aspect-square flex-none bg-color-white"></div>
          <div className="w-32 aspect-square flex-none bg-color-white"></div>
          <div className="w-32 aspect-square flex-none bg-color-white"></div>
          <div className="w-32 aspect-square flex-none bg-color-white"></div>
        </div>
      </span>
      <section className="flex flex-col p-12 gap-8">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl md:text-4xl">Kategori Tempat</h1>
          <Link href="/" className="text-color-fourty font-semibold">
            View All
          </Link>
        </div>
        <div className="h-[65dvh] flex gap-4 overflow-x-scroll">
          <div className="w-[85vw] md:w-1/2 lg:w-1/3 rounded-3xl h-full bg-color-fourty overflow-hidden relative aspect-square flex-none group transition duration-700 ease-in-out">
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
              <div className="flex gap-5">
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
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
              <div className="flex gap-5">
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
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
              <div className="flex gap-5">
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
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
              <div className="flex gap-5">
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
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
              <div className="flex gap-5">
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
                <span className="aspect-square w-4 bg-color-secondary"></span>
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
