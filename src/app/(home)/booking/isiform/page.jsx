import Image from "next/image";
import Link from "next/link";
export default function IsiForm() {
  return (
    <main className="bg-[#E8E8E8] px-8 md:px-24 pt-16 grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-3">
      <div className="font-bold md:col-span-3">
        <h1>Pemesanan Anda</h1>
        <h1>Isi data anda dan review pesanan</h1>
      </div>
      <aside className="flex flex-col gap-4 md:col-span-2">
        <section className="flex flex-col">
          <div className="bg-color-white rounded-md p-2 flex gap-2">
            <div className="w-12 aspect-square rounded-full bg-[#1A3FFF] grid place-content-center">
              <svg
                width="34"
                height="34"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6667 12.8333C14.6667 10.8884 15.4393 9.02315 16.8146 7.64788C18.1898 6.27262 20.0551 5.5 22 5.5C23.9449 5.5 25.8102 6.27262 27.1855 7.64788C28.5607 9.02315 29.3333 10.8884 29.3333 12.8333C29.3333 14.7783 28.5607 16.6435 27.1855 18.0188C25.8102 19.3941 23.9449 20.1667 22 20.1667C20.0551 20.1667 18.1898 19.3941 16.8146 18.0188C15.4393 16.6435 14.6667 14.7783 14.6667 12.8333ZM14.6667 23.8333C12.2355 23.8333 9.90394 24.7991 8.18485 26.5182C6.46577 28.2373 5.5 30.5688 5.5 33C5.5 34.4587 6.07946 35.8576 7.11091 36.8891C8.14236 37.9205 9.54131 38.5 11 38.5H33C34.4587 38.5 35.8576 37.9205 36.8891 36.8891C37.9205 35.8576 38.5 34.4587 38.5 33C38.5 30.5688 37.5342 28.2373 35.8151 26.5182C34.0961 24.7991 31.7645 23.8333 29.3333 23.8333H14.6667Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h1>
                <b>Log-in</b> sebagai Zulfi
              </h1>
              <h1>Zulfi (Google)</h1>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="font-bold">Data pemesanan</h1>
          <form className="bg-color-white flex flex-col py-2 px-4 rounded-md font-bold gap-4">
            <div className="flex justify-between py-4 border-b">
              <h1>Data pemesanan (Untuk voucher)</h1>
              <Link href="" className="text-[#1A3FFF]">
                Simpan
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-[#808080]">
              <label htmlFor="Nama">
                Nama Lengkap<sup>*</sup>
              </label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="rounded-md outline outline-1 h-10 pl-2 text-sm font-medium"
              />
              <p className="text-xs font-medium">
                (Tanpa gelar dan tanda baca)
              </p>
            </div>
            <div className="flex justify-between gap-2 text-[#808080]">
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="Nama">
                  No. Handphone<sup>*</sup>
                </label>
                <div className="flex outline outline-1 h-10 rounded-md focus:outline-none active:outline-none items-center gap-1 pl-2">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_410_2)">
                        <path
                          d="M32 5H4C2.93913 5 1.92172 5.42143 1.17157 6.17157C0.421427 6.92172 0 7.93913 0 9L0 18H36V9C36 7.93913 35.5786 6.92172 34.8284 6.17157C34.0783 5.42143 33.0609 5 32 5Z"
                          fill="#DC1F26"
                        />
                        <path
                          d="M36 27C36 28.0609 35.5786 29.0783 34.8284 29.8284C34.0783 30.5786 33.0609 31 32 31H4C2.93913 31 1.92172 30.5786 1.17157 29.8284C0.421427 29.0783 0 28.0609 0 27V18H36V27Z"
                          fill="#EEEEEE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_410_2">
                          <rect width="36" height="36" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <select name="codearea" className="w-[30%] focus:outline-none active:outline-none">
                    <option value="IDN"> +62</option>
                  </select>
                  <input
                    type="text"
                    className="w-[70%] pl-2 text-sm font-medium"
                    placeholder="8xxxxxxx"
                  />
                </div>
                <sub className="leading-snug text-xs font-medium">
                  Contoh: +6281237849 untuk negara (+62) dan No. Handphone
                  081237849
                </sub>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="Nama">
                  Email<sup>*</sup>
                </label>
                <div className="flex outline outline-1 h-10 rounded-md">
                  <input
                    type="text"
                    className="w-full pl-2 text-sm font-medium"
                    placeholder="example@gmail.com"
                  />
                </div>
                <sub className=" leading-snug text-xs font-medium">
                  Contoh: email@gmail.com
                </sub>
              </div>
            </div>
            <div className="flex justify-between gap-2 bg-[#d9d9d9] p-2 -mx-4 -mb-4 rounded-b-lg text-sm text-[#808080]">
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
        <section className="flex flex-col gap-2 font-bold bg-color-white py-2 px-4 rounded-md">
          <h1>Permintaan Khusus (Opsional)</h1>
          <input
            type="text"
            placeholder="Permintaan khusus"
            className="text-sm h-10 outline outline-[0.3px] outline-[#808080] p-2 rounded-md font-medium  "
          />
          <sub className="text-xs font-medium text-[#808080]">
            Format: dalam bahasa inggris atau bahasa lokal tujuan. Permintaan
            bergantung pada kesediaan operator
          </sub>
        </section>
        <section className="p-2 flex flex-col gap-1 font-bold">
          <h1>Detail Lokasi</h1>
          <div className="bg-color-white p-4 rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31612.36012390921!2d112.9324125566914!3d-7.9424929432158695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sMt%20Bromo!5e0!3m2!1sen!2sid!4v1709263189451!5m2!1sen!2sid"
              className="w-full aspect-square flex-none"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
          <Link
            href="/booking/pembayaran"
            className="my-4 self-end px-3 py-2 rounded-3xl bg-[#FF7A00] text-color-white w-fit font-medium"
          >
            Lanjut ke Pembayaran
          </Link>
        </section>
      </aside>
      <aside className="py-4 md:py-0">
        <div className="flex flex-col gap-2 font-bold bg-color-white rounded-md py-2 px-4">
          <div className="py-2 border-b flex gap-2 items-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.196 5.196C3 7.395 3 10.929 3 18C3 25.071 3 28.6065 5.196 30.8025C7.395 33 10.929 33 18 33C25.071 33 28.6065 33 30.8025 30.8025C33 28.608 33 25.071 33 18C33 10.929 33 7.3935 30.8025 5.196C28.608 3 25.071 3 18 3C10.929 3 7.3935 3 5.196 5.196ZM15.816 11.2755C15.9178 11.1684 15.9976 11.0424 16.0507 10.9045C16.1038 10.7666 16.1293 10.6196 16.1256 10.4719C16.1219 10.3242 16.0891 10.1786 16.0292 10.0436C15.9693 9.90852 15.8833 9.78659 15.7762 9.68475C15.6692 9.58291 15.5431 9.50315 15.4052 9.45004C15.2674 9.39692 15.1204 9.37148 14.9726 9.37517C14.8249 9.37886 14.6794 9.41161 14.5443 9.47155C14.4093 9.53149 14.2873 9.61744 14.1855 9.7245L10.7145 13.3695L9.8145 12.4245C9.71376 12.3132 9.59176 12.2231 9.45568 12.1597C9.31961 12.0963 9.17221 12.0607 9.02217 12.0551C8.87214 12.0495 8.7225 12.074 8.58208 12.1272C8.44166 12.1803 8.31331 12.261 8.20457 12.3646C8.09583 12.4681 8.00892 12.5923 7.94895 12.73C7.88899 12.8676 7.85718 13.0159 7.8554 13.166C7.85362 13.3161 7.88191 13.4651 7.93861 13.6041C7.9953 13.7432 8.07925 13.8694 8.1855 13.9755L9.9 15.7755C10.0051 15.8858 10.1314 15.9736 10.2714 16.0336C10.4115 16.0935 10.5622 16.1245 10.7145 16.1245C10.8668 16.1245 11.0175 16.0935 11.1576 16.0336C11.2976 15.9736 11.4239 15.8858 11.529 15.7755L15.816 11.2755ZM19.5 12.375C19.2016 12.375 18.9155 12.4935 18.7045 12.7045C18.4935 12.9155 18.375 13.2016 18.375 13.5C18.375 13.7984 18.4935 14.0845 18.7045 14.2955C18.9155 14.5065 19.2016 14.625 19.5 14.625H27C27.2984 14.625 27.5845 14.5065 27.7955 14.2955C28.0065 14.0845 28.125 13.7984 28.125 13.5C28.125 13.2016 28.0065 12.9155 27.7955 12.7045C27.5845 12.4935 27.2984 12.375 27 12.375H19.5ZM15.8145 21.7755C15.9208 21.6694 16.0047 21.5432 16.0614 21.4041C16.1181 21.2651 16.1464 21.1161 16.1446 20.966C16.1428 20.8159 16.111 20.6676 16.051 20.53C15.9911 20.3923 15.9042 20.2681 15.7954 20.1646C15.6867 20.061 15.5583 19.9803 15.4179 19.9272C15.2775 19.874 15.1279 19.8495 14.9778 19.8551C14.8278 19.8607 14.6804 19.8963 14.5443 19.9597C14.4082 20.0231 14.2862 20.1132 14.1855 20.2245L10.7145 23.8695L9.8145 22.9245C9.71376 22.8132 9.59176 22.7231 9.45568 22.6597C9.31961 22.5963 9.17221 22.5607 9.02217 22.5551C8.87214 22.5495 8.7225 22.574 8.58208 22.6272C8.44166 22.6803 8.31331 22.761 8.20457 22.8646C8.09583 22.9681 8.00892 23.0923 7.94895 23.23C7.88899 23.3676 7.85718 23.5159 7.8554 23.666C7.85362 23.8161 7.88191 23.9651 7.93861 24.1041C7.9953 24.2432 8.07925 24.3694 8.1855 24.4755L9.9 26.2755C10.0051 26.3858 10.1314 26.4736 10.2714 26.5336C10.4115 26.5935 10.5622 26.6245 10.7145 26.6245C10.8668 26.6245 11.0175 26.5935 11.1576 26.5336C11.2976 26.4736 11.4239 26.3858 11.529 26.2755L15.8145 21.7755ZM19.5 22.875C19.2016 22.875 18.9155 22.9935 18.7045 23.2045C18.4935 23.4155 18.375 23.7016 18.375 24C18.375 24.2984 18.4935 24.5845 18.7045 24.7955C18.9155 25.0065 19.2016 25.125 19.5 25.125H27C27.2984 25.125 27.5845 25.0065 27.7955 24.7955C28.0065 24.5845 28.125 24.2984 28.125 24C28.125 23.7016 28.0065 23.4155 27.7955 23.2045C27.5845 22.9935 27.2984 22.875 27 22.875H19.5Z"
                fill="#0094FF"
              />
            </svg>

            <h1>Ringkasan Pesanan</h1>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <h1 className="col-span-2">Paket Gunung Bromo</h1>
            <div className="bg-color-black h-32 rounded-lg relative overflow-hidden">
              <Image
                src="/images/bromo.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm text-[#808080] font-semibold">
                1x Paket Gunung Bromo
              </h3>
              <p className="text-xs font-medium text-[#808080]">
                Lorem ipsum dolor sit amet uncanario lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <span className="flex flex-col text-sm bg-[#D9D9D9] text-[#808080] p-2 -mx-4">
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
            <div className="flex gap-2 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_383_6)">
                  <path
                    d="M21.4998 4.00008H18.8332V6.00008C18.8332 6.19268 18.7952 6.3834 18.7215 6.56135C18.6478 6.73929 18.5398 6.90097 18.4036 7.03717C18.2674 7.17336 18.1057 7.28139 17.9278 7.3551C17.7498 7.42881 17.5591 7.46674 17.3665 7.46674C17.1739 7.46674 16.9832 7.42881 16.8052 7.3551C16.6273 7.28139 16.4656 7.17336 16.3294 7.03717C16.1932 6.90097 16.0852 6.73929 16.0115 6.56135C15.9378 6.3834 15.8998 6.19268 15.8998 6.00008V4.00008H8.13318V6.00008C8.13318 6.38906 7.97866 6.76211 7.7036 7.03717C7.42855 7.31222 7.0555 7.46674 6.66651 7.46674C6.27753 7.46674 5.90448 7.31222 5.62942 7.03717C5.35437 6.76211 5.19985 6.38906 5.19985 6.00008V4.00008H2.53318C2.37453 3.99827 2.21713 4.0283 2.07028 4.08838C1.92344 4.14847 1.79013 4.23739 1.67825 4.34989C1.56638 4.4624 1.47819 4.59619 1.41892 4.74336C1.35965 4.89054 1.33049 5.0481 1.33318 5.20674V20.1267C1.33053 20.2826 1.35861 20.4374 1.41581 20.5824C1.47301 20.7274 1.55821 20.8597 1.66655 20.9718C1.77489 21.0838 1.90425 21.1734 2.04722 21.2355C2.1902 21.2975 2.344 21.3308 2.49985 21.3334H21.4998C21.6557 21.3308 21.8095 21.2975 21.9525 21.2355C22.0954 21.1734 22.2248 21.0838 22.3331 20.9718C22.4415 20.8597 22.5267 20.7274 22.5839 20.5824C22.6411 20.4374 22.6692 20.2826 22.6665 20.1267V5.20674C22.6692 5.0509 22.6411 4.89607 22.5839 4.75108C22.5267 4.60609 22.4415 4.47379 22.3331 4.36174C22.2248 4.24968 22.0954 4.16007 21.9525 4.09802C21.8095 4.03596 21.6557 4.00268 21.4998 4.00008ZM6.66651 17.3334H5.33318V16.0001H6.66651V17.3334ZM6.66651 14.0001H5.33318V12.6667H6.66651V14.0001ZM6.66651 10.6667H5.33318V9.33341H6.66651V10.6667ZM10.6665 17.3334H9.33318V16.0001H10.6665V17.3334ZM10.6665 14.0001H9.33318V12.6667H10.6665V14.0001ZM10.6665 10.6667H9.33318V9.33341H10.6665V10.6667ZM14.6665 17.3334H13.3332V16.0001H14.6665V17.3334ZM14.6665 14.0001H13.3332V12.6667H14.6665V14.0001ZM14.6665 10.6667H13.3332V9.33341H14.6665V10.6667ZM18.6665 17.3334H17.3332V16.0001H18.6665V17.3334ZM18.6665 14.0001H17.3332V12.6667H18.6665V14.0001ZM18.6665 10.6667H17.3332V9.33341H18.6665V10.6667Z"
                    fill="#0094FF"
                  />
                  <path
                    d="M6.66667 6.66659C6.84348 6.66659 7.01305 6.59635 7.13807 6.47132C7.2631 6.3463 7.33333 6.17673 7.33333 5.99992V1.99992C7.33333 1.82311 7.2631 1.65354 7.13807 1.52851C7.01305 1.40349 6.84348 1.33325 6.66667 1.33325C6.48986 1.33325 6.32029 1.40349 6.19526 1.52851C6.07024 1.65354 6 1.82311 6 1.99992V5.99992C6 6.17673 6.07024 6.3463 6.19526 6.47132C6.32029 6.59635 6.48986 6.66659 6.66667 6.66659Z"
                    fill="#0094FF"
                  />
                  <path
                    d="M17.3337 6.66659C17.5105 6.66659 17.68 6.59635 17.8051 6.47132C17.9301 6.3463 18.0003 6.17673 18.0003 5.99992V1.99992C18.0003 1.82311 17.9301 1.65354 17.8051 1.52851C17.68 1.40349 17.5105 1.33325 17.3337 1.33325C17.1568 1.33325 16.9873 1.40349 16.8623 1.52851C16.7372 1.65354 16.667 1.82311 16.667 1.99992V5.99992C16.667 6.17673 16.7372 6.3463 16.8623 6.47132C16.9873 6.59635 17.1568 6.66659 17.3337 6.66659Z"
                    fill="#0094FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_383_6">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="font-semibold text-[#808080]">
                Berlaku pada 13 Maret 2024
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3284 22.5001C17.4134 22.5001 16.1281 22.1691 14.2034 21.0938C11.8629 19.7813 10.0526 18.5696 7.72481 16.2479C5.48044 14.0049 4.38825 12.5527 2.85965 9.77115C1.13278 6.63052 1.42715 4.98427 1.75622 4.28068C2.14809 3.43974 2.72653 2.93677 3.47419 2.43755C3.89885 2.15932 4.34825 1.92081 4.81669 1.72505C4.86356 1.7049 4.90715 1.68568 4.94606 1.66833C5.17809 1.5638 5.52965 1.40583 5.97497 1.57458C6.27215 1.68615 6.53747 1.91443 6.95278 2.32458C7.8045 3.16458 8.9684 5.03537 9.39778 5.95412C9.68606 6.57333 9.87684 6.98208 9.87731 7.44052C9.87731 7.97724 9.60731 8.39115 9.27965 8.83787C9.21825 8.92177 9.15731 9.00193 9.09825 9.07974C8.74153 9.54849 8.66325 9.68396 8.71481 9.92583C8.81934 10.4119 9.59887 11.859 10.88 13.1372C12.1611 14.4155 13.5664 15.1458 14.0543 15.2499C14.3065 15.3038 14.4448 15.2222 14.9286 14.8529C14.9979 14.7999 15.0692 14.7451 15.1437 14.6902C15.6434 14.3185 16.0381 14.0555 16.5622 14.0555H16.565C17.0211 14.0555 17.4115 14.2533 18.0584 14.5796C18.9022 15.0052 20.8292 16.1541 21.6743 17.0068C22.0854 17.4211 22.3147 17.6855 22.4267 17.9822C22.5954 18.429 22.4365 18.7791 22.3329 19.0135C22.3156 19.0524 22.2964 19.0951 22.2762 19.1424C22.0789 19.61 21.839 20.0585 21.5595 20.4821C21.0612 21.2274 20.5564 21.8044 19.7136 22.1968C19.2808 22.4015 18.8071 22.5052 18.3284 22.5001Z"
                  fill="#0094FF"
                />
              </svg>

              <p className="font-semibold text-[#1E9400]">
                Tidak perlu reservasi
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0049 7H2.00488V4C2.00488 3.73478 2.11024 3.48043 2.29778 3.29289C2.48531 3.10536 2.73967 3 3.00488 3H21.0049C21.2701 3 21.5245 3.10536 21.712 3.29289C21.8995 3.48043 22.0049 3.73478 22.0049 4V7ZM22.0049 9V20C22.0049 20.2652 21.8995 20.5196 21.712 20.7071C21.5245 20.8946 21.2701 21 21.0049 21H3.00488C2.73967 21 2.48531 20.8946 2.29778 20.7071C2.11024 20.5196 2.00488 20.2652 2.00488 20V9H22.0049ZM11.0049 14V11.5L6.50488 16H17.0049V14H11.0049Z"
                  fill="#0094FF"
                />
              </svg>

              <p className="text-[#808080]">Tidak bisa refund</p>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
