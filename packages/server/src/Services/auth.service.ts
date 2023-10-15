import { HttpService } from '@nestjs/axios'
import { Injectable }  from '@nestjs/common'
import { map }         from 'rxjs'
import { Observable }  from 'rxjs'

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}
  async getTokens(
    clientId: string
  ): Promise<Observable<Record<string, string>>> {
    const response = await this.httpService.get(
      'https://test.gnzs.ru/oauth/get-token.php',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Client-Id': clientId
        }
      }
    )
    return response.pipe(map((resp) => resp.data))
  }
}
