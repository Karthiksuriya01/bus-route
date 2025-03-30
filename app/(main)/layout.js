import { BottomNav } from "@/components/bottomNav";
import Header from "@/components/header";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="m-5">
        <Header/>
      </div>
      <main className="flex-1 m-5">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
