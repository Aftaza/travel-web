"use client";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="h-fit bg-[#E8E8E8] px-24 flex flex-col">
    <section>
    <h1>Pemesanan Anda</h1>
      <h1>Isi data anda dan review pesanan</h1>

      <div className="bg-color-white rounded-md">
        <h1>Log-in sebagai Zulfi</h1>
        <h1>Zulfi(Google)</h1>
      </div>

      <h1 className="m-4">Data Pemesanan</h1>
      <div className="bg-color-white">
        <h1 className="py-2 border-b">Data Pemesanan(Untuk Voucher)</h1>

        <form>
          <div className="flex flex-col">
            <label className="text-[#808080]">
              Nama Lengkap <span className="text-[#FF3A3A]">*</span>
            </label>
            <input
              type="text"
              className="py-2 rounded-md outline outline-1 outline-[#808080]"
            ></input>
          </div>
          <p>(tanpa gelar dan tanda baca)</p>
        </form>

        <form>
          <label className="text-[#808080]">
            No.Handphone<span className="text-[#FF3A3A]">*</span>
          </label>
          <div>
            <select name="code">
              <option value="IDN">+62</option>
              <option value="Malay">+60</option>
              <option value="SNG">65+</option>
            </select>
            <input text="text"></input>
          </div>
          <h1>Contoh:+62 untuk negara dan No.Handphone 08123948</h1>
        </form>

        <form>
          <div className="flex flex-col">
            <label className="text-[#808080]">Email*</label>
            <input
              text="text"
              className="py-2 rounded-md outline outline-1 outline-[#808080]"
            ></input>
          </div>
          <h1>Contoh:email@gmail.com</h1>
        </form>

        <div className="bg-[#D9D9D9] flex ">
          <form>
            <div>
              <label>Saya pengunjungnya</label>
              <input type="checkbox"></input>
            </div>
          </form>

          <form>
            <div>
              <label>Saya pesan untuk orang lain</label>
              <input type="checkbox"></input>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col bg-color-white">
        <label>Permintaan Khusus(Opsional)</label>
        <input
          type="text"
          placeholder="Permintaan Khusus"
          className="py-2 rounded-md outline outline-1 outline-[#808080]"
        ></input>
        <p className="text-[#808080]">
          Format:dalam bahasa Inggris atau bahasa lokal. Permintaan bergantung
          pada
        </p>
      </div>

      <h1>Detail Lokasi</h1>

      <h1>Rincian Harga</h1>
      <form className=" bg-color-white">
        <div className="flex flex-row py-2 border-b justify-between">
          <h1>Harga yang anda bayar</h1>
          <p>Rp 3.315.000</p>
        </div>

        <div className="flex flex-row py-2 border-b">
          <h1>Pax(3x)</h1>
          <p>Rp 3.315.000</p>
        </div>
      </form>

      <button className="bg-[#FF7A00] rounded-md text-[#FFFFFF] self-end w-fit">
        Lanjutkan ke pembayaran
      </button> 
    </section>
   
    </main>
  );
}
