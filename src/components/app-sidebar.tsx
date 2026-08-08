"use client"

import * as React from "react"

import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { FullTechLogo } from "./fulltech-logo"
import { usePathname } from "next/navigation"
import { Role, ServerSession } from "@/lib/get-server-session"
import { menuByRole } from "@/lib/menu-config"



interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  role:  Role;
  username: string;
  user: ServerSession["user"]
}

export function AppSidebar({ ...props }: AppSidebarProps) {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" {...props} variant="floating">
      <SidebarHeader className="w-full flex justify-center items-center">
        <div className="w-fit">
          <FullTechLogo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects menus={menuByRole[props.role]} pathname={pathname} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={props.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
