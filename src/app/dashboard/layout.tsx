// app/dashboard/layout.tsx
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/get-server-session";
import { DashboardShell } from "./components/DashboardShell";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  if (!session) redirect("/auth");

  return <DashboardShell user={session.user}>{children}</DashboardShell>;
}