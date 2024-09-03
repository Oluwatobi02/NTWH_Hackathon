"use client";
import React, { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import VoiceAI from "../vapi/vapi";

const navItems: NavItem[] = [
    { title: "Home", active: false, link: "/" },
    { title: "About Us", active: false, link: "/about" },
    { title: "Events", active: false, link: "/events" },
    { title: "Contact Us", active: false, link: "/contact" },
];
export default function NavBar() {
    const pathname = usePathname()
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(pathname);
    }, [pathname]);


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image
                        width={150}
                        height={100}
                        className="bg-black"
                        src={"https://www.morgan.edu/Images/Shared/morgan-logo-header.png"}
                        alt="Logo"
                    />
                    <p className="font-bold text-inherit"></p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {navItems.map((navitem, index) => (
                    <NavbarItem isActive={active === navitem.link} key={index}>
                        <div
                            onClick={() => router.push(navitem.link)}
                            aria-current="page"
                            className={active === navitem.link ? "text-blue-500 cursor-default" : "cursor-pointer"}
                        >
                            {navitem.title}
                        </div>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button color="primary" variant="flat" onClick={() => router.push('/membership')}>
                        Join us
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <VoiceAI />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {navItems.map((navitem, index) => (
                    <NavbarMenuItem key={`${navitem.title}-${index}`}>
                        <div
                            className={`w-full ${active === navitem.link ? "text-blue-500" : ""}`}
                        >
                            {navitem.title}
                        </div>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
