import { BottomNav } from "@/components/bottomNav";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
            {children}
        <BottomNav />   
      </body>
      
    </html>
  );
}
