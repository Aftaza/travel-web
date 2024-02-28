import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-[#E8E8E8] px-24 pt-16 grid grid-cols-3 gap-x-2 gap-y-3">
      <div className="font-bold col-span-3">
        <h1>Pemesanan Anda</h1>
        <h1>Isi data anda dan review pesanan</h1>
      </div>
      <aside className="flex flex-col gap-4 col-span-2">
        <section className="flex flex-col">
          <div className="bg-color-white rounded-md p-2 flex gap-2 font-bold">
            <div className="w-12 aspect-square rounded-full bg-color-black"></div>
            <div>
              <h1>Log-in sebagai Zulfi</h1>
              <h1>Zulfi (Google)</h1>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="font-bold">Data pemesanan</h1>
          <form className="bg-color-white flex flex-col p-2 rounded-md font-bold gap-4">
            <div className="flex justify-between py-2">
              <h1>Data pemesanan (Untuk voucher)</h1>
              <Link href="" className="text-[#1A3FFF]">
                Simpan
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-[#808080]">
              <label htmlFor="Nama">
                Nama lengkap<sup>*</sup>
              </label>
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline outline-1 h-10 pl-2"
              />
              <p>(Tanpa gelar dan tanda baca)</p>
            </div>
            <div className="flex justify-between gap-2 text-[#808080]">
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="Nama">
                  No. Handphone<sup>*</sup>
                </label>
                <div className="flex outline outline-1 h-10 rounded-sm">
                  <select name="codearea" className="w-[30%]">
                    <option value="IDN">+62</option>
                  </select>
                  <input type="text" className="w-[70%] pl-2" />
                </div>
                <sub className="leading-none">
                  Contoh: +6281237849 untuk negara (+62) dan No. Handphone
                  081237849
                </sub>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="Nama">
                  Email<sup>*</sup>
                </label>
                <div className="flex outline outline-1 h-10 rounded-sm">
                  <input type="text" className="w-full pl-2" />
                </div>
                <sub className="leading-none">Contoh: email@gmail.com</sub>
              </div>
            </div>
            <div className="flex justify-between gap-2 bg-[#d9d9d9] p-2 -m-2 text-sm text-[#808080]">
              <div className="w-1/2 flex gap-2">
                <input type="checkbox" name="Saya pengunjungnya" />
                <p>Saya pengunjungnya</p>
              </div>
              <div className="w-1/2 flex gap-2">
                <input type="checkbox" name="Saya pengunjungnya" />
                <p>Saya pesan untuk orang lain</p>
              </div>
            </div>
          </form>
        </section>
        <section className="flex flex-col gap-2 font-bold bg-color-white p-2 rounded-md">
          <h1>Permintaan khusus (Opsional)</h1>
          <input
            type="text"
            placeholder="Permintaan khusus"
            className="text-xs h-12 outline outline-[0.3px] outline-[#808080] p-2 rounded-sm"
          />
          <sub className="py-1 text-[8px] text-[#808080]">
            Format: dalam bahasa inggris atau bahasa lokal tujuan. Permintaan
            bergantung pada kesediaan operator
          </sub>
        </section>
        <section className="p-2 flex flex-col gap-1 font-bold">
          <h1>Detail Lokasi</h1>
          <form action="" className="bg-color-white h-32 rounded-md"></form>
        </section>
        <section className="p-2 flex flex-col gap-1 font-bold">
          <h1>Rincian Harga</h1>
          <form
            action=""
            className="bg-color-white flex flex-col gap-2 rounded-md p-2"
          >
            <div className="flex justify-between">
              <h1>Harga yang anda bayar</h1>
              <div className="flex gap-2">
                <h1 className="text-lg text-[#FF7A00]">Rp. 3.315.000</h1>
                <h1>^</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <h1>Pax(3x)</h1>
              <h1>Rp. 3.315.000</h1>
            </div>
          </form>
        </section>
      </aside>
      <aside>
        <div className="flex flex-col gap-2 font-bold bg-color-white rounded-md p-2">
          <div className="py-2 border-b-2">
            <h1>Ringkasan Pesanan</h1>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <h1 className="col-span-2">Paket Gunung Bromo</h1>
            <div className="bg-color-black h-32 rounded-3xl relative overflow-hidden">
              <Image src="/images/bromo.jpg" alt="" fill className="object-cover"/>
            </div>
            <div>
              <p className="text-xs text-[#808080]">Paket Gunung Bromo</p>
            </div>
          </div>
          <span className="flex flex-col text-sm bg-[#D9D9D9] text-[#808080] p-2 -mx-2">
            <div className="flex justify-between">
              <p>Tanggal kunjungan</p>
              <p>Senin, 13 Maret 2024</p>
            </div>
            <div className="flex justify-between">
              <p>Slot Waktu</p>
              <p>07.00</p>
            </div>
            <div className="flex justify-between">
              <p>Jumlah Tamu</p>
              <p>Pax: 3</p>
            </div>
          </span>
          <div className="flex flex-col text-sm gap-4">
            <div>
              <p>Berlaku pada 13 Maret 2024</p>
            </div>
            <div>
              <p>Tidak perlu reservasi</p>
            </div>
            <div>
              <p>Tidak bisa refund</p>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
