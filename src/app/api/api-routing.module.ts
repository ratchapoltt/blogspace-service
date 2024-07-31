import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";

import { InfoModule } from "./modules";

@Module({
  imports: [
    RouterModule.register([
      {
        path: "info",
        module: InfoModule
      }
    ])
  ]
})
export class ApiRoutingModule {}
