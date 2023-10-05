import { ICredentials } from '../types/types'

const key = 'credentials'

export const setCredentialsLocalStorage = (data: ICredentials): void => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const getCredentialsLocalStorage = (): ICredentials | undefined => {
  try {
    const stringified = localStorage.getItem('credentials')
    let credentials: ICredentials | undefined

    if (stringified) credentials = JSON.parse(stringified)
    if (!credentials) return undefined

    return credentials
  } catch (error) {
    console.log(error)
    return undefined
  }
}

export const clearCredentialsLocalStorage = (): void => {
  localStorage.removeItem(key)
}
