"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: 'inicio',
    path: "/",
  },
  {
    name: 'sobre mi',
    path: "/resume",
  },
  {
    name: 'trabajos',
    path: "/work",
  },
  {
    name: 'contacto',
    path: "/contact",
  }
]

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-orange-400 border-b-2 border-orange-400"} capitalize font-medium hover:text-orange-400 transition-all`}>
          {link.name}
        </Link>
      })}
    </nav>
  )
}

export default Nav
