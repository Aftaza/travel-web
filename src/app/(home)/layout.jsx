
export const metadata = {
    title: "Travel Website",
    description: "Enjoy your traveling with our services",
};

export default function RootLayout({ children }) {
    return (
        <body>
            {children}
        </body>
    );
}