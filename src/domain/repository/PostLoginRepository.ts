import { AccessToken } from '../model/AccessToken.ts'
import { Login } from '../model/Login.ts'

export interface PostLoginRepository {
  postLogin: (login: Login) => Promise<AccessToken>
}
