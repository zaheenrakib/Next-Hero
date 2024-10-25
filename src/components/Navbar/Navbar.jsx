import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-red-500">
        <ul className="flex justify-center items-center gap-5">
          <Link href="/" ><li>Home</li></Link>
          <Link href="/about" > <li>About</li></Link>
          <Link href="/contact" ><li>Contact</li></Link>
          <Link href="/news" ><li>News</li></Link>
          <Link href="/blog" ><li>Blog</li></Link>
          <Link href="/login" ><li>Login</li></Link>
        </ul>
      </nav></div>
  )
}

export default Navbar