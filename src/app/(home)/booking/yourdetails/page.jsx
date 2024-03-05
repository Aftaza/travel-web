import Image from "next/image";
import Link from "next/link";
export default function bookingdetails() {
  return (
    <main className="flex flex-col pt-12">
      <span className="h-12 flex items-center justify-center md:p-12">
        <div className="w-3/4 md:w-1/2 h-2 bg-[#EFEFEF] relative">
          <div className="h-8 w-8 rounded-full bg-[#efefef] left-0 bottom-1/2 translate-y-1/2 absolute flex justify-center items-center">
            <p className="text-[#A4A4A4]">1</p>
            <p className="text-[#A4A4A4] text-sm whitespace-nowrap translate-y-8 absolute">
              Booking Details
            </p>
          </div>
          <div className="h-8 w-8 rounded-full bg-color-fourty left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 absolute flex justify-center items-center">
            <p className="text-color-white">2</p>
            <p className="text-color-fourty text-sm whitespace-nowrap translate-y-8 absolute">
              Your Details
            </p>
          </div>
          <div className="h-8 w-8 rounded-full bg-[#EFEFEF] right-0 bottom-1/2 translate-y-1/2 absolute flex justify-center items-center">
            <p className="text-[#A4A4A4]">3</p>
            <p className="text-[#A4A4A4] text-sm whitespace-nowrap translate-y-8 absolute">
              Payment
            </p>
          </div>
        </div>
      </span>
      <section className="flex flex-col md:flex-row gap-8 px-12 py-8">
        <div className="flex flex-col gap-8 md:w-1/2">
          <h3 className="font-semibold text-[#333333]">Data Pemesanan</h3>
          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="Nama" className="font-medium text-[#333333]">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="outline outline-1 outline-[#efefef] rounded-md h-10 pl-2"
                placeholder="Masukkan nama anda"
              />
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="Nama" className="font-medium text-[#333333]">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  className="outline outline-1 outline-[#efefef] rounded-md h-10 pl-2"
                  placeholder="Masukkan nomor telepon anda"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="Nama" className="font-medium text-[#333333]">
                  Email
                </label>
                <input
                  type="text"
                  className="outline-[#efefef] outline outline-1 rounded-md h-10 pl-2"
                  placeholder="Masukkan email anda"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-medium text-[#333333]">
                Permintaan Khusus (Optional)
              </label>
              <input
                type="text"
                className="outline outline-1 outline-[#efefef] rounded-md h-10"
              />
              <sub className="text-[#333333]">Permintaan tergantung pada kesediaan operator</sub>
            </div>
          </form>
          <div className="pt-4 flex flex-col gap-2">
            <label htmlFor="Detail Lokasi" className="font-medium text-[#333333]">
              Detail Lokasi
            </label>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31612.36012390921!2d112.9324125566914!3d-7.9424929432158695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sMt%20Bromo!5e0!3m2!1sen!2sid!4v1709571263264!5m2!1sen!2sid"
              className="w-full min-h-64"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <aside className="outline outline-1 outline-[#efefef] rounded-xl p-4 flex flex-col justify-between gap-8 md:w-1/2 h-fit">
          <h3 className="text-color-black font-semibold">Ringkasan Pesanan</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-2 h-24 border-b-[0.5]">
              <div className="md:w-1/4 rounded-lg bg-color-fourty relative overflow-hidden">
                <Image src="/images/bromo.jpg" fill alt="Bromo"/>
              </div>
              <div className="flex flex-col justify-between gap-2">
                <h2 className="font-semibold text-lg">Paket Gunung Bromo</h2>
                <p className="font-medium flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.85742 7.42861H21.1431M5.14314 2.85718H18.8574C19.4636 2.85718 20.045 3.09799 20.4737 3.52665C20.9023 3.9553 21.1431 4.53668 21.1431 5.14289V18.8572C21.1431 19.4634 20.9023 20.0448 20.4737 20.4734C20.045 20.9021 19.4636 21.1429 18.8574 21.1429H5.14314C4.53693 21.1429 3.95555 20.9021 3.52689 20.4734C3.09824 20.0448 2.85742 19.4634 2.85742 18.8572V5.14289C2.85742 4.53668 3.09824 3.9553 3.52689 3.52665C3.95555 3.09799 4.53693 2.85718 5.14314 2.85718V2.85718Z"
                      stroke="#FA8B02"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0003 13.1429C12.6315 13.1429 13.1431 12.6312 13.1431 12C13.1431 11.3689 12.6315 10.8572 12.0003 10.8572C11.3691 10.8572 10.8574 11.3689 10.8574 12C10.8574 12.6312 11.3691 13.1429 12.0003 13.1429Z"
                      fill="#FA8B02"
                    />
                    <path
                      d="M7.42899 13.1429C8.06017 13.1429 8.57185 12.6312 8.57185 12C8.57185 11.3689 8.06017 10.8572 7.42899 10.8572C6.79781 10.8572 6.28613 11.3689 6.28613 12C6.28613 12.6312 6.79781 13.1429 7.42899 13.1429Z"
                      fill="#FA8B02"
                    />
                    <path
                      d="M16.5716 13.1429C17.2028 13.1429 17.7144 12.6312 17.7144 12C17.7144 11.3689 17.2028 10.8572 16.5716 10.8572C15.9404 10.8572 15.4287 11.3689 15.4287 12C15.4287 12.6312 15.9404 13.1429 16.5716 13.1429Z"
                      fill="#FA8B02"
                    />
                    <path
                      d="M12.0003 17.7144C12.6315 17.7144 13.1431 17.2028 13.1431 16.5716C13.1431 15.9404 12.6315 15.4287 12.0003 15.4287C11.3691 15.4287 10.8574 15.9404 10.8574 16.5716C10.8574 17.2028 11.3691 17.7144 12.0003 17.7144Z"
                      fill="#FA8B02"
                    />
                    <path
                      d="M7.42899 17.7144C8.06017 17.7144 8.57185 17.2028 8.57185 16.5716C8.57185 15.9404 8.06017 15.4287 7.42899 15.4287C6.79781 15.4287 6.28613 15.9404 6.28613 16.5716C6.28613 17.2028 6.79781 17.7144 7.42899 17.7144Z"
                      fill="#FA8B02"
                    />
                    <path
                      d="M16.5716 17.7144C17.2028 17.7144 17.7144 17.2028 17.7144 16.5716C17.7144 15.9404 17.2028 15.4287 16.5716 15.4287C15.9404 15.4287 15.4287 15.9404 15.4287 16.5716C15.4287 17.2028 15.9404 17.7144 16.5716 17.7144Z"
                      fill="#FA8B02"
                    />
                  </svg>
                  Senin, 25 Maret 2024
                </p>
                <p className="font-medium flex gap-2 items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9997 21.1429C6.95026 21.1429 2.85686 17.0495 2.85686 12C2.85686 6.95057 6.95026 2.85718 11.9997 2.85718C17.0492 2.85718 21.1426 6.95057 21.1426 12C21.1426 17.0495 17.0492 21.1429 11.9997 21.1429Z"
                      stroke="#FA8B02"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 8.57129V13.1427H16"
                      stroke="#FA8B02"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  15.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center h-12">
                <div className="flex gap-4 items-center">
                  <div className=" aspect-square flex-none grid place-content-center h-8 rounded-full bg-[#efefef] p-2">
                    1
                  </div>
                  <p>Dewasa (Rp.12.000)</p>
                </div>
                <p className="font-medium">Rp.64.000</p>
              </div>
              <div className="flex justify-between items-center h-12">
                <div className="flex gap-4 items-center">
                  <div className=" aspect-square flex-none grid place-content-center h-8 rounded-full bg-[#efefef] p-2">
                    1
                  </div>
                  <p>Dewasa (Rp.12.000)</p>
                </div>
                <p className="font-medium">Rp.64.000</p>
              </div>
              <div className="flex justify-between items-center h-12">
                <div className="flex gap-4 items-center">
                  <div className=" aspect-square flex-none grid place-content-center h-8 rounded-full bg-[#efefef] p-2">
                    1
                  </div>
                  <p>Dewasa (Rp.12.000)</p>
                </div>
                <p className="font-medium">Rp.64.000</p>
              </div>
            </div>
            <div className="flex justify-between items-center font-semibold text-lg">
              <h3>Total yang dibayar</h3>
              <h3 className="text-[#FA8B02]">Rp.86.000</h3>
            </div>
          </div>
          <Link href="/booking/payment" className="rounded-full py-3 flex items-center justify-center bg-[#FA8B02] text-color-white font-semibold">
            Menuju langkah berikutnya
          </Link>
        </aside>
      </section>
    </main>
  );
}
