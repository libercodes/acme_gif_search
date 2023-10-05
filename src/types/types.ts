export interface ICredentials {
  token: string
  user: User
}

export interface User {
  id: string
  email: string
  type: 'user'
}
