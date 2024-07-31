import { environment } from "@environment";
import { Injectable } from "@nestjs/common";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

@Injectable()
export class CorsPolicyService {
  public getConfiguration(): CorsOptions {
    return {
      origin: (origin: string, callback: (error: Error | null, allowed: boolean) => void): void => {
        if (environment.system.profile === "local" || environment.security.cors.origins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Oops! It looks like your request was blocked due to CORS policy"), false);
        }
      },
      methods: environment.security.cors.methods,
      allowedHeaders: environment.security.cors.allowedHeaders,
      exposedHeaders: environment.security.cors.exposedHeaders,
      credentials: environment.security.cors.credentials,
      maxAge: environment.security.cors.maxAge,
      optionsSuccessStatus: environment.security.cors.optionsSuccessStatus,
      preflightContinue: environment.security.cors.preflightContinue
    };
  }
}
