import Image from "next/image"

export default function About() {
    return (
        <main className="relative h-[512vh] w-full">
            <Image src="/images/bgAbout.png" fill alt="Background" className="-z-10"/>
            <h1>Haloo</h1>

        </main>
    )
}