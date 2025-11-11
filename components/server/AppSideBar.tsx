import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Notes", href: "/notes" },
  { title: "Projects", href: "/projects" },
];

export function AppSidebar() {
  return (
    <Sidebar className="static top-auto h-full">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((it) => (
              <SidebarMenuItem key={it.title}>
                <SidebarMenuButton asChild>
                  <Link href={it.href}>{it.title}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
