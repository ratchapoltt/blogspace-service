import { Injectable } from "@nestjs/common";

import { Request } from "express";

@Injectable()
export class HttpService {
  public getLanguageFromHttpRequestHeader(request: Request): string {
    const language: string = request.header("accept-language");

    if (language !== null && language !== undefined) {
      return language.split(",").at(0).split("-").at(0);
    }

    return language;
  }
}
