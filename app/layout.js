import { Barlow } from "next/font/google";
import "./globals.css";
import connectMongodb from "@/services/ConnectMongoose";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fontStyle = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Interactify",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  await connectMongodb();

  return (
    <html lang="en">
      <body className={`${fontStyle.className} bg-dark-deeper`}>
        <AuthProvider>
          <Navbar />
          {children}
          <ToastContainer theme="colored" position="top-center" />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
