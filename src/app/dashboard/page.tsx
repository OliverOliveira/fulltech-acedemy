// app/dashboard/page.tsx
import { getServerSession } from "@/lib/get-server-session";
import { redirect } from "next/navigation";

export default async function DashboardHome() {
  const session = await getServerSession();
  if (!session) redirect("/auth");

  switch (session.user.role) {
    case "admin": return <h1 className="text-xl font-semibold">Métricas da plataforma</h1>;
    case "instructor": return <h1 className="text-xl font-semibold">Resumo dos seus cursos</h1>;
    default: return <h1 className="text-xl font-semibold">Continue de onde parou</h1>;
  }
}