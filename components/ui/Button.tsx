import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-neon-gradient text-white shadow-[0_8px_30px_rgba(255,45,135,0.35)] hover:brightness-110",
  outline:
    "border border-white/30 text-white hover:border-white hover:bg-white/5",
  ghost: "text-white hover:text-teal",
};

type Props = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "className">;

export function ButtonLink({
  variant = "primary",
  children,
  className = "",
  ...props
}: Props) {
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-200 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  variant = "primary",
  children,
  className = "",
  ...props
}: { variant?: Variant; children: ReactNode; className?: string } & ComponentProps<"a">) {
  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-200 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
