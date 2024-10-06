import Link from "next/link";
import { Input } from "../ui/input";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import ProfileDropdown from "../profile-dropdown/ProfileDropdown";

const navLinks = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/about",
  },
  {
    id: 3,
    label: "Menu",
    href: "/menu",
  },
  {
    id: 4,
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <header className="bg-white shadow-md h-16 flex items-center justify-center">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h2 className="text-3xl font-bold ">
            <span className="text-primary">Zo</span>mo
          </h2>
        </Link>
        <ul className="hidden lg:flex items-center gap-x-8 ">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-wider hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-6">
          <Input className="h-9" placeholder="Search" />
          <Link href="/cart">
            <div className="border border-primary inline-block p-2 rounded-full text-primary relative">
              <span className="absolute -top-1 right-0 bg-primary text-white size-4 p-2 rounded-full inline-flex items-center justify-center text-xs">
                5
              </span>
              <IoCartOutline className="size-5" />
            </div>
          </Link>
          {true ? (
            <Link href="/sign-up">
              <Button size="sm">Register now</Button>
            </Link>
          ) : (
            <ProfileDropdown />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
