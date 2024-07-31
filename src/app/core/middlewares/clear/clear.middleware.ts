import { ContextService } from "@app/common";
import { Injectable, NestMiddleware } from "@nestjs/common";

import { NextFunction, Request, Response } from "express";

@Injectable()
export class ClearMiddleware implements NestMiddleware<Request, Response> {
  private readonly contextService: ContextService;

  public constructor(contextService: ContextService) {
    this.contextService = contextService;
  }

  public use(_request: Request, response: Response, next: NextFunction): void {
    response.on("finish", (): void => {
      this.contextService.disable();
    });

    next();
  }
}
