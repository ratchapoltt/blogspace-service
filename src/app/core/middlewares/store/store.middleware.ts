import { ContextService, ContextStore, ContextStoreAccept, HttpService } from "@app/common";
import { Injectable, NestMiddleware } from "@nestjs/common";

import { NextFunction, Request, Response } from "express";

@Injectable()
export class StoreMiddleware implements NestMiddleware<Request, Response> {
  private readonly contextService: ContextService;
  private readonly httpService: HttpService;

  public constructor(contextService: ContextService, httpService: HttpService) {
    this.contextService = contextService;
    this.httpService = httpService;
  }

  public use(request: Request, _response: Response, next: NextFunction): void {
    const store: ContextStore = new ContextStore({
      accept: new ContextStoreAccept({
        language: this.httpService.getLanguageFromHttpRequestHeader(request)
      })
    });

    this.contextService.setStore(store, next);
  }
}
