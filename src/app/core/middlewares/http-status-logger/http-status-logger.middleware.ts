import { Injectable, Logger, NestMiddleware } from "@nestjs/common";

import { NextFunction, Request, Response } from "express";

@Injectable()
export class HttpStatusLoggerMiddleware implements NestMiddleware<Request, Response> {
  private readonly logger: Logger = new Logger("HTTP");

  private readonly userAgent: string = "user-agent";

  private getMessageRequestApiService(request: Request): string {
    return `${request.method} {${request.path}}:`;
  }

  private getMessageRequestStatus(response: Response): string {
    return `${response.statusCode} (${response.statusMessage})`;
  }

  private getMessageRequestClient(request: Request): string {
    let result: string = `${request.socket.remoteAddress}:${request.socket.remotePort}`;

    if (
      request.header(this.userAgent) !== "" &&
      request.header(this.userAgent) !== null &&
      request.header(this.userAgent) !== undefined
    ) {
      result += ` (${request.header("user-agent")})`;
    }

    return result;
  }

  public use(request: Request, response: Response, next: NextFunction): void {
    response.on("finish", (): void => {
      const api: string = this.getMessageRequestApiService(request);
      const status: string = this.getMessageRequestStatus(response);
      const client: string = this.getMessageRequestClient(request);
      const message: string = `${api} -> ${status} - ${client}`;

      if (response.statusCode >= 500) {
        this.logger.error(message);
      } else if (response.statusCode >= 400) {
        this.logger.warn(message);
      } else {
        this.logger.log(message);
      }
    });

    next();
  }
}
