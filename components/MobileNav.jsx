"use client"

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'

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

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
    <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-orange-400'></CiMenuFries>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        {/*Logo*/}
        <div className='mt-32 mb-40 text-center text-2xl flex justify-center items-center'>
        <Link href="/app/page">
            <img className="text4xl font-semibold" src="/assets/lion3.svg" alt="logo" width="150px"/>
        </Link>
        </div>
        {/* nav */}
        <nav className='flex flex-col justify-center items-center gap-8'>
            {links.map((link, index)=> {
                return <Link href={link.path} key={index} className={`${link.path === pathname && "text-orange-400 border-b-2 border-orange-400"} text-xl capitalize hover:text-orange-400 transition-all`}>
                {link.name}
                </Link>
            })}
        </nav>
    </SheetContent>
</Sheet>
  );
}

export default MobileNav