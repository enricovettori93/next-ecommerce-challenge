import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartContextProvider from "@/contexts/cart.context";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'swiper/css';
import Header from "@/app/_components/header";
import UiContextProvider from "@/contexts/ui.context";
import Box from "@mui/material/Box";
import SlideCart from "@/app/_components/slide-cart";
import Footer from "@/app/_components/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <UiContextProvider>
          <CartContextProvider>
              <Header />
              <SlideCart />
              <Box className="main-container" px={3}>
                  {children}
              </Box>
              <ToastContainer pauseOnHover={false} />
              <Footer />
          </CartContextProvider>
      </UiContextProvider>
      </body>
    </html>
  );
}
