import { Module } from "@nestjs/common";

import { ApiModule } from "./api";
import { CommonModule } from "./common";
import { CoreModule } from "./core";

@Module({
  imports: [CommonModule, CoreModule, ApiModule]
})
export class AppModule {}
