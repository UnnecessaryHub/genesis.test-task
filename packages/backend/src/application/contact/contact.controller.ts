import { Body }           from '@nestjs/common'
import { Controller }     from '@nestjs/common'
import { Headers }        from '@nestjs/common'
import { HttpCode }       from '@nestjs/common'
import { HttpException }  from '@nestjs/common'
import { HttpStatus }     from '@nestjs/common'
import { Post }           from '@nestjs/common'
import { Observable }     from 'rxjs'

import { ContactService } from './contact.service'

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}
  @Post()
  @HttpCode(200)
  async create(
    @Headers('Authorization') headers: string,
    @Body() body: Record<string, string>[]
  ): Promise<Observable<Record<string, string>>> {
    try {
      return await this.contactService.create(headers, body)
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Something wrong'
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }
}
