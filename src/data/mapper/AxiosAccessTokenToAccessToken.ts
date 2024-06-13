import { Mapper } from '../../common/Mapper.ts'
import { AxiosAccessToken } from '../model/AxiosAccessToken.ts'
import { AccessToken } from '../../domain/model/AccessToken.ts'

export class AxiosAccessTokenToAccessToken extends Mapper<
  AxiosAccessToken,
  AccessToken
> {
  map(axiosAccessToken: AxiosAccessToken): AccessToken {
    const { accessToken } = axiosAccessToken
    return {
      accessToken
    }
  }
}
