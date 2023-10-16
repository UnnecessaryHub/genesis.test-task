import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getMock(): { mock: string } {
    return { mock: 'Hello World!' }
  }
}
