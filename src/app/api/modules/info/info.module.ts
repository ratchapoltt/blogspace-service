import { Module } from "@nestjs/common";

import { GetInformationApplicationHandler } from "./queries";

import { InfoController } from "./info.controller";
import { InfoService } from "./info.service";

@Module({
  controllers: [InfoController],
  providers: [InfoService, GetInformationApplicationHandler]
})
export class InfoModule {}
