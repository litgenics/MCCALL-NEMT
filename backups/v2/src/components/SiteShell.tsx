import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";
import { JsonLd } from "./JsonLd";

export function SiteShell({
  children,
  headerVariant = "hero",
}: {
  children: React.ReactNode;
  headerVariant?: "hero" | "solid";
}) {
  return (
    <>
      <JsonLd />
      <Header variant={headerVariant} />
      {children}
      <Footer />
      <FloatingCTA />
    </>
  );
}