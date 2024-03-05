import { CardTravel, MapCard, TiktokCard } from "@/components/card";
import Image from "next/image";
import React from "react";

const DetailWisata = () => {
  return (
    <main className="flex flex-col gap-16 mb-10">
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
          <TiktokCard />
        </div>
      </section>
      <section className="flex flex-col px-20 justify-between gap-5">
        <h1 className="font-bold text-2xl">Detail Lokasi</h1>
        <div className="flex items-center">
          <Image src="https://serve.aftaza.my.id/public/pin3.svg" alt="pin" width={50} height={50} />
          <h3>Malang, Kota Malang, Jawa Timur, Indonesia</h3>
        </div>
        <MapCard />
      </section>
    </main>
  );
};

export default DetailWisata;
