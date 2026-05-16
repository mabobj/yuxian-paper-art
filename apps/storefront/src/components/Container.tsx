import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto px-6 lg:px-8 ${className}`}
      style={{ maxWidth: "min(1180px, calc(100% - 48px))" }}
    >
      {children}
    </div>
  )
}