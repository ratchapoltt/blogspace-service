import { Module } from "@nestjs/common";

import { AsyncLocalStorage } from "node:async_hooks";

import { CONTEXT_STORE_VALUE } from "./constants";
import { ContextStore } from "./models";

import { ContextService } from "./context.service";

@Module({
  providers: [
    {
      provide: CONTEXT_STORE_VALUE,
      useValue: new AsyncLocalStorage<ContextStore>()
    },
    ContextService
  ],
  exports: [ContextService]
})
export class ContextModule {}
