import { PostLoginRepository } from '../repository/PostLoginRepository.ts'
import { AccessToken } from '../model/AccessToken.ts'
import { Login } from '../model/Login.ts'

export class PostLoginUseCase {
  constructor(private readonly postLoginRepository: PostLoginRepository) {}

  async execute(login: Login): Promise<AccessToken> {
    return this.postLoginRepository.postLogin(login)
  }
}
