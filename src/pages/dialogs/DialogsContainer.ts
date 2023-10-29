import {RootState} from 'app/store/config/store.model'
import {Dialogs} from 'pages/dialogs/Dialogs'
import {connect} from 'react-redux'

const mapStateToProps = (state: RootState) => ({
  dialogsState: state.dialogs
})
const mapDispatchToProps = () => ({})

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)