import styled from 'styled-components/macro'

const Dialogs = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: 2fr 10fr;
  height: 100%;
`
const DialogsLink = styled.div`

  a:active {
    color: unset;
  }

  a {
    display: inline-block;
  }

  a.active {
    color: #e6c140;
    transform: scale(1.2) translateX(3px);
  }
`
const DialogsLinks = styled.div``
const Messages = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
`
const Message = styled.div``

export default {Dialogs, DialogsLink, DialogsLinks, Messages, Message}