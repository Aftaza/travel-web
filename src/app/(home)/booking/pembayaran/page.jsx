import Image from "next/image";
export default function Home() {
  return (
    <main className="bg-[#E8E8E8] px-24 pt-16 grid grid-cols-3 gap-x-2 gap-y-3 min-h-screen">
      <section className="flex flex-col gap-4 col-span-2 bg-color-white p-3 h-fit">
        <div className="flex flex-col gap-3 font-bold">
          <div className="flex gap-2 items-center">
            <span className="w-8 h-8 rounded-full grid place-content-center bg-color-fourty text-color-white">1</span>
            <h1>Selesaikan pembayaran sebelum</h1>
          </div>
          <div className="p-2 rounded-lg flex flex-col outline outline-[0.3px] text-sm text-[#808080]">
            <p className="text-color-black">Sekarang 12.00</p>
            <p>Selesaikan pembayaran dalam 30 menit 0 detik</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 font-bold">
          <div className="flex gap-2 items-center">
            <span className="w-8 h-8 rounded-full grid place-content-center bg-color-fourty text-color-white">2</span>
            <h1>Mohon transfer ke:</h1>
          </div>
          <div className="p-2 rounded-lg flex flex-col outline outline-[0.3px]">
            <p>Mohon pilih online Transfer sebagai tipe transfer anda</p>
            <div className="flex flex-col gap-1 border-y-[1px]">
                <p>Bank Central Asia (BCA)</p>
                <p>Nomor Rekening:</p>
                <p>Nomor Penerima: PT Travel Indonesia</p>
            </div>
            <p>Jumlah transfer: Rp. 300.000</p>
          </div>
        </div>
        <button className="bg-color-fourty py-2 px-6 w-fit font-semibold text-color-white rounded-lg self-center my-4">Kembali ke Beranda</button>
      </section>
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
