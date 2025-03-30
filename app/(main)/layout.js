import { BottomNav } from "@/components/bottomNav";
import Header from "@/components/header";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="">
        <Header/>
      </div>
      <main className="flex-1 mt-15">
        {children}
      </main>
      
    </div>
  );
}
