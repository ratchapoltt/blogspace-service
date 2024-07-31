import { Inject, Injectable } from "@nestjs/common";

import { NextFunction } from "express";
import { AsyncLocalStorage } from "node:async_hooks";

import { CONTEXT_STORE_VALUE } from "./constants";
import { ContextStore } from "./models";

@Injectable()
export class ContextService {
  private storage: AsyncLocalStorage<ContextStore>;

  public constructor(@Inject(CONTEXT_STORE_VALUE) storage: AsyncLocalStorage<ContextStore>) {
    this.storage = storage;
  }

  public disable(): void {
    this.storage.disable();
  }

  public setStore(store: ContextStore, next: NextFunction): void {
    this.storage.run(store, (): void => {
      next();
    });
  }

  public getStore(): ContextStore {
    return this.storage.getStore();
  }
}
