import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto px-6 lg:px-8 ${className}`}
      style={{ maxWidth: "1200px", width: "calc(100% - 56px)" }}
    >
      {children}
    </div>
  )
}