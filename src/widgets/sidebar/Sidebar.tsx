import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'

interface ISidebar {
}

export const Sidebar: FC<ISidebar> = (props) => {
  return (
    <nav>
      <div className={''}>
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