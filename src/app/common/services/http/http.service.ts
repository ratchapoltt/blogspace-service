import { Injectable } from "@nestjs/common";

import { Request } from "express";

@Injectable()
export class HttpService {
  public getLanguageFromHttpRequestHeader(request: Request): string | null {
    const language: string | null = request.header("accept-language") ?? null;

    if (language !== null) {
      return language.split(",").at(0)!.split("-").at(0)!;
    }

    return language;
  }
}
