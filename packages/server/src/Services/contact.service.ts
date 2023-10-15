import { HttpService } from '@nestjs/axios'
import { Injectable }  from '@nestjs/common'
import * as process    from 'process'
import { map }         from 'rxjs'
import { Observable }  from 'rxjs'

@Injectable()
export class ContactService {
  constructor(private readonly httpService: HttpService) {}

  async create(
    headers: string,
    body: Record<string, string>[]
  ): Promise<Observable<Record<string, string>>> {
    const response = await this.httpService.post(
      process.env.BASE_DOMAIN + '/api/v4/contacts',
      body,
      {
        headers: {
          Authorization: headers
        }
      }
    )
    return response.pipe(map((resp) => resp.data._embedded.contacts[0]))
  }
}
