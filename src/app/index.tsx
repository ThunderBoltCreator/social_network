import {Routing} from 'pages/Routing'
import {Layout} from 'shared/Layout'
import {WithProviders} from './providers'

const App = () => {
  return (
    <Layout>
      <Routing/>
    </Layout>
  )
}

export default WithProviders(App)