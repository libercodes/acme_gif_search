import React, { Dispatch, SetStateAction } from 'react'
import { ICredentials } from '../../types/types'

export interface IAuthContext {
  credentials?: ICredentials
  setCredentials: Dispatch<SetStateAction<ICredentials | undefined>>
}

const initialContext: IAuthContext = {
  setCredentials: () => { }
}

export const AuthContext = React.createContext<IAuthContext>(initialContext)

const AuthContextProvider = AuthContext.Provider

export default AuthContextProvider
