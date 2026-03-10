import Link from "next/link";

export default function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition";
  const solid = "bg-[var(--c1)] text-[var(--c5)] hover:opacity-90";
  const outline =
    "border border-[var(--c2)] text-[var(--c2)] hover:bg-[var(--c4)]";

  return (
    <Link className={`${base} ${variant === "solid" ? solid : outline}`} href={href}>
      {children}
    </Link>
  );
}