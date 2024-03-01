import React from 'react'

const DetailWisata = () => {
    return (
        <main className='flex flex-col'>
            <section className='relatve flex flex-col h-[100vh] pt-16 drop-shadow-lg'>
                <video
                    autoPlay
                    loop
                    muted
                    
                    className='absolute object-cover inset-0 h-full w-full -z-10 brightness-50'
                >
                    <source src='/videos/bromoBg.mp4' type='video/mp4' />
                </video>
                <div className='flex flex-col gap-1 justify-center items-center h-full w-full text-2xl text-white'>
                    <h2 className='font-bold'>Gunung Bromo, Jawa Timur</h2>
                    <h3 className='font-semibold'>Indonesia</h3>
                </div>
            </section>
        </main>
    )
}

export default DetailWisata