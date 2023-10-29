import {ChangeEvent, FC} from 'react'
import {useParams} from 'react-router-dom'
import {Button} from 'shared/button/Button'

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
    // dispatch(changeMessageTextAC(e.currentTarget.value))
  }
  const onSendMessage = () => {
    // dispatch(sendMessageAC())
  }

  // const renderMessages = dialogsState.messages.map(m => (<Message key={m.id} message={m.message}/>))
  // const renderDialogs = dialogsState.dialogs.map(l => (<DialogsLink key={l.id} name={l.name} id={l.id}/>))

  return (
    <div>

      <div>
        {/*{renderDialogs}*/}
      </div>

      <div>
        <div>
          {/*{renderMessages}*/}
        </div>
        <div>
          {/*<textarea value={dialogsState.messageText} onChange={onChangeHandler}></textarea>*/}
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