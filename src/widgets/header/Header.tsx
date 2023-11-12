import React, {FC} from 'react'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = ({className = ''}) => {
  return <header className={className}>
    <img
      width={90}
      height={50}
      src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
      alt=""/>
  </header>
}


// const Header = styled.header`
//   grid-area: h;
//   background-color: #3f8241;
// `