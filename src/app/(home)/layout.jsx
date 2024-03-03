import Footer from "@/components/footer";
import Headers from "@/components/headers";

export const metadata = {
  title: "Travel Website",
  description: "Enjoy your traveling with our services",
};

export default function RootLayout({ children }) {
  return (
    <body>
        <Headers/>
        {children}
        <Footer />
    </body>
  );
}
