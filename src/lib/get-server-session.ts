import { cookies } from "next/headers";

export type Role = "student" | "instructor" | "admin";

export interface ServerSession {
  user: { id: string; name: string; email: string; role: Role; image?: string | null };
  session: { id: string; expiresAt: string };
}

export async function getServerSession(): Promise<ServerSession | null> {
  const cookieStore = await cookies();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/auth/get-session`, {
    headers: { cookie: cookieStore.toString() },
    cache: "no-store",
  });

  if (!res.ok) return null;
  return (await res.json()) ?? null;
}