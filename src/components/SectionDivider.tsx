export function SectionDivider({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <div
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-hidden
    >
      <div
        className={
          variant === "dark"
            ? "h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            : "h-px bg-gradient-to-r from-transparent via-border to-transparent"
        }
      />
    </div>
  );
}