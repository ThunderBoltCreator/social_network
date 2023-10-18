import {ChangeEvent, FC} from 'react'
import {useParams} from 'react-router-dom'
import {changeMessageTextAC, sendMessageAC} from '../../app/redux/dialogsReducer'
import {Button} from '../../components/button/Button'

import s from './Dialogs.styled'
import {DialogsLink} from './DialogsLink'
import {Message} from './Message'

interface IDialogs {
  // dialogsState: IDialogsPage
  // dispatch: (action: DispatchAction) => void
}

interface IParams {
  id: string
}

export const Dialogs: FC<IDialogs> = ({}) => {
  const {id} = useParams<IParams>()

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e)
    dispatch(changeMessageTextAC(e.currentTarget.value))
  }
  const onSendMessage = () => {
    dispatch(sendMessageAC())
  }

  const renderMessages = dialogsState.messages.map(m => (<Message key={m.id} message={m.message}/>))
  const renderDialogs = dialogsState.dialogs.map(l => (<DialogsLink key={l.id} name={l.name} id={l.id}/>))

  return (
    <s.Dialogs>

      <s.DialogsLinks>
        {renderDialogs}
      </s.DialogsLinks>

      <s.Messages>
        <div>
          {renderMessages}
        </div>
        <div>
          <textarea value={dialogsState.messageText} onChange={onChangeHandler}></textarea>
          <Button callback={onSendMessage}>send</Button>
        </div>
      </s.Messages>

    </s.Dialogs>

  )
}