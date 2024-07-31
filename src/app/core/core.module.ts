import { winstonConfiguration } from "@configuration";
import { environment } from "@environment";
import {
  ClassSerializerInterceptor,
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
  RequestMethod
} from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";

import * as Joi from "joi";

import { WinstonModule } from "nest-winston";

import { RestManagerInterceptor } from "./interceptors";
import {
  ClearMiddleware,
  CookieMiddleware,
  HelmetMiddleware,
  HttpStatusLoggerMiddleware,
  StoreMiddleware
} from "./middlewares";
import { CorsPolicyService, OpenApiService } from "./services";
import { EnvValidationSchema, environmentValidationSchema } from "./validations";

@Module({
  imports: [WinstonModule.forRoot({ ...winstonConfiguration })],
  providers: [
    CorsPolicyService,
    OpenApiService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RestManagerInterceptor
    }
  ],
  exports: [CorsPolicyService, OpenApiService]
})
export class CoreModule implements NestModule, OnModuleInit {
  private validEnvironment(): void {
    const { error }: Joi.ValidationResult<EnvValidationSchema> = environmentValidationSchema.validate(environment);

    if (error !== null && error !== undefined) {
      throw new Error(`An error occurred during the environment value validation because ${error.message}`);
    }
  }

  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(CookieMiddleware, HelmetMiddleware, StoreMiddleware, ClearMiddleware, HttpStatusLoggerMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.ALL });
  }

  public onModuleInit(): void {
    this.validEnvironment();
  }
}
