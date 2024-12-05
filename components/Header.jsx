import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="#">
                    <img className="text4xl font-semibold" src="/assets/lion3.svg" alt="logo" width="150px"/>
                </Link>
                
                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button className="rounded-full text-primary font-bold">Contáctame!</Button>
                    </Link>
                </div>
                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav></MobileNav>
                </div>
            </div>
        </header>
    )
}

export default Header