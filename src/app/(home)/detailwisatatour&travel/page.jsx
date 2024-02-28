import Image from "next/image";
import Link from "next/link";

export default function DetailWisata() {
  return (
    <main className="flex flex-col w-[100vw] outline outline-1 relative pt-14">
      <span className="flex justify-center w-full py-4">
        <div className="flex items-center w-1/2 rounded-md outline outline-1 outline-[#808080] relative overflow-hidden">
          <p className="text-lg px-2">🔍</p>
          <input
            type="text"
            placeholder="Ide apa yang harus dilakukan untuk perjalanan"
            className="p-2 w-full"
          />
          <button className="px-2 bg-[#009BDD] text-color-white font-semibold absolute inset-y-0 right-0">
            Mencari
          </button>
        </div>
      </span>
      <section className="flex flex-col">
        <span className="bg-[#009BDD] flex flex-col gap-3 text-color-white font-semibold py-2 px-8 z-20 sticky top-14">
          <h1 className="text-lg font-semibold">
            Wisata Air Terjun Tumpak Sewu
          </h1>
          <p className="text-xs">Malang, Kota Malang, Jawa Timur, Indonesia</p>
          <p className="text-xs">Tanggal tur | Senin, 12 Februari 2024</p>
        </span>
        <div className="flex flex-row gap-4 h-96 w-[70%] self-center relative">
          <button className="p-2 rounded-xl bg-color-black text-color-white font-semibold absolute right-2 bottom-2 z-10">
            Lihat Semua Foto
          </button>
          <div className="w-1/2 relative">
            <Image
              src="/images/airterjun.png"
              fill
              alt="Air Terjun"
              className="object-cover"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <div className="w-full h-1/2 relative">
              <Image
                src="/images/airterjun.png"
                fill
                alt="Air Terjun"
                className="object-cover"
              />
            </div>
            <div className="w-full h-1/2 relative">
              <Image
                src="/images/airterjun.png"
                fill
                alt="Air Terjun"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-24 font-semibold py-8">
          <h1 className="self-center text-2xl font-serif font-light">Rencana Perjalanan Tur</h1>
          <li>
            07:30-07:30 Penjemputan peserta di lokasi berkumpul (hotel, stasiun,
            dll)
          </li>
          <li>07:30-09:30 Perjalanan menuju air terjun Tumpak Sewu</li>
          <li>
            09:30-10:00 Tiba di rest area Tumpak Sewu, ditemani pemandu
            persiapan trekking
          </li>
          <li>
            10:00-10:20 Menikmati keindahan dan berburu foto di spot pertama Air
            Terjun Tumpak Sewu
          </li>
          <li>10:20-11:00 Mulai tracking hingga ke dasar air terjun</li>
          <Link href="/" className="text-[#009BDD] font-semibold underline">
            Lihat Rencana Perjalanan Lengkap
          </Link>
        </div>
      </section>
      <section className="bg-[#d9d9d9] py-4 px-12 flex justify-center">
        <div className="bg-color-white w-full p-4 flex flex-col gap-4 font-bold">
          <h1>Tiket yang tersedia untuk anda</h1>
          <span className="w-full flex flex-row justify-between items-center outline outline-1 outline-[#808080] p-2">
            <div className="flex flex-col justify-center">
              <p className="font-semibold">Perjalanan pribadi 6 orang</p>
              <Link href="" className="text-[#0094FF]">Lihat Detail</Link>
            </div>
            <div>
              <p className="text-[#f35800]">Rp300.000</p>
              <button className="bg-[#009BDD] rounded-md flex justify-center items-center text-color-white font-semibold px-12 py-2">
                Pilih tiket
              </button>
            </div>
          </span>
          <span className="w-full flex flex-row justify-between items-center outline outline-1 outline-[#808080] p-2">
            <div className="flex flex-col justify-center">
            <p className="font-semibold">Perjalanan pribadi 6 orang</p>
              <Link href="" className="text-[#0094FF]">Lihat Detail</Link>
            </div>
            <div>
              <p className="text-[#f35800]">Rp300.000</p>
              <button className="bg-[#009BDD] rounded-md flex justify-center items-center text-color-white font-semibold px-12 py-2">
                Pilih tiket
              </button>
            </div>
          </span>
          <span className="w-full flex flex-row justify-between items-center outline outline-1 outline-[#808080] p-2">
            <div className="flex flex-col justify-center">
            <p className="font-semibold">Perjalanan pribadi 6 orang</p>
              <Link href="" className="text-[#0094FF]">Lihat Detail</Link>
            </div>
            <div>
              <p className="text-[#f35800]">Rp300.000</p>
              <button className="bg-[#009BDD] rounded-md flex justify-center items-center text-color-white font-semibold px-12 py-2">
                Pilih tiket
              </button>
            </div>
          </span>
          <span className="w-full flex flex-row justify-between items-center outline outline-1 outline-[#808080] p-2">
            <div className="flex flex-col justify-center">
            <p className="font-semibold">Perjalanan pribadi 6 orang</p>
              <Link href="" className="text-[#0094FF]">Lihat Detail</Link>
            </div>
            <div>
              <p className="text-[#f35800]">Rp300.000</p>
              <button className="bg-[#009BDD] rounded-md flex justify-center items-center text-color-white font-semibold px-12 py-2">
                Pilih tiket
              </button>
            </div>
          </span>
        </div>
      </section>
      <div className="flex flex-col gap-3 px-8 py-4 font-bold">
        <h1>Detail Lokasi</h1>
        <p>Malang, Kota Malang, Jawa Timur, Indonesia</p>
        <p>Hubungi Mitra: +62085195000503</p>
      </div>
    </main>
  );
}
