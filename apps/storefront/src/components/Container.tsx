import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto ${className}`}
      style={{ width: "1086px", maxWidth: "calc(100% - 48px)" }}
    >
      {children}
    </div>
  )
}