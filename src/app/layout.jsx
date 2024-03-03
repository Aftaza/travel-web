import "./styles/globals.css";
import { Poppins, Rakkas } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const rakkas = Rakkas({
    variable: '--font-rakkas',
    subsets: ['latin'],
    weight: '400'
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable} ${rakkas.variable}`}>
            {children}
        </html>
    );
}
