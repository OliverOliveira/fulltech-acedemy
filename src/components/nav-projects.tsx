"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { MenuSection } from "@/lib/menu-config"

export function NavProjects(
  { menus, pathname }: { menus: MenuSection[], pathname: string }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="mb-3">
        <span className="relative text-xl font-caveat font-bold">
          {menus[1].title}
          <svg
            width="67"
            height="8"
            viewBox="0 0 67 8"
            fill="none"
            className="absolute -bottom-1 -left-2 -right-2 w-full text-primary"
          >
            <path d="M1.00024 4.94464C1.00024 4.94464 13.574 2.23144 21.5002 1.44458C29.4668 0.653705 42.0002 1.44458 42.0002 1.44458M42.0002 1.44458C42.0002 1.44458 27.0002 3.44464 16.5002 6.44464M42.0002 1.44458C42.0002 1.44458 57.0002 0.444279 66.0002 1.44458" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>

      </SidebarGroupLabel>
      <SidebarMenu>
        {menus[0].items.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton render={<a href={item.href}></a>} tooltip={item.label} className={`h-12 ${item.href === pathname ? "bg-primary font-medium text-white hover:text-white" : ""} hover:bg-primary/50`}>
              {item.icon}
              <span>{item.label}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
