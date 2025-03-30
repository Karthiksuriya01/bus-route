import { BottomNav } from "@/components/bottomNav";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
