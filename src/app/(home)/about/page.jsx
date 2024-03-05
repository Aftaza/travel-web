import Image from "next/image";

export default function About() {
  return (
    <main className="relative h-[512vh] flex flex-col gap-24 w-full bg-gradient-to-t from-color-black pt-16 overflow-hidden">
      <Image
        src="/images/bgAbout.png"
        fill
        alt="Background"
        className="-z-10 absolute object-cover md:object-auto"
      />
      <section className="flex flex-col gap-4 items-center pb-12 px-8">
        <h1 className="text-color-white font-extrabold text-[72px] drop-shadow-xl">TIM</h1>
        <div className="w-full flex flex-col md:flex-row gap-4 justify-around">
          <div className="h-[400px] md:w-1/4 relative bg-color-fourty -translate-x-8 translate-y-8 bg-opacity-0 outline outline-color-white">
            <div className="h-[400px] bg-color-fourty relative -translate-y-8 translate-x-8"></div>
          </div>
          <div className="h-[400px] md:w-1/4 relative bg-color-fourty -translate-x-8 translate-y-8 md:translate-y-24 bg-opacity-0 outline outline-color-white">
            <div className="h-[400px] bg-color-fourty relative -translate-y-8 translate-x-8"></div>
          </div>
          <div className="h-[400px] md:w-1/4 relative bg-color-fourty translate-x-8 translate-y-8 bg-opacity-0 outline outline-color-white">
            <div className="h-[400px] bg-color-fourty relative -translate-y-8 -translate-x-8"></div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 items-center">
      <h1 className="text-color-white font-extrabold text-[72px] drop-shadow-xl">REFERENSI</h1>
      <div className="flex flex-col gap-2 items-center text-center w-[80vw] md:px-12 md:w-full">
      <a href="https://eastjava.travel/" className="text-color-white font-bold text-xl">https://eastjava.travel/</a>
      <a href="https://www.indonesia.travel/id/id/ide-liburan/6-aktivitas-seru-yang-wajib-dicoba-saat-ke-taman-nasional-bromo-tengger-semeru" className="text-color-white font-bold text-xl">https://www.indonesia.travel/id/id/ide-liburan/6-aktivitas-seru-yang-wajib-dicoba-saat-ke-taman-nasional-bromo-tengger-semeru</a>
      <a href="https://www.blitarkab.go.id/2012/06/06/wisata-candi-penataran/" className="text-color-white font-bold text-xl">https://www.blitarkab.go.id/2012/06/06/wisata-candi-penataran/</a>
      </div>
      </section>
    </main>
  );
}
