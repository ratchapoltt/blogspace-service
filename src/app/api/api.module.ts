import { Module } from "@nestjs/common";

import { InfoModule } from "./modules";

import { ApiRoutingModule } from "./api-routing.module";

@Module({
  imports: [InfoModule, ApiRoutingModule]
})
export class ApiModule {}
