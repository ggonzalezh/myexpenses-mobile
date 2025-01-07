import { PostLoginUseCase } from '@/domain/useCase/PostLoginUseCase.ts'
import { HttpPostLoginRepository } from '@/infrastructure/repository/HttpPostLoginRepository.ts'
import { axiosInstance } from '@/infrastructure/middleware/axiosInstance.ts'

export const postLoginUseCase: PostLoginUseCase = new PostLoginUseCase(
  new HttpPostLoginRepository(axiosInstance)
)
