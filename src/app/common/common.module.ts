import { Global, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";

import { ContextModule } from "./modules";
import { DateService, HttpService, TranslateService } from "./services";

@Global()
@Module({
  imports: [CqrsModule, ContextModule],
  providers: [HttpService, DateService, TranslateService],
  exports: [CqrsModule, ContextModule, HttpService, DateService, TranslateService]
})
export class CommonModule {}
