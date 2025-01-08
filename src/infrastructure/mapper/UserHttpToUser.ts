import { Mapper } from '@/common/Mapper.ts'
import { UserHttp } from '@/infrastructure/model/response/UserHttp.ts'
import { User } from '@/domain/model/User.ts'

export class UserHttpToUser extends Mapper<UserHttp, User> {
  map(userHttp: UserHttp): User {
    const { id, access_token, username, roles } = userHttp
    return {
      id,
      accessToken: access_token,
      username,
      roles
    }
  }
}
