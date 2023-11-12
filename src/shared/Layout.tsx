import {FC} from 'react'
import {Header} from 'widgets/header/Header'
import {Sidebar} from 'widgets/sidebar/Sidebar'


export const Layout: FC = ({children}) => {

  return (
    <div className='grid grid-rows-2 grid-cols-12'>
      <Header className='col-span-full'/>
      <Sidebar/>
      <main>
        {children}
      </main>
    </div>
  )
}