import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import {
  clearCredentialsLocalStorage,
  setCredentialsLocalStorage
} from '../../utils/credentials.helper'
import { ICredentials } from '../../types/types'

export const useAuth = () => {
  const { setCredentials, credentials } = useContext(AuthContext)

  const logout = () => {
    setCredentials(undefined)
    clearCredentialsLocalStorage()
  }

  const saveCredentials = (obj: ICredentials) => {
    setCredentials(obj)
    setCredentialsLocalStorage(obj)
  }

  return { credentials, logout, saveCredentials }
}
