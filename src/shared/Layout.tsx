import {FC} from 'react'
import {Header} from 'widgets/header/Header'
import {Sidebar} from 'widgets/sidebar/Sidebar'


export const Layout: FC = ({children}) => {

  return (
    <div>
      <Header/>
      <Sidebar/>
      <main>
        {children}
      </main>
    </div>
  )
}