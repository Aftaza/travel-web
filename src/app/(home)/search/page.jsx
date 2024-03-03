import { CardTravel } from '@/components/card'
import Image from 'next/image'
import React from 'react'

const SearchPage = () => {
  return (
    <main className="relative flex flex-col h-full pt-16">
        <Image src="/images/search-bg.jpeg" alt='Bg search page' width={500} height={1000} className='absolute object-cover inset-0 h-full w-full -z-10 brightness-50' />
        <div className="flex flex-col items-center w-full pt-20 gap-20">
            <h1 className='text-5xl font-bold text-color-white'>TOURS</h1>
            <div className='flex flex-col items-center gap-10'>
                <div className='w-full px-80'>
                    <input type="text" className='w-full outline-none px-5 py-2 text-md rounded-lg bg-[transparent] border-2 border-color-white text-color-white' placeholder='Ide apa yang harus dilakukan untuk perjalanan' />
                </div>
                <div className='flex justify-between items-center w-full gap-10 text-color-white px-48'>
                    <button>Price High to Low</button>
                    <button>Price Low to High</button>
                    <button>category</button>
                </div>
                <div className='flex flex-col gap-10 items-center'>
                    <div className='flex items-center gap-5'>
                        <CardTravel />
                        <CardTravel />
                        <CardTravel />
                    </div>
                    <div className='flex items-center gap-5'>
                        <CardTravel />
                        <CardTravel />
                        <CardTravel />
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default SearchPage