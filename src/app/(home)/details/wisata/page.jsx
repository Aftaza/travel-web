'use client'
import { CardTravel, MapCard, TiktokCard } from "@/components/card";
import Image from "next/image";
import React from "react";

const DetailWisata = () => {
  return (
    <main className="flex flex-col gap-16 mb-10">
      <button onClick={() => open('/details/explore')} className="w-16 h-16 bg-color-fourty rounded-full fixed right-8 bottom-8 z-20 drop-shadow-lg animate-bounce hover:animate-none grid place-content-center">
        <svg
          width="53"
          height="38"
          viewBox="0 0 53 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.41699 15.8334C4.41699 14.9936 4.88232 14.1881 5.7106 13.5942C6.53889 13.0004 7.66229 12.6667 8.83366 12.6667H44.167C45.3384 12.6667 46.4618 13.0004 47.2901 13.5942C48.1183 14.1881 48.5837 14.9936 48.5837 15.8334V26.9167C48.5837 27.7566 48.1183 28.5621 47.2901 29.1559C46.4618 29.7498 45.3384 30.0834 44.167 30.0834H35.6252C34.8625 30.0834 34.1128 29.9418 33.4491 29.6724C32.7854 29.403 32.2303 29.0149 31.8379 28.546L28.3929 24.4293C28.1965 24.1952 27.9191 24.0015 27.5875 23.8671C27.2558 23.7326 26.8813 23.6619 26.5003 23.6619C26.1193 23.6619 25.7448 23.7326 25.4132 23.8671C25.0816 24.0015 24.8041 24.1952 24.6078 24.4293L21.1628 28.546C20.7704 29.0149 20.2153 29.403 19.5516 29.6724C18.8879 29.9418 18.1382 30.0834 17.3755 30.0834H8.83366C7.66229 30.0834 6.53889 29.7498 5.7106 29.1559C4.88232 28.5621 4.41699 27.7566 4.41699 26.9167V15.8334ZM8.4207 10.7367C9.22716 9.86946 10.3197 9.15836 11.6013 8.66645C12.8829 8.17454 14.3141 7.91703 15.7678 7.91675H37.2284C38.6825 7.91677 40.1141 8.17416 41.3962 8.66608C42.6782 9.158 43.7711 9.86924 44.5778 10.7367L46.3753 12.6667H6.62533L8.4207 10.7367Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <section className="relatve flex flex-col h-[100vh] pt-16 drop-shadow-lg">
        <video
          autoPlay
          loop
          muted
          className="absolute object-cover inset-0 h-full w-full -z-10 brightness-50"
        >
          <source
            src="https://serve.aftaza.my.id/public/videos/bromoBg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="flex flex-col gap-1 justify-center items-center h-full w-full text-2xl text-color-white">
          <h2 className="font-bold">Gunung Bromo, Jawa Timur</h2>
          <h3 className="font-semibold">Indonesia</h3>
        </div>
      </section>
      <section className="flex flex-col p-5 w-full justify-center gap-14">
        <div className="flex items-center px-40 font-rakkas">
          <h2 className="text-xl font-semibold text-center">
            Gunung Bromo merupakan salah satu gunung dari lima gunung yang
            terdapat di komplek Pegunungan Tengger di laut pasir. Daya tarik
            gunung ini adalah merupakan gunung yang masih aktif dan dapat dengan
            mudah didaki/dikunjungi.
          </h2>
        </div>
        <div className="flex justify-between items-center gap-5 px-32">
          <Image
            src="https://serve.aftaza.my.id/public/images/jip1.png"
            alt="jip bromo image"
            width={400}
            height={400}
            className="w-1/2 rounded-lg"
          />
          <div className="flex flex-col items-center w-1/2 gap-3">
            <h1 className="font-semibold text-xl text-color-fourty">
              Mencoba Sensai Berpetualang Naik Mobil jip
            </h1>
            <p className="text-justify">
              Di kawasan Bromo Tengger Semeru menyediakan layanan berkendara
              mobil jip ke bagian-bagian kawasan seperti: Bukit Cinta,
              Widodaren, Kawah Bromo, Pasir Berbisik, dan Sabana. Dengan mobil
              jip yang mampu melintasi berbagai jalur terjal, Sobat Pesona bisa
              merasakan langsung berkendara sambil menikmati pemandangan alam
              yang luas dan menakjubkan. Sobat Pesona tidak perlu khawatir
              apabila tidak bisa mengendarai jip, karena akan ada operator yang
              siap menyupiri dan memandu jalur yang aman dilewati. Kisaran harga
              sewa mobil jip mulai dari Rp 600.000,- hingga Rp 1.250.000,- namun
              harga ini bisa berubah sewaktu-waktu.
            </p>
          </div>
        </div>
        <div className="px-32">
          <Image
            src="https://serve.aftaza.my.id/public/images/jip2.png"
            alt="jip bromo image"
            height={400}
            width={700}
            quality={100}
            className="w-full rounded-lg"
          />
        </div>
        <div className="flex justifu-between items-center gap-5 px-32">
          <div className="flex flex-col items-center w-1/2 gap-3">
            <h1 className="font-semibold text-xl text-color-fourty">
              Upacara Adat Suku Tengger, Yadnya Kasada
            </h1>
            <p className="text-justify">
              Upacara tahunan yang dilaksanakan pada hari keempat belas bulan
              Kasada ini, sudah berlangsung sejak abad ke-14 dan selalu pada
              saat bulan purnama muncul. Upacara ini berlangsung dua hari dan
              disiapkan langsung oleh masyarakat Suku Tengger, pemeluk agama
              Hindu kuno yang cara dan tempat ibadahnya berbeda dari agama Hindu
              di daerah lainnya. Rangkaian upacaranya pun sakral dan khidmat, di
              mana masyarakat Suku Tengger akan membawa berbagai macam hasil
              bumi dan hewan peliharaan sebagai sesembahan.
            </p>
          </div>
          <Image
            src="https://serve.aftaza.my.id/public/images/upacara.png"
            alt="upacara tahunan suku tengger"
            height={400}
            width={400}
            className="w-1/2 rounded-lg"
          />
        </div>
      </section>
      <section className="flex flex-col px-20 w-full justify-center items-center gap-10">
        <h1 className="font-bold text-2xl">Rekomendasi Tour dan Travel</h1>
        <div className="flex justify-between gap-10 overflow-x-scroll z-10 drop-shadow-lg">
          <CardTravel />
          <CardTravel />
          <CardTravel />
          <CardTravel />
          <CardTravel />
        </div>
      </section>
      <section className="flex flex-col px-20 w-full justify-center items-center gap-10">
        <h1 className="font-bold text-2xl">Apa kata mereka ?</h1>
        <div className="flex justify-between gap-10 overflow-x-scroll z-10 drop-shadow-lg">
          <TiktokCard />
          <TiktokCard />
        </div>
      </section>
      <section className="flex flex-col px-20 justify-between gap-5">
        <h1 className="font-bold text-2xl">Detail Lokasi</h1>
        <div className="flex gap-2 items-center">
          <Image src="/pin3.svg" alt="pin" width={30} height={30} />
          <h3>Malang, Kota Malang, Jawa Timur, Indonesia</h3>
        </div>
        <MapCard />
      </section>
    </main>
  );
};

export default DetailWisata;
