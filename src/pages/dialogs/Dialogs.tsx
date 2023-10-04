import {FC} from 'react'
import {useParams} from 'react-router-dom'
import {IDialogsPage} from '../../redux/state'

import s from './Dialogs.styled'
import {DialogsLink} from './DialogsLink'
import {Message} from './Message'

interface IDialogs {
  dialogsState: IDialogsPage
}

interface IParams {
  id: string
}

export const Dialogs: FC<IDialogs> = ({dialogsState}) => {
  const {id} = useParams<IParams>()


  const renderMessages = dialogsState.messages.map(m => (<Message key={m.id} message={m.message}/>))
  const renderDialogs = dialogsState.dialogs.map(l => (<DialogsLink key={l.id} name={l.name} id={l.id}/>))

  return (
    <s.Dialogs>

      <s.DialogsLinks>
        {renderDialogs}
      </s.DialogsLinks>

      <s.Messages>
        {renderMessages}
      </s.Messages>

    </s.Dialogs>

  )
}