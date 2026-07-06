import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";
import { StructuredData } from "./StructuredData";
import { SkipLink } from "./SkipLink";

export function SiteShell({
  children,
  headerVariant = "hero",
}: {
  children: React.ReactNode;
  headerVariant?: "hero" | "solid";
}) {
  return (
    <>
      <SkipLink />
      <StructuredData />
      <Header variant={headerVariant} />
      {children}
      <Footer />
      <FloatingCTA />
    </>
  );
}