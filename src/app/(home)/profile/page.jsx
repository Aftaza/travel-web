import Image from "next/image";
import Link from "next/link";
export default function Profile() {
  return (
    <main className="flex flex-col bg-[#E7E7E7]">
      <header className="relative h-48 bg-color-black">
        <span className="flex justify-center absolute inset-x-0 -bottom-12">
          <div className="w-24 h-24 rounded-full bg-color-fourty"></div>
        </span>
      </header>
      <section className="flex flex-col gap-4 items-center pt-12 min-h-screen">
        <div className="flex flex-col gap-3 font-bold items-center pt-2">
          <h1 className="text-lg leading-none">Hendy Kurniawan</h1>
          <h3 className="text-sm text-[#808080] leading-none">
            Surabaya, Jawa Timur
          </h3>
          <p className="font-light text-sm">
            Saya senang sekali traveling keliling Indonesia terutama wisata
            candi
          </p>
          <div className="flex gap-3">
            <button className="py-1 px-4 outline outline-1">
              Edit Profile
            </button>
            <button className="py-1 px-4 outline outline-1">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.791 20C14.9577 20 14.2493 19.7083 13.666 19.125C13.0827 18.5417 12.791 17.8333 12.791 17C12.791 16.8833 12.7993 16.7623 12.816 16.637C12.8327 16.5117 12.8577 16.3993 12.891 16.3L5.84102 12.2C5.55768 12.45 5.24102 12.646 4.89102 12.788C4.54102 12.93 4.17435 13.0007 3.79102 13C2.95768 13 2.24935 12.7083 1.66602 12.125C1.08268 11.5417 0.791016 10.8333 0.791016 10C0.791016 9.16667 1.08268 8.45833 1.66602 7.875C2.24935 7.29167 2.95768 7 3.79102 7C4.17435 7 4.54102 7.071 4.89102 7.213C5.24102 7.355 5.55768 7.55067 5.84102 7.8L12.891 3.7C12.8577 3.6 12.8327 3.48767 12.816 3.363C12.7993 3.23833 12.791 3.11733 12.791 3C12.791 2.16667 13.0827 1.45833 13.666 0.875C14.2493 0.291667 14.9577 0 15.791 0C16.6243 0 17.3327 0.291667 17.916 0.875C18.4993 1.45833 18.791 2.16667 18.791 3C18.791 3.83333 18.4993 4.54167 17.916 5.125C17.3327 5.70833 16.6243 6 15.791 6C15.4077 6 15.041 5.92933 14.691 5.788C14.341 5.64667 14.0243 5.45067 13.741 5.2L6.69102 9.3C6.72435 9.4 6.74935 9.51267 6.76602 9.638C6.78268 9.76333 6.79102 9.884 6.79102 10C6.79102 10.1167 6.78268 10.2377 6.76602 10.363C6.74935 10.4883 6.72435 10.6007 6.69102 10.7L13.741 14.8C14.0243 14.55 14.341 14.3543 14.691 14.213C15.041 14.0717 15.4077 14.0007 15.791 14C16.6243 14 17.3327 14.2917 17.916 14.875C18.4993 15.4583 18.791 16.1667 18.791 17C18.791 17.8333 18.4993 18.5417 17.916 19.125C17.3327 19.7083 16.6243 20 15.791 20Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-3">
            <Link href="" className="text-[#0087C1]">
              Riwayat Perjalanan
            </Link>
            <Link href="">Favorite</Link>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-64 h-72 bg-color-white rounded-2xl flex flex-col">
            <div className="rounded-xl relative h-1/2 overflow-hidden">
              <Image
                src="/images/candipenataran.png"
                fill
                alt="Candi"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col h-1/2 justify-between p-2">
              <div className="flex gap-4">
                <span className="h-8 w-8 bg-color-fourty"></span>
                <p>4.9 (90 Review)</p>
              </div>
              <h1>Candi Penataran, Blitar</h1>
              <h1 className="text-[#808080]">Indonesia</h1>
              <div className="flex gap-4 font-semibold">
                <button className="border border-[#0087C1] rounded-2xl p-2 w-1/2">Lihat detail</button>
                <button className="border border-[#0087C1] bg-[#0087C1] rounded-2xl p-2 w-1/2 text-color-white">Pesan</button>
              </div>
            </div>
          </div>
          <div className="w-64 h-72 bg-color-white rounded-2xl flex flex-col">
            <div className="rounded-xl relative h-1/2 overflow-hidden">
              <Image
                src="/images/candipenataran.png"
                fill
                alt="Candi"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col h-1/2 justify-between p-2">
              <div className="flex gap-4">
                <span className="h-8 w-8 bg-color-fourty"></span>
                <p>4.9 (90 Review)</p>
              </div>
              <h1>Candi Penataran, Blitar</h1>
              <h1 className="text-[#808080]">Indonesia</h1>
              <div className="flex gap-4 font-semibold">
                <button className="border border-[#0087C1] rounded-2xl p-2 w-1/2">Lihat detail</button>
                <button className="border border-[#0087C1] bg-[#0087C1] rounded-2xl p-2 w-1/2 text-color-white">Pesan</button>
              </div>
            </div>
          </div>
          <div className="w-64 h-72 bg-color-white rounded-2xl flex flex-col">
            <div className="rounded-xl relative h-1/2 overflow-hidden">
              <Image
                src="/images/candipenataran.png"
                fill
                alt="Candi"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col h-1/2 justify-between p-2">
              <div className="flex gap-4">
                <span className="h-8 w-8 bg-color-fourty"></span>
                <p>4.9 (90 Review)</p>
              </div>
              <h1>Candi Penataran, Blitar</h1>
              <h1 className="text-[#808080]">Indonesia</h1>
              <div className="flex gap-4 font-semibold">
                <button className="border border-[#0087C1] rounded-2xl p-2 w-1/2">Lihat detail</button>
                <button className="border border-[#0087C1] bg-[#0087C1] rounded-2xl p-2 w-1/2 text-color-white">Pesan</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

