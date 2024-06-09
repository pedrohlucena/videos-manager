import { Navbar } from '@/components'
import { ReactNode } from 'react'

interface ManageLayoutProps {
  children: ReactNode
}

export default function ManageLayout({ children }: ManageLayoutProps) {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  )
}
