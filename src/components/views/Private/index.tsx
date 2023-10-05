import { Switch } from 'react-router-dom'
import { Layout } from '../../layouts/Layout'
import PrivateRoute from '../../shared/PrivateRoute'
import { useAuth } from '../../hooks/use-auth'

const adminRoutes = () => (
  <Layout>
    <Switch>
      {/*       <Route
        path={'/panel'}
        component={Panel}
      />
 */}
    </Switch>
  </Layout>
)

export const PrivateRoutes = () => {
  const { credentials } = useAuth()
  const isAuth = !!credentials?.token
  return (

    <Switch>
      <PrivateRoute
        path={'/admin'}
        component={adminRoutes}
        isAuth={isAuth}
      />

    </Switch>
  )
}
