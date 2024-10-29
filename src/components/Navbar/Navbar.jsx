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
    {
      path: "/categories",
      title: "Category"
    },
  ]
  const hadler = () => {
    router.push('/login')
  }
  if (pathName.includes('dashboard')) {
    return <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Navbar Title</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li><a>Navbar Item 1</a></li>
                <li><a>Navbar Item 2</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </>
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