import { Body }             from '@nestjs/common'
import { Controller }       from '@nestjs/common'
import { Headers }          from '@nestjs/common'
import { HttpCode }         from '@nestjs/common'
import { HttpException }    from '@nestjs/common'
import { HttpStatus }       from '@nestjs/common'
import { Post }             from '@nestjs/common'
import { Observable }       from 'rxjs'

import { CompaniesService } from '../Services/companies.service'
import { ContactService }   from '../Services/contact.service'
import { LeadsService }     from '../Services/leads.service'

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}
  @Post()
  @HttpCode(200)
  async create(
    @Headers('Authorization') headers: string,
    @Body() body: Record<string, string>[]
  ): Promise<Observable<Record<string, string>>> {
    try {
      return await this.companiesService.create(headers, body)
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
