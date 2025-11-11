"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { DarkModeButton } from "@/components/client/DarkModeButton";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { Menu } from "lucide-react";

const components = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Notes", url: "#" },
  { title: "Projects", url: "#" },
];

function AppNavigationMenu() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile} className="mx-auto">
      <NavigationMenuList className="flex-wrap">
        {components.map((comp) => (
          <NavigationMenuItem key={comp.title}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={comp.url}>{comp.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function AppNavigation() {
  return (
    <>
      {/* mobile */}
      <header className="flex md:hidden w-full items-center justify-between px-6 py-4 text-muted-foreground">
        <Menu />
        <DarkModeButton />
      </header>

      {/* desktop */}
      <header className="hidden md:flex w-full md:max-w-7xl mx-auto px-6 py-5 text-center text-muted-foreground">
        <AppNavigationMenu />
        <DarkModeButton />
      </header>
    </>
  );
}
