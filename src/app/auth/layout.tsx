import { FullTechLogo } from "@/components/fulltech-logo";


export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center min-h-screen py-12 px-24">
      <div className="min-h-full w-full rounded-2xl p-8">
        <div className="w-fit">
          <FullTechLogo className="w-10 h-10" />
        </div>
        {children}
      </div>
    </div>
  );
}