import { ReactNode } from "react";
import { Role } from "./get-server-session";
import { LayoutDashboard, BookOpen, Users, GraduationCap, Wallet, Award, Settings, User } from "lucide-react";


export interface MenuItem {
  label: string;
  href: string;
  icon: ReactNode;
}
export interface MenuSection {
  title?: string;
  items: MenuItem[];
}

export const menuByRole: Record<Role, MenuSection[]> = {
  student: [
    { items: [
      { label: "Início", href: "/dashboard", icon: <LayoutDashboard /> },
      { label: "Meus Cursos", href: "/dashboard/my-courses", icon: <BookOpen /> },
      { label: "Catálogo", href: "/dashboard/courses", icon: <GraduationCap /> },
      { label: "Certificados", href: "/dashboard/certificates", icon: <Award /> },
    ]},
    { title: "Menu do Aluno", items: [{ label: "Perfil", href: "/dashboard/profile", icon: <User /> }] },
  ],
  instructor: [
    { items: [
      { label: "Início", href: "/dashboard", icon: <LayoutDashboard /> },
      { label: "Meus Cursos", href: "/dashboard/my-courses", icon: <BookOpen /> },
      { label: "Financeiro", href: "/dashboard/earnings", icon: <Wallet /> },
    ]},
    { title: "Menu do Instrutor", items: [{ label: "Perfil", href: "/dashboard/profile", icon: <User /> }] },
  ],
  admin: [
    { items: [
      { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard /> },
      { label: "Usuários", href: "/dashboard/admin/users", icon: <Users /> },
      { label: "Cursos", href: "/dashboard/admin/courses", icon: <BookOpen /> },
      { label: "Pagamentos", href: "/dashboard/admin/payments", icon: <Wallet /> },
      { label: "Certificados", href: "/dashboard/admin/certificates", icon: <Award /> },
      { label: "Configurações", href: "/dashboard/admin/settings", icon: <Settings /> },
    ]},
    { title: "Menu do Admin", items: [{ label: "Perfil", href: "/dashboard/profile", icon: <User /> }] },
  ],
};