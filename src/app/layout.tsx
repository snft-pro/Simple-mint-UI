
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";
import Navbar from "@/../components/Navbar/Navbar";
import Footer from "@/../components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SNFT",
  description: "NFT Marketplace",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <script async src="https://tally.so/widgets/embed.js"></script>
      <ThirdwebProvider>
        <Navbar />
          {children}
          <Footer />
      </ThirdwebProvider>
      </body>
    </html>
  );
}
