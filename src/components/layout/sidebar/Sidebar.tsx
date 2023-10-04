import React from 'react'
import {FC} from 'react'
import {NavLink} from 'react-router-dom'

import s from './Sidebar.styled'

interface ISidebar {
}

export const Sidebar: FC<ISidebar> = (props) => {
   return (
      <s.Sidebar>
         <div>
            <NavLink to="/profile">Profile</NavLink>
         </div>
         <div>
            <NavLink to="/dialogs">Dialogs</NavLink>
         </div>
         <div>
            <NavLink to="/news">News</NavLink>
         </div>
         <div>
            <NavLink to="/music">Music</NavLink>
         </div>
         <div>
            <NavLink to="/settings">Settings</NavLink>
         </div>
      </s.Sidebar>
   )
}
