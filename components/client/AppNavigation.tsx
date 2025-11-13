"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { DarkModeButton } from "@/components/client/DarkModeButton";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SetStateAction, useState, Dispatch } from "react";
import { usePathname } from "next/navigation";

const components = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Notes", url: "#" },
  { title: "Projects", url: "#" },
];

function useActiveLinkStyle() {
  const currPath = usePathname();

  const getLinkStyle = (href: string): string => {
    if (href == "/") {
      return currPath == "/" ? "text-primary" : "";
    }

    const isActive = currPath == href || currPath.startsWith(href + "/");

    return isActive ? "text-primary" : "";
  };

  return { getLinkStyle };
}

function AppNavigationMenuPc() {
  const { getLinkStyle } = useActiveLinkStyle();

  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList className="flex-wrap">
        {components.map((comp) => (
          <NavigationMenuItem key={comp.title}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href={comp.url} className={getLinkStyle(comp.url)}>
                {comp.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function AppNavigationMenuMobile({
  setShowNaviMenu,
}: {
  setShowNaviMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const { getLinkStyle } = useActiveLinkStyle();

  return (
    <div className="fixed inset-0 z-10 bg-card">
      <X className="absolute right-4 top-4 text-muted-50" onClick={() => setShowNaviMenu(false)} />

      <div className="flex h-full flex-col items-center justify-center gap-10">
        {components.map((cmp) => (
          <Link
            key={cmp.title}
            href={cmp.url}
            className={getLinkStyle(cmp.url)}
            onClick={() => setShowNaviMenu(false)}
          >
            {cmp.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function AppNavigation() {
  const [showNaviMenu, setShowNaviMenu] = useState(false);

  return (
    <>
      {/* mobile */}
      <header className="flex flex-col md:hidden w-full items-center justify-between text-muted-foreground">
        <div className="flex w-full justify-between px-5 pt-5">
          <Menu onClick={() => setShowNaviMenu(!showNaviMenu)} />
          <DarkModeButton />
        </div>
        {showNaviMenu && <AppNavigationMenuMobile setShowNaviMenu={setShowNaviMenu} />}
      </header>

      {/* desktop */}
      <header className="hidden md:flex w-full md:max-w-7xl mx-auto px-6 py-5 text-center text-muted-foreground">
        <AppNavigationMenuPc />
        <DarkModeButton />
      </header>
    </>
  );
}
