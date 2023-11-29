"use client";

import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 h-14 items-center p-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classnames({
                  "text-gray-900": link.href === currentPath,
                  "text-gray-500": link.href !== currentPath,
                  "hover:text-gray-800 transition-colors": true,
                })}
              >
                {link.lable}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;