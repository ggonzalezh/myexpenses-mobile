import { AccessToken } from '../../domain/model/AccessToken.ts'
import { PostLoginRepository } from '../../domain/repository/PostLoginRepository.ts'
import { AxiosInstance } from 'axios'
import { Login } from '../../domain/model/Login.ts'
import { AxiosAccessToken } from '../model/AxiosAccessToken.ts'
import { AxiosAccessTokenToAccessToken } from '../mapper/AxiosAccessTokenToAccessToken.ts'

export class AxiosPostLoginRepository implements PostLoginRepository {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly axiosAccessTokenToAccessToken: AxiosAccessTokenToAccessToken
  ) {}

  async postLogin(login: Login): Promise<AccessToken> {
    const { data } = await this.axios.post<AxiosAccessToken>(
      '/auth/login',
      login
    )
    return this.axiosAccessTokenToAccessToken.map(data)
  }
}
