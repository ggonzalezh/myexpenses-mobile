import { PostLoginUseCase } from '../domain/useCase/PostLoginUseCase.ts'
import { AxiosPostLoginRepository } from '../data/repository/AxiosPostLoginRepository.ts'
import { axiosInstance } from '../data/middleware/AxiosInstance.ts'
import { AxiosAccessTokenToAccessToken } from '../data/mapper/AxiosAccessTokenToAccessToken.ts'

const axiosAccessTokenToAccessToken = new AxiosAccessTokenToAccessToken()

export const postLoginUseCase: PostLoginUseCase = new PostLoginUseCase(
  new AxiosPostLoginRepository(axiosInstance, axiosAccessTokenToAccessToken)
)
