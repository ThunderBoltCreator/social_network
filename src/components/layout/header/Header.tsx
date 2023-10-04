import React from 'react'
import {FC} from 'react'

import s from './Header.styled'

interface IHeader {
}

export const Header: FC<IHeader> = (props) => {
   return <s.Header>
      <img
         width={90}
         height={50}
         src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
         alt=""/>
   </s.Header>
}
