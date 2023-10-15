import { Controller } from '@nestjs/common'
import { Get }        from '@nestjs/common'

import { AppService } from '../Services/app.service'

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  getMock(): { mock: string } {
    return this.appService.getMock()
  }
}
