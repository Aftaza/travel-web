"use client";
import Link from "next/link";
import { useState } from "react";
export default function bookingdetails() {
  const [submit, setSubmit] = useState(false);
  return (
    <main className="flex flex-col pt-12">
      {submit ? (
        <section className="h-[80vh] md:h-[100vh] w-[100vw] grid place-content-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <svg
              width="93"
              height="92"
              viewBox="0 0 93 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46.4993 0.166748C21.1868 0.166748 0.666016 20.6876 0.666016 46.0001C0.666016 71.3126 21.1868 91.8334 46.4993 91.8334C71.8118 91.8334 92.3327 71.3126 92.3327 46.0001C92.3327 20.6876 71.8118 0.166748 46.4993 0.166748ZM66.366 38.2501C66.7318 37.8319 67.0103 37.3448 67.1851 36.8174C67.3599 36.2901 67.4275 35.7331 67.3838 35.1792C67.3402 34.6253 67.1862 34.0858 66.9309 33.5923C66.6757 33.0988 66.3243 32.6614 65.8975 32.3057C65.4706 31.95 64.977 31.6833 64.4456 31.5212C63.9142 31.3591 63.3557 31.3049 62.803 31.3619C62.2504 31.4188 61.7147 31.5857 61.2275 31.8527C60.7402 32.1197 60.3113 32.4815 59.966 32.9167L42.0493 54.4126L32.7785 45.1376C31.9927 44.3786 30.9402 43.9586 29.8477 43.9681C28.7552 43.9776 27.7101 44.4158 26.9376 45.1883C26.1651 45.9609 25.7269 47.0059 25.7174 48.0984C25.7079 49.1909 26.1279 50.2434 26.8868 51.0292L39.3868 63.5292C39.7963 63.9384 40.2864 64.2578 40.8261 64.467C41.3657 64.6762 41.9431 64.7707 42.5213 64.7445C43.0995 64.7182 43.6659 64.5717 44.1844 64.3144C44.7029 64.0572 45.1621 63.6947 45.5327 63.2501L66.366 38.2501Z"
                fill="#4CACBC"
              />
            </svg>

            <h1 className="text-lg font-bold">Pesanan kamu terkonfirmasi!</h1>
            <p>Kamu akan mendapatkan email konfirmasi dengan detail pesanan</p>
            <Link
              href="/"
              className="rounded-full px-4 py-2 flex justify-center items-center outline outline-1 outline-color-fourty text-color-fourty"
            >
              Menuju Beranda
            </Link>
          </div>
        </section>
      ) : (
        <>
          <span className="h-12 flex items-center justify-center md:p-12">
            <div className="w-3/4 md:w-1/2 h-2 bg-[#EFEFEF] relative">
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
          <section className="flex flex-col md:flex-row gap-8 px-12 py-8">
            <div className="flex flex-col gap-8 md:w-1/2">
              <div>
                <h3 className="font-semibold text-[#333333]">
                  Selesaikan Pembayaran Sebelum
                </h3>
                <div className="p-2 rounded-lg outline outline-1 outline-[#efefef] flex flex-col font-medium text-[#333333]">
                  <h3>Hari ini, 12.00</h3>
                  <p>Selesaikan pembayaran dalam 1 jam, 55 menit</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#333333]">
                  Mohon Transfer ke
                </h3>
                <div className="rounded-lg outline outline-1 outline-[#efefef] flex flex-col">
                  <div className="p-2 border-b border-[#efefef] text-center flex items-center gap-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 9.0625C15.2486 9.0625 15.4871 9.16127 15.6629 9.33709C15.8387 9.5129 15.9375 9.75136 15.9375 10V16.25C15.9375 16.4986 15.8387 16.7371 15.6629 16.9129C15.4871 17.0887 15.2486 17.1875 15 17.1875C14.7514 17.1875 14.5129 17.0887 14.3371 16.9129C14.1613 16.7371 14.0625 16.4986 14.0625 16.25V10C14.0625 9.75136 14.1613 9.5129 14.3371 9.33709C14.5129 9.16127 14.7514 9.0625 15 9.0625ZM15 21.25C15.3315 21.25 15.6495 21.1183 15.8839 20.8839C16.1183 20.6495 16.25 20.3315 16.25 20C16.25 19.6685 16.1183 19.3505 15.8839 19.1161C15.6495 18.8817 15.3315 18.75 15 18.75C14.6685 18.75 14.3505 18.8817 14.1161 19.1161C13.8817 19.3505 13.75 19.6685 13.75 20C13.75 20.3315 13.8817 20.6495 14.1161 20.8839C14.3505 21.1183 14.6685 21.25 15 21.25Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.3677 5.595C11.7077 3.89375 13.1277 2.8125 15.0002 2.8125C16.8727 2.8125 18.2927 3.89375 19.6327 5.595C20.9502 7.27 22.3452 9.745 24.1327 12.9138L24.6777 13.8787C26.1539 16.4975 27.3214 18.5663 27.9339 20.225C28.5589 21.9225 28.7089 23.4625 27.7614 24.8213C26.8427 26.14 25.3089 26.6788 23.3739 26.9338C21.4477 27.1875 18.8552 27.1875 15.5314 27.1875H14.4689C11.1439 27.1875 8.55269 27.1875 6.62644 26.9338C4.69144 26.6788 3.15769 26.14 2.23894 24.8213C1.29144 23.4625 1.44019 21.9213 2.06644 20.225C2.67894 18.565 3.84644 16.4975 5.32269 13.8787L5.86769 12.9138C7.65394 9.745 9.05019 7.26875 10.3677 5.595ZM11.8414 6.755C10.6239 8.30125 9.29644 10.65 7.45644 13.9125L7.00144 14.7188C5.46894 17.4362 4.38019 19.3738 3.82644 20.875C3.27894 22.3575 3.35394 23.1425 3.77644 23.75C4.22769 24.395 5.07394 24.8375 6.87144 25.075C8.66144 25.31 11.1289 25.3125 14.5464 25.3125H15.4552C18.8714 25.3125 21.3389 25.31 23.1302 25.075C24.9264 24.8375 25.7727 24.395 26.2227 23.75C26.6464 23.1425 26.7227 22.3575 26.1752 20.875C25.6202 19.3738 24.5314 17.4362 22.9989 14.7188L22.5439 13.9125C20.7039 10.65 19.3764 8.30125 18.1589 6.755C16.9527 5.225 16.0164 4.6875 15.0002 4.6875C13.9839 4.6875 13.0477 5.22375 11.8414 6.755Z"
                        fill="black"
                      />
                    </svg>
                    Mohon pilih Online Transfer sebagai tipe transfer anda
                  </div>
                  <div className="flex justify-between p-2 border-b border-[#efefef]">
                    <p className="font-semibold">Mandiri</p>
                  </div>
                  <div className="flex flex-col gap-4 p-2 border-b border-[#efefef] font-medium">
                    <div className="flex justify-between items-center">
                      <label htmlFor="">Nomor Rekening:</label>
                      <div className="bg-[#B4B4B4] bg-opacity-70 py-1 px-2 flex justify-between rounded-lg w-3/5">
                        <p>82713918263</p>
                        <button className="text-color-fourty">Copy</button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <label htmlFor="">Nama Penerima:</label>
                      <div className="bg-[#B4B4B4] bg-opacity-70 py-1 px-2 flex justify-between rounded-lg w-3/5">
                        <p>PT.Explorin</p>
                        <button className="text-color-fourty">Copy</button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 font-medium">
                      <label htmlFor="">Jumlah Transfer:</label>
                      <div className="bg-[#B4B4B4] bg-opacity-70 py-1 px-2 flex justify-between rounded-lg w-3/5">
                        <p>Rp.800.000</p>
                        <button className="text-color-fourty">Copy</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <aside className="outline outline-1 outline-[#efefef] rounded-xl flex flex-col justify-between md:w-1/2 h-fit font-semibold">
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
              <button
                onClick={() => setSubmit(!submit)}
                className="mx-2 my-4 rounded-full py-3 flex items-center justify-center bg-[#FA8B02] text-color-white font-semibold"
              >
                Menuju langkah berikutnya
              </button>
            </aside>
          </section>
        </>
      )}
    </main>
  );
}
