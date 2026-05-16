import Link from "next/link"
import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  variant?: "primary" | "outline"
  href?: string
  className?: string
}

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm"

  const variants = {
    primary:
      "bg-vermilion text-white hover:bg-vermilion/90 shadow-sm hover:shadow-md",
    outline:
      "border border-walnut/30 text-walnut hover:bg-walnut hover:text-parchment",
  }

  const combined = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    )
  }

  return <button className={combined}>{children}</button>
}