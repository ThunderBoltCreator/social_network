import clsx from 'clsx'
import React from 'react'
import {FaAppleAlt} from 'react-icons/fa'
import {Link, NavLink} from 'react-router-dom'

interface HeaderProps {
  className?: string
}

export function Header({className = ''}: HeaderProps) {

  return (
    <header className={clsx(className, "flex justify-between items-center")}>
      <Link to={'/'}>
        <FaAppleAlt color={'#eebbc3'} size={50}/>
      </Link>
       <NavLink to={'/login'}>
          Login
       </NavLink>
    </header>
  )
}
