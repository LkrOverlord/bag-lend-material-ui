import Toolbar from "@/components/layout/Toolbar";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toolbar />
      <main>
        {children}
      </main>
     
    </>
  );
}