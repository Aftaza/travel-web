import Footer from "@/components/footer";
import Headers from "@/components/headers";

export const metadata = {
  title: "Explorin",
  description: "Enjoy your traveling with our services",
};

export default function RootLayout({ children }) {
  return (
    <body className="relative">
      <Headers />
      {children}
      <Footer />
    </body>
  );
}
