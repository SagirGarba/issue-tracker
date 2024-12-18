"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const pathName = usePathname();

  const links = [
    { title: "dashboard", href: "/" },
    { title: "issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 mb-5 px-5 border-b items-center h-16">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6 px-5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
               "text-zinc-900": link.href === pathName,
               "text-zinc-500": link.href !== pathName,
            "hover:text-zinc-800 transition-colors": true
            })}
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
