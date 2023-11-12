import {AppDispatch, RootState} from 'app/store/config/store.model'
import {changeMessageTextAC, sendMessageAC} from 'pages/dialogs/model/dialogsReducer'
import {Dialogs} from 'pages/dialogs/ui/Dialogs'
import {connect} from 'react-redux'

const mapStateToProps = (state: RootState) => ({
  dialogsState: state.dialogsPage
})
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeMessageText: (text: string) => dispatch(changeMessageTextAC(text)),
  sendMessage: () => dispatch(sendMessageAC())
})

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)