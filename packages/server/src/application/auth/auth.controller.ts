import { Body }          from '@nestjs/common'
import { Controller }    from '@nestjs/common'
import { HttpCode }      from '@nestjs/common'
import { HttpException } from '@nestjs/common'
import { HttpStatus }    from '@nestjs/common'
import { Post }          from '@nestjs/common'
import * as process      from 'process'
import { map }           from 'rxjs'
import { Observable }    from 'rxjs'

import { AuthService }   from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(200)
  async getTokens(
    @Body() clientId: string
  ): Promise<Observable<Record<string, string>>> {
    try {
      const response = await this.authService.getTokens(clientId)
      response.pipe(map((resp) => resp.base_domain)).subscribe((
        base_domain
      ) => {
        process.env.BASE_DOMAIN = 'https://' + base_domain
      })
      return response
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Wrong client id'
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }
}
