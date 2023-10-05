import { Route, Switch } from 'react-router-dom'
import { GifView } from './GifView'

export const PublicRoutes = () => (
  <Switch>
    <Route
      path={'/'}
      component={GifView}
      exact
    />
  </Switch>
)
