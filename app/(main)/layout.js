import { BottomNav } from "@/components/bottomNav";
import Header from "@/components/header";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1">
        {children}
      </main>
      
    </div>
  );
}
