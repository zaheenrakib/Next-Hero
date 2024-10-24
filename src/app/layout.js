import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
  title: "Next-Hero",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-red-500">
          <ul className="flex justify-center items-center gap-5">
            <Link href="/" ><li>Home</li></Link>
           <Link href="/about" > <li>About</li></Link>
            <Link href="/contact" ><li>Contact</li></Link>
            <Link href="/news" ><li>News</li></Link>
            <Link href="/blog" ><li>Blog</li></Link>
            <Link href="/login" ><li>Login</li></Link>
          </ul>
        </nav>
        <div className="h-screen">
        {children}
        </div>
        <footer className="flex justify-center">
          This Is Footer Part
        </footer>
      </body>
    </html>
  );
}
