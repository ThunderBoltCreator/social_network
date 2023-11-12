import clsx from 'clsx'
import {ReactNode} from 'react'

interface PageWrapperProps {
  className?: string
  children: ReactNode
}

export function PageWrapper({className = '', children}: PageWrapperProps) {
  const rootStyles = clsx(className, 'p-2')

  return (
    <main className={rootStyles}>
      {children}
    </main>
  )
}