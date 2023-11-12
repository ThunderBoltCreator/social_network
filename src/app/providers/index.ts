import {myWithRouter} from 'app/providers/myWithRouter'
import compose from 'compose-function'
import {withStore} from './withStore'

export const WithProviders = compose(myWithRouter, withStore)