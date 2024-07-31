import { winstonConfiguration } from "@configuration";
import { environment } from "@environment";
import { MiddlewareConsumer, Module, NestModule, OnModuleInit, RequestMethod } from "@nestjs/common";

import * as Joi from "joi";

import { WinstonModule } from "nest-winston";

import { CookieMiddleware, HelmetMiddleware, HttpStatusLoggerMiddleware } from "./middlewares";
import { CorsPolicyService, OpenApiService } from "./services";
import { EnvValidationSchema, environmentValidationSchema } from "./validations";

@Module({
  imports: [WinstonModule.forRoot({ ...winstonConfiguration })],
  providers: [CorsPolicyService, OpenApiService],
  exports: [CorsPolicyService, OpenApiService]
})
export class CoreModule implements NestModule, OnModuleInit {
  private validEnvironment(): void {
    const { error }: Joi.ValidationResult<EnvValidationSchema> = environmentValidationSchema.validate(environment);

    if (error !== undefined) {
      throw new Error(`An error occurred during the environment value validation because ${error.message}`);
    }
  }

  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(CookieMiddleware, HelmetMiddleware, HttpStatusLoggerMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.ALL });
  }

  public onModuleInit(): void {
    this.validEnvironment();
  }
}
