// app/dashboard/components/Sidebar.tsx
"use client";
import { Role } from "@/lib/get-server-session";
import { menuByRole } from "@/lib/menu-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar({ role, userName }: { role: Role; userName: string }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r p-4">
      <p className="mb-6 text-sm text-muted-foreground">Olá, {userName}</p>
      {menuByRole[role].map((section, i) => (
        <div key={i} className="mb-6">
          {section.title && <p className="mb-2 px-2 text-xs uppercase text-muted-foreground">{section.title}</p>}
          <nav className="space-y-1">
            {section.items.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 rounded-md px-2 py-2 text-sm ${pathname === href ? "bg-muted font-medium" : "hover:bg-muted/50"
                  }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      ))}

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </aside>
  );
}