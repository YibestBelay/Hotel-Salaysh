import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Notification from "@/components/Notification";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthoProvider from "@/components/AuthoProvider";
import Queryprovider from "@/components/Queryprovider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salaysh Grand",
  description: "Salaysh Hotel and Spa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthoProvider>
          <Queryprovider>
            <div>
              <Notification />
              <NavBar />
              {children}  
              <Footer />
              <ToastContainer  position="bottom-right" theme="dark" autoClose={3000} />
            </div>
            
          </Queryprovider>
        </AuthoProvider>
      </body>
    </html>
  );
}
