import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero"
  },
  description: "Super Powerful Next Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar/>
        <div >
        {children}
        </div>
        <footer className="flex justify-center bg-blue-500">
          <h1>This Is Footer Part</h1>
        </footer>
      </body>
    </html>
  );
}
