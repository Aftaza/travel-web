import Link from "next/link";
export default function bookingdetails() {
  return (
    <main className="flex flex-col pt-12">
      <span className="h-12 flex items-center justify-center p-12">
        <div className="w-1/2 h-2 bg-[#EFEFEF] relative">
          <div className="h-8 w-8 rounded-full bg-[#efefef] left-0 bottom-1/2 translate-y-1/2 absolute flex justify-center items-center">
            <p className="text-[#A4A4A4]">1</p>
            <p className="text-[#A4A4A4] text-sm whitespace-nowrap translate-y-8 absolute">
              Booking Details
            </p>
          </div>
          <div className="h-8 w-8 rounded-full bg-[#efefef] left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 absolute flex justify-center items-center">
            <p className="text-[#A4A4A4]">2</p>
            <p className="text-[#A4A4A4] text-sm whitespace-nowrap translate-y-8 absolute">
              Your Details
            </p>
          </div>
          <div className="h-8 w-8 rounded-full bg-color-fourty right-0 bottom-1/2 translate-y-1/2 absolute flex justify-center items-center">
            <p className="text-color-white">3</p>
            <p className="text-color-fourty text-sm whitespace-nowrap translate-y-8 absolute">
              Payment
            </p>
          </div>
        </div>
      </span>
      <section className="flex gap-8 px-12 py-8">
        <div className="flex flex-col gap-8 w-1/2 text-[#333333]">
          <h3 className="font-semibold text-[#333333]">Pilih Pembayaran</h3>
          <div className="flex flex-col gap-2">
            <div className="outline outline-1 outline-[#efefef] h-12 rounded-md flex items-center justify-between p-2">
              <div className="flex gap-1">
                <input type="checkbox" name="Dana" id="" />
                <label htmlFor="" className="font-semibold">
                  Dana
                </label>
              </div>
            </div>
            <div className="outline outline-1 outline-[#efefef] rounded-md flex flex-col gap-2 p-2">
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <input type="checkbox" name="Dana" id="" />
                  <label htmlFor="" className="font-semibold">
                    Bayar dengan Kartu Kredit
                  </label>
                </div>
              </div>
              <form className="flex flex-wrap gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="text-xs bg-color-white pb-1 -mb-1 z-10 w-fit"
                  >
                    Nomor Kartu Kredit / Debit
                  </label>
                  <input
                    type="text"
                    className="h-8 outline outline-1 outline-[#efefef] rounded-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="text-xs bg-color-white pb-1 -mb-1 z-10 w-fit"
                  >
                    Tanggal expire
                  </label>
                  <input
                    type="text"
                    className="h-8 outline outline-1 outline-[#efefef] rounded-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="text-xs bg-color-white pb-1 -mb-1 z-10 w-fit"
                  >
                    Pin
                  </label>
                  <input
                    type="text"
                    className="h-8 outline outline-1 outline-[#efefef] rounded-sm"
                  />
                </div>
              </form>
            </div>
            <div className="outline outline-1 outline-[#efefef] rounded-lg flex flex-col gap-2 p-2">
              <label htmlFor="" className="font-semibold">
                Transfer Bank
              </label>
              <div className="flex flex-col gap-3">
                <div className="outline outline-1 outline-[#efefef] rounded-md flex gap-1 p-2 w-1/2">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Transfer Mandiri</label>
                </div>
                <div className="outline outline-1 outline-[#efefef] rounded-md flex gap-1 p-2 w-1/2">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Transfer BCA</label>
                </div>
                <div className="outline outline-1 outline-[#efefef] rounded-md flex gap-1 p-2 w-1/2">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Transfer BRI</label>
                </div>
                <div className="outline outline-1 outline-[#efefef] rounded-md flex gap-1 p-2 w-1/2">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Transfer BRI</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="outline outline-1 outline-[#efefef] rounded-xl flex flex-col justify-between w-1/2 h-fit font-semibold">
          <div className="flex flex-col gap-1 py-2 px-4 border-b border-[#efefef]">
            <h4 className="text-[#606060]">NO. PESANAN</h4>
            <h4 className="text-[#333333]">11233213</h4>
          </div>
          <div className="flex flex-col gap-1 py-2 px-4 border-b border-[#efefef]">
            <h4 className="text-[#606060]">DETAIL PESANAN</h4>
            <h4 className="text-[#333333]">Paket Gunung Bromo</h4>
            <div className="flex justify-between text-[#606060]">
              <p>Masa Berlaku</p>
              <p>Senin, 25 Maret 2024</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 py-2 px-4 text-[#333333]">
            <h4 className="text-[#606060]">TAMU</h4>
            <h3>Faishal Rafid</h3>
            <h3>08217322232</h3>
            <h3>faishal@gmail.com</h3>
          </div>
          <Link href="/booking/finalization" className="mx-2 my-4 rounded-full py-3 flex items-center justify-center bg-[#FA8B02] text-color-white font-semibold">
            Menuju langkah berikutnya
          </Link>
        </div>
      </section>
    </main>
  );
}
