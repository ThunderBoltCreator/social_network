import {FC} from 'react'
import {NavLink} from 'react-router-dom'

interface IDialogsLinkProps {
  name: string
  id: string | number
}

export const DialogsLink: FC<IDialogsLinkProps> = ({name, id}) => {
  const path = `/dialogs/${id}`

  return (
    <div>
      <NavLink to={path}>{name}</NavLink>
    </div>
  )
}