import { HttpModule }          from '@nestjs/axios'
import { Module }              from '@nestjs/common'

import { AppController }       from './application/app/app.controller'
import { AuthController }      from './application/auth/auth.controller'
import { CompaniesController } from './application/companies/companies.controller'
import { ContactController }   from './application/contact/contact.controller'
import { LeadsController }     from './application/leads/leads.controller'
import { AppService }          from './application/app/app.service'
import { AuthService }         from './application/auth/auth.service'
import { CompaniesService }    from './application/companies/companies.service'
import { ContactService }      from './application/contact/contact.service'
import { LeadsService }        from './application/leads/leads.service'

@Module({
  imports: [HttpModule],
  controllers: [
    AppController,
    AuthController,
    ContactController,
    LeadsController,
    CompaniesController
  ],
  providers: [
    AppService,
    AuthService,
    ContactService,
    LeadsService,
    CompaniesService
  ]
})
export class AppModule {}
