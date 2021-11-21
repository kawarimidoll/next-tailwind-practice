import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: Props) => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <div>
      <nav className="flex p-2 font-bold text-white bg-red-500 flex-rows">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <a className="mx-2">{link.text}</a>
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
