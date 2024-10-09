import Link from "next/link";
import { Input } from "../ui/input";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import ProfileDropdown from "../profile-dropdown/ProfileDropdown";
import { Search, ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";

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
          <div className="relative ">
            <Search className="h-4 w-4 absolute top-3 left-3 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
          <Link href="/cart">
            <Button variant="outline" size="icon" className="rounded-full relative">
              <ShoppingCart className="w-4 h-4" />
              <Badge className="size-[22px] rounded-full flex items-center justify-center absolute -top-2 text-xs shrink-0 -right-1">
                7
              </Badge>
            </Button>
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
