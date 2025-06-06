import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import data from "@/lib/data";
import Search from "./search";

const Header = async () => {
  return (
    <header className="bg-black text-white">
      <div className="p-2">
        <div className="flex items-center p-2 justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center header-button font-extrabold text-2xl m-1"
            >
              <Image
                src={"/icons/logo.svg"}
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
              />
              {APP_NAME}
            </Link>
          </div>
          <div className="hidden md:block flex-1 max-w-xl">
            <Search />
          </div>
          <Menu />
        </div>

        <div className="md:hidden block py-2">
          <Search />
        </div>
      </div>
      <div className="flex items-center bg-gray-800 gap-3">
        <Button
          variant="ghost"
          className="header-button flex items-center gap-1 text-base [&_svg]: size-12"
        >
          <MenuIcon />
          All
        </Button>
        <div className="flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]">
          {data.headerMenus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className="header-button !p-1"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
