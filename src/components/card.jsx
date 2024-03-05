import Image from "next/image";
import React from "react";
import { Star } from "./Star";
import Link from "next/link";
import { Iconvr } from "./iconvr";

export const CardTravel = () => {
  return (
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
  );
};

export const TiktokCard = ({ className }) => {
  return (
    <>
      <blockquote
        class="tiktok-embed"
        cite="https://www.tiktok.com/@firasaff802/video/7313029291170598149"
        data-video-id="7313029291170598149"
        style={{ minWidth: "450", minHeight: "550" }}
        className={className}
      >
        <section className="p-10">
          <a
            target="_blank"
            title="@firasaff802"
            href="https://www.tiktok.com/@firasaff802?refer=embed"
          >
            @firasaff802
          </a>
          Bromo makin cantik tapi gaboleh di naikin🥹😍
          <a
            title="bromotenggersemeru"
            target="_blank"
            href="https://www.tiktok.com/tag/bromotenggersemeru?refer=embed"
          >
            #bromotenggersemeru
          </a>
          <a
            title="capcut"
            target="_blank"
            href="https://www.tiktok.com/tag/capcut?refer=embed"
          >
            #CapCut
          </a>
          <a
            title="foryoupage"
            target="_blank"
            href="https://www.tiktok.com/tag/foryoupage?refer=embed"
          >
            #foryoupage
          </a>
          <a
            target="_blank"
            title="♬ suara asli  - Firasaff802"
            href="https://www.tiktok.com/music/suara-asli-Firasaff802-7313029360918153990?refer=embed"
          >
            ♬ suara asli - Firasaff802
          </a>
        </section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </>
  );
};

export const MapCard = () => {
  return (
    <>
      <iframe
        className="border-none w-full h-[450px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31612.36339577289!2d112.93241250237112!3d-7.942450438855476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sMt%20Bromo!5e0!3m2!1sen!2sid!4v1709450098010!5m2!1sen!2sid"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export const KategoriGunung = () => {
  return (
    <div className="w-[80vw] md:w-1/2 lg:w-1/3 rounded-3xl h-full bg-color-fourty overflow-hidden relative aspect-square flex-none group transition duration-700 ease-in-out">
      <p className="absolute font-semibold z-10 text-color-white text-4xl inset-0 grid place-content-center group-hover:-translate-x-96 transition duration-700 ease-in-out">
        Gunung
      </p>
      <p className="absolute -translate-x-24 group-hover:translate-x-4 top-3 font-semibold z-10 text-color-white text-xl transition duration-700 ease-in-out">
        Gunung
      </p>
      <p className="absolute place-self-center text-lg text-color-white font-semibold z-10 inset-0 text-center transition duration-700 -translate-x-[600px] group-hover:translate-x-0 ease-in-out px-2">
        Jawa Timur adalah surga bagi para penggemar alam dengan gunung-gunung
        menarik seperti Bromo dengan padang pasirnya yang luas, Semeru yang
        menantang, Ijen dengan blue flame-nya yang spektakuler, dan
        Arjuno-Welirang dengan pemandangan alam yang menawan. Semua ini
        menjadikan Jawa Timur destinasi impian bagi para pendaki!
      </p>
      <Image
        src="/images/bromo.jpg"
        fill={true}
        alt="Overview"
        className="group-hover:scale-110 group-hover:blur-sm transition duration-700 ease-in-out"
      />
    </div>
  );
};

export const KategoriAirTerjun = () => {
  return (
    <div className="w-[80vw] md:w-1/2 lg:w-1/3 rounded-3xl h-full bg-color-fourty overflow-hidden relative aspect-square flex-none group transition duration-700 ease-in-out">
      <p className="absolute font-semibold z-10 text-color-white text-4xl inset-0 grid place-content-center group-hover:-translate-x-96 transition duration-700 ease-in-out">
        Air Terjun
      </p>
      <p className="absolute -translate-x-24 group-hover:translate-x-4 top-3 font-semibold z-10 text-color-white text-xl transition duration-700 ease-in-out">
        Air Terjun
      </p>
      <p className="absolute place-self-center text-lg text-color-white font-semibold z-10 inset-0 text-center transition duration-700 -translate-x-[600px] group-hover:translate-x-0 ease-in-out px-2">
        Jawa Timur juga dikenal dengan keindahan air terjunnya yang menakjubkan.
        Mulai dari Air Terjun Madakaripura yang megah dengan ketinggian yang
        mengagumkan dan legenda yang mengelilinginya, hingga Air Terjun Tumpak
        Sewu yang memukau dengan aliran airnya yang lembut dan panorama alam
        sekitarnya yang memesona. Ada juga Air Terjun Coban Rondo yang cantik
        dengan suasana sejuk dan rimbunnya pepohonan di sekitarnya."
      </p>
      <Image
        src="/images/airterjun.png"
        fill={true}
        alt="Overview"
        className="group-hover:scale-110 group-hover:blur-sm transition duration-700 ease-in-out"
      />
    </div>
  );
};

export const KategoriPantai = () => {
  return (
    <div className="w-[80vw] md:w-1/2 lg:w-1/3 rounded-3xl h-full bg-color-fourty overflow-hidden relative aspect-square flex-none group transition duration-700 ease-in-out">
      <p className="absolute font-semibold z-10 text-color-white text-4xl inset-0 grid place-content-center group-hover:-translate-x-96 transition duration-700 ease-in-out">
        Pantai
      </p>
      <p className="absolute -translate-x-24 group-hover:translate-x-4 top-3 font-semibold z-10 text-color-white text-xl transition duration-700 ease-in-out">
        Pantai
      </p>
      <p className="absolute place-self-center text-lg text-color-white font-semibold z-10 inset-0 text-center transition duration-700 -translate-x-[600px] group-hover:translate-x-0 ease-in-out px-2">
        Jawa Timur memiliki pantai-pantai menakjubkan seperti Pantai Malang
        Selatan dengan pasir putih halusnya, Pantai Papuma dengan tebing karang
        spektakuler, Pantai Banyuwangi yang berpasir emas, dan Pantai Pasir
        Putih Situbondo yang luas. Surga bagi penggemar pantai!
      </p>
      <Image
        src="/images/pantai.jpg"
        fill={true}
        alt="Overview"
        className="group-hover:scale-110 group-hover:blur-sm transition duration-700 ease-in-out"
      />
    </div>
  );
};

export const PromoLiburanBromo = () => {
  return (
    <div className="flex flex-none w-[80vw] md:w-2/5 bg-color-fourty rounded-3xl h-fit overflow-hidden text-color-white drop-shadow-lg">
      <div className="w-[40%] relative flex-none">
        <Image
          src="/images/bromo.jpg"
          fill={true}
          alt="Bromo"
          className="object-cover"
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
          <h1 className="text-base md:text-lg font-semibold">Rp. 800.000</h1>
        </div>
        <p className="ftext-xs md:text-sm font-light">
          Untuk 1 orang tiket pesawat, makan siang, makan....
        </p>
        <p className="font-semibold md:text-base text-sm">
          Berangkat: 15-04-2023
        </p>
        <div className="flex gap-2 justify-between">
          <button className="md:text-base text-sm p-2 rounded-3xl outline outline-1 outline-color-white w-1/2 flex justify-center items-center">
            Lihat detail
          </button>
          <Link
            href="/booking"
            className="md:text-base text-sm p-2 rounded-3xl bg-color-primary text-color-black w-1/2 flex justify-center items-center"
          >
            Pesan
          </Link>
        </div>
      </div>
    </div>
  );
};

export const JelajahBromo = () => {
  return (
    <button
      onClick={() => open("details/explore/bromo")}
      className="w-[80vw] md:w-1/2 lg:w-1/3 rounded-3xl h-full bg-color-fourty overflow-hidden relative aspect-square flex-none group transition duration-700 ease-in-out"
    >
      <p className="absolute font-semibold z-10 text-color-white text-4xl inset-0 grid place-content-center group-hover:-translate-x-96 transition duration-700 ease-in-out">
        Bromo
      </p>
      <Iconvr className="w-12 absolute -translate-x-24 group-hover:translate-x-4 top-3 font-semibold z-10 text-color-white text-xl transition duration-700 ease-in-out" />
      <p className="absolute place-self-center text-lg text-color-white font-semibold z-10 inset-0 text-center transition duration-700 -translate-x-[600px] group-hover:translate-x-0 ease-in-out px-2">
        Yuk jelajahi Wisata Gunung Bromo lewat sensasi Virtual Tour!
      </p>
      <Image
        src="/images/bromo.jpg"
        fill={true}
        alt="Bromo"
        className="group-hover:scale-110 group-hover:blur-sm transition duration-700 ease-in-out"
      />
    </button>
  );
};

export const JelajahPenataran = () => {
  return (
    <button
      onClick={() => open("details/explore/candipenataran")}
      className="w-[85vw] md:w-1/2 lg:w-1/3 rounded-3xl h-full bg-color-fourty relative overflow-hidden aspect-square flex-none group transition duration-700 ease-in-out"
    >
      <p className="absolute font-semibold z-10 text-color-white text-4xl inset-0 grid place-content-center group-hover:-translate-x-96 transition duration-700 ease-in-out">
        Candi Penataran
      </p>
      <Iconvr className="w-12 absolute -translate-x-24 group-hover:translate-x-4 top-3 font-semibold z-10 text-color-white text-xl transition duration-700 ease-in-out" />
      <p className="absolute place-self-center text-lg text-color-white font-semibold z-10 inset-0 text-center transition duration-700 -translate-x-[600px] group-hover:translate-x-0 ease-in-out px-2">
        Yuk jelajahi Wisata Candi Penataran lewat sensasi Virtual Tour!
      </p>
      <Image
        src="/images/candipenataran.png"
        quality={100}
        fill={true}
        alt="Candi Penataran"
        className="group-hover:scale-110 group-hover:blur-sm transition duration-700 ease-in-out object-cover"
      />
    </button>
  );
};

export const JelajahTrowulan = () => {
  return (
    <button
      onClick={() => open("details/explore/trowulan")}
      className="w-[85vw] md:w-1/2 lg:w-1/3 rounded-3xl h-full bg-color-fourty relative overflow-hidden aspect-square flex-none group transition duration-700 ease-in-out"
    >
      <p className="absolute font-semibold z-10 text-color-white text-4xl inset-0 grid place-content-center group-hover:-translate-x-96 transition duration-700 ease-in-out">
        Trowulan
      </p>
      <Iconvr className="w-12 absolute -translate-x-24 group-hover:translate-x-4 top-3 font-semibold z-10 text-color-white text-xl transition duration-700 ease-in-out" />
      <p className="absolute place-self-center text-lg text-color-white font-semibold z-10 inset-0 text-center transition duration-700 -translate-x-[600px] group-hover:translate-x-0 ease-in-out px-2">
        Yuk kunjungi situs Trowulan lewat sensasi Virtual Tour!
      </p>
      <Image
        src="/images/trowulan.jpg"
        fill={true}
        alt="Situs Trowulan"
        quality={100}
        className="group-hover:scale-110 group-hover:blur-sm transition duration-700 ease-in-out object-cover"
      />
    </button>
  );
};

export const TerpopulerPenataran = () => {
  return (
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
  );
};

export const TestiCard = () => {
  return (
    <div className="w-3/5 md:w-1/5 bg-[#fff] flex flex-col gap-2 p-2 md:p-3 flex-none relative">
      <h1 className="absolute -top-2 right-4 text-6xl font-bold">"</h1>
      <div className="flex flex-row gap-2 w-full items-center">
        <div className="w-[30%] aspect-square rounded-full overflow-hidden relative">
          <Image
            src="/images/ava.png"
            fill
            alt="Putri"
            className="object-cover"
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
  );
};
