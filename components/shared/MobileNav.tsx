"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/assets/images/logo.png" alt="logo" width={70} height={5} />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu-icon"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-80">
              <>
                <Image
                  src="/assets/images/logo.png"
                  alt="logo"
                  width={150}
                  height={20}
                />
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        className={` ${
                          isActive
                            ? "bg-orange-500 text-white rounded-full w-full"
                            : "text-gray-700"
                        } flex whitespace-nowrap hover:-translate-y-1 hover:scale-90 hover:bg-orange-200 duration-300 hover:rounded-full hover:w-full`}
                        key={link.route}
                      >
                        <Link href={link.route} className="sidebar-link">
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                            className={`${
                              isActive && "brightness-200 bg-none text-2xl"
                            }`}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="button bg-orange-500 bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
