import { PrivateRoutes } from '../views/Private'
import { PublicRoutes } from '../views/Public'

export const AppNavigation = () => (
  <>
    <PublicRoutes />
    <PrivateRoutes />
  </>
)
