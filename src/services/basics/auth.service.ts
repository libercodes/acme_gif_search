import API from '../../config/axios.config'
import { ICredentials } from '../../types/types'
import {
  LoginDto,
} from '../../validations/basic/auth.dto'

const login = async (dto: LoginDto): Promise<ICredentials> => {
  const res = await API.post<ICredentials>('/auth/user', dto)
  return res.data
}

const getNonce = async (): Promise<string> => {
  const res = await API.get<string>('/auth/login/nonce')
  return res.data
}

const AuthService = {
  login,
  getNonce
}

export default AuthService
