import clsx from 'clsx'
import React from 'react'
import {FaAppleAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'

interface HeaderProps {
  className?: string
}

export function Header({className = ''}: HeaderProps) {
  const rootStyles = clsx(className, 'flex')
  return (
    <header className={rootStyles}>
      <Link to={'/'}>
        <FaAppleAlt color={'#eebbc3'} size={50}/>
      </Link>
    </header>
  )
}


// const Header = styled.header`
//   grid-area: h;
//   background-color: #3f8241;
// `