import {ReactNode} from 'react'
import {FC} from 'react'

type IButton = {
   callback?: () => void
   children?: ReactNode
}

export const Button: FC<IButton> = ({callback, children}) => {

   // console.log(callback)

   const onClickButtonHandler = () => {
      if (callback) {
         callback()
      }
   }

   return (
      <button onClick={onClickButtonHandler}>{children}</button>
   )
}