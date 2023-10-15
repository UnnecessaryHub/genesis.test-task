import { HttpModule }          from '@nestjs/axios'
import { Module }              from '@nestjs/common'

import { AppController }       from './Controllers/app.controller'
import { AuthController }      from './Controllers/auth.controller'
import { CompaniesController } from './Controllers/companies.controller'
import { ContactController }   from './Controllers/contact.controller'
import { LeadsController }     from './Controllers/leads.controller'
import { AppService }          from './Services/app.service'
import { AuthService }         from './Services/auth.service'
import { CompaniesService }    from './Services/companies.service'
import { ContactService }      from './Services/contact.service'
import { LeadsService }        from './Services/leads.service'

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
