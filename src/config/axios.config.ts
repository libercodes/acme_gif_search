import axios, { AxiosRequestConfig } from 'axios'
import { BACKEND_URL } from './url'
import { getCredentials } from '../utils/credentials.helper'

const instance = axios.create({
  baseURL: BACKEND_URL,
})

export const AxiosConfig = (): AxiosRequestConfig => {
  const credentials = getCredentials()
  if (!credentials) throw new Error('token expired')
  return {
    headers: {
      Authorization: `bearer ${credentials.token}`,
    },
  }
}

export default instance
