import store from 'app/store/config/store'
import {FC} from 'react'
import {Provider} from 'react-redux'

export const ReduxProvider: FC = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}