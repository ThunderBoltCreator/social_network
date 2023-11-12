import {ReactNode} from 'react'
import {BrowserRouter} from 'react-router-dom'

export const myWithRouter = (component: () => ReactNode) => () => (
  <BrowserRouter>
    {component()}
  </BrowserRouter>
)