import classNames from 'classnames'
import {ReactNode} from 'react'

export const AppContainer = ({children, className = ''}: { children: ReactNode, className?: string }) => {


  return (
    <div className={classNames(className, 'max-w-5xl mx-auto')}>
      {children}
    </div>
  )
}