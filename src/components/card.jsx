import Image from 'next/image'
import React from 'react'
import { Star } from './Star'

export const CardTravel = () => {
    return (
        <div className="rounded-2xl relative flex flex-col justify-end overflow-hidden h-96 flex-none w-[80vw] md:w-fit">
            <p className="rounded-xl py-1 px-2 bg-color-black bg-opacity-80 w-fit absolute left-2 top-2 text-color-white font-semibold flex gap-1 items-center">
            4.9
            <Star className="w-4 -mt-[2px]" />
            </p>
            <Image
            src="/images/candipenataran.png"
            fill
            alt="Candi Penataran"
            className="object-cover -z-10"
            quality={100}
            />
            <div className="m-2 rounded-xl bg-color-fourty bg-opacity-85 h-fit flex flex-col gap-2 justify-between p-2 leading-none text-color-white">
            <div className="flex flex-col">
                <h1 className="font-semibold">Candi Penataran, Blitar</h1>
                <p className="">Indonesia</p>
            </div>
            <p className="text-sm">
                Untuk 1 orang tiket pesawat, makan siang, makan....
            </p>
            <div className="flex justify-between gap-2 items-center">
                <h3 className="font-semibold">Rp. 900.000</h3>
                <button className="py-2 px-4 rounded-2xl bg-color-primary text-color-black font-semibold text-sm">
                Pesan
                </button>
            </div>
            </div>
        </div>
    )
}

export const TiktokCard = () => {
    return (
        <>
            <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@firasaff802/video/7313029291170598149" data-video-id="7313029291170598149" style={{ minWidth: "450", minHeight: "550" }}> 
                <section className='p-10'> 
                    <a target="_blank" title="@firasaff802" href="https://www.tiktok.com/@firasaff802?refer=embed">@firasaff802</a> 
                        Bromo makin cantik tapi gaboleh di naikin🥹😍 
                    <a title="bromotenggersemeru" target="_blank" href="https://www.tiktok.com/tag/bromotenggersemeru?refer=embed">#bromotenggersemeru</a> 
                    <a title="capcut" target="_blank" href="https://www.tiktok.com/tag/capcut?refer=embed">#CapCut</a> 
                    <a title="foryoupage" target="_blank" href="https://www.tiktok.com/tag/foryoupage?refer=embed">#foryoupage</a> 
                    <a target="_blank" title="♬ suara asli  - Firasaff802" href="https://www.tiktok.com/music/suara-asli-Firasaff802-7313029360918153990?refer=embed">♬ suara asli  - Firasaff802</a> 
                </section> 
            </blockquote> 
            <script async src="https://www.tiktok.com/embed.js"></script>
        </>
    )
}

export const MapCard = () => {
    return (
        <>
            <iframe className='border-none w-full h-[450px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31612.36339577289!2d112.93241250237112!3d-7.942450438855476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sMt%20Bromo!5e0!3m2!1sen!2sid!4v1709450098010!5m2!1sen!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

