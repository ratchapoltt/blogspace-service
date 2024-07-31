import { Global, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";

import { DateService, HttpService } from "./services";

@Global()
@Module({
  imports: [CqrsModule],
  providers: [HttpService, DateService],
  exports: [CqrsModule, HttpService, DateService]
})
export class CommonModule {}
