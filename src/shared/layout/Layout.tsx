import {FC} from 'react'
import {AppContainer} from 'shared/layout/AppContainer'
import {PageWrapper} from 'shared/layout/PageWrapper'
import {Header} from 'widgets/header/Header'
import {Sidebar} from 'widgets/sidebar/Sidebar'


export const Layout: FC = ({children}) => {

  return (
    <AppContainer className="grid grid-cols-12 auto-rows-max">
      <Header className="col-span-full p-2"/>
      <Sidebar className="col-span-2"/>
      <PageWrapper className="col-span-10">
        {children}
      </PageWrapper>
    </AppContainer>
  )
}