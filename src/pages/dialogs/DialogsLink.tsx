import {FC} from 'react'
import {NavLink} from 'react-router-dom'

import s from './Dialogs.styled'

interface IDialogsLinkProps {
   name: string
   id: string | number
}

export const DialogsLink: FC<IDialogsLinkProps> = ({name, id}) => {
   const path = `/dialogs/${id}`

   return (
      <s.DialogsLink>
         <NavLink to={path}>{name}</NavLink>
      </s.DialogsLink>
   )
}