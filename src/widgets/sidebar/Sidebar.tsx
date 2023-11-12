import clsx from 'clsx'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {NAVIGATION_PATHS} from 'shared/constants/paths'

interface SidebarProps {
  className?: string
}

export function Sidebar({className = ''}: SidebarProps) {
  const rootStyles = clsx(className, 'bg-sidebar text-secondary rounded-lg p-3.5 text-2xl')

  const links = NAVIGATION_PATHS.map(({path, name}) => (
    <div key={name + path}>
      <NavLink
        className={(isActive: boolean) => isActive ? 'text-secondary-active' : ''}
        to={path}
      >{name}</NavLink>
    </div>
  ))
  return (
    <nav className={rootStyles}>
      {links}
    </nav>
  )
}

// const Sidebar = styled.nav`
//   grid-area: n;
//   background-color: #3f8241;
//   padding: 15px;
//
//   a.active {
//     color: #e6c140;
//   }
//
//   a:active {
//     color: unset;
//   }
// `