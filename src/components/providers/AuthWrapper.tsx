import React, { useEffect, useState } from 'react'
import AuthContextProvider from '../context/auth.context'
import { ICredentials } from '../../types/types'
import { getCredentialsLocalStorage } from '../../utils/credentials.helper'

interface Props {
  children: any
}
export const AuthWrapper = ({ children }: Props) => {
  const [credentials, setCredentials] = useState<ICredentials | undefined>(undefined)
  useEffect(() => {
    const credentials = getCredentialsLocalStorage()
    if (credentials) setCredentials(credentials)
  }, [])

  return (
    <AuthContextProvider value={{ credentials, setCredentials }}>
      {children}
    </AuthContextProvider>
  )
}
