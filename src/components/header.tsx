import Link from "next/link";
import { FullTechLogo } from "./fulltech-logo";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { href: "/", label: "Explorar" },
  { href: "/cursos", label: "Cursos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/comunidade", label: "Comunidade" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="relative inline-block group">
      {label}

      <svg
        className="absolute left-0 -bottom-1 w-full h-2 pointer-events-none"
        viewBox="0 0 67 8"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.00024 4.94464C1.00024 4.94464 13.574 2.23144 21.5002 1.44458C29.4668 0.653705 42.0002 1.44458 42.0002 1.44458M42.0002 1.44458C42.0002 1.44458 27.0002 3.44464 16.5002 6.44464M42.0002 1.44458C42.0002 1.44458 57.0002 0.444279 66.0002 1.44458"
          stroke="#080F3B"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="1"
          className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-500 ease-out group-hover:[stroke-dashoffset:0]"
        />
      </svg>
    </Link>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-background text-foreground min-w-5xl mx-auto">
      <FullTechLogo className="w-10 h-10" />

      <nav>
        <ul className="flex items-center space-x-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} label={item.label} />
            </li>
          ))}

          <li>
            <Link
              href="/login"
              className="bg-destructive text-white px-6 py-4 rounded-full flex items-center justify-center transition-colors hover:bg-destructive/90"
            >
              Entrar na Academia
              <ArrowUpRight className="ml-2 h-6 w-6" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}