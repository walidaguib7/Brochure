"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";


type LinkType = {
  name: string;
  href: string;
};

const Links: LinkType[] = [
  { name: "home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Blog", href: "/Blogs" },
  { name: "About us", href: "/#about" },
];

const Header = () => {
  const path = usePathname();
  return (
    <div className="px-24">
      <div className="flex justify-between items-center">
        <Image
          className="cursor-pointer"
          width={120}
          height={120}
          src={"/Webicien.png"}
          alt={""}
        />
        <nav className="flex justify-around items-center  gap-20">
          {Links.map((link) => {
            return (
              <Link
                href={link.href}
                className={`font-medium text-[16px] hover:text-[#0080E1] ${
                  path === link.href ? "text-[#0080E1]" : "text-black"
                }`}>
                {link.name}
              </Link>
            );
          })}
        </nav>

      </div>
    </div>
  );
};

export default Header;
