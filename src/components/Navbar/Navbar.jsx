"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const navLinks = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/about",
      title: "About"
    },
    {
      path: "/contact",
      title: "Contact"
    },
    {
      path: "/news",
      title: "News"
    },
    {
      path: "/blog",
      title: "Blog"
    },
  ]
  const hadler = () => {
    router.push('/login')
  }
  return (
    <div className='bg-sky-600'>
      <nav className="container mx-auto flex justify-between ">
        <h6 className='text-3xl'>Next <span className='text-emerald-200'>Hero</span></h6>
        <ul className="flex justify-center items-center gap-5 text-2xl">
          {
            navLinks?.map((link) => <Link className={`${pathName === link.path && "text-white"}`} key={link.path} href={link.path} > {link.title} </Link>)
          }
        </ul>
        <button onClick={hadler} className='btn btn-primary'>Login</button>
      </nav>
    </div>
  )
}

export default Navbar