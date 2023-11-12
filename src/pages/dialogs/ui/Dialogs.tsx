import {DialogsState} from 'app/store/config/store.model'
import {DialogsLink} from 'pages/dialogs/ui/DialogsLink'
import {Message} from 'pages/dialogs/ui/Message'
import {ChangeEvent} from 'react'
import {useParams} from 'react-router-dom'
import {Button} from 'shared/button/Button'

interface DialogsProps {
  dialogsState: DialogsState
  changeMessageText: (text: string) => void
  sendMessage: () => void
}

interface IParams {
  id: string
}

export function Dialogs({dialogsState, changeMessageText, sendMessage}: DialogsProps) {
  const {id} = useParams<IParams>()

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e)
    changeMessageText(e.currentTarget.value)
  }
  const onSendMessage = () => {
    sendMessage()
    changeMessageText('')
  }

  const renderMessages = dialogsState.messages.map(m => (<Message key={m.id} message={m.message}/>))
  const renderDialogs = dialogsState.dialogs.map(l => (<DialogsLink key={l.id} name={l.name} id={l.id}/>))

  return (
    <div>

      <div>
        {renderDialogs}
      </div>

      <div>
        <div>
          {renderMessages}
        </div>
        <div>
          <textarea value={dialogsState.messageText} onChange={onChangeHandler}></textarea>
          <Button callback={onSendMessage}>send</Button>
        </div>
      </div>

    </div>

  )
}

// const Dialogs = styled.div`
//   padding: 15px;
//   display: grid;
//   grid-template-columns: 2fr 10fr;
//   height: 100%;
// `
// const DialogsLink = styled.div`
//
//   a:active {
//     color: unset;
//   }
//
//   a {
//     display: inline-block;
//   }
//
//   a.active {
//     color: #e6c140;
//     transform: scale(1.2) translateX(3px);
//   }
// `
// const DialogsLinks = styled.div``
// const Messages = styled.div`
//   display: flex;
//   align-items: flex-end;
//   justify-content: flex-end;
//   flex-direction: column;
// `
// const Message = styled.div``