import { CorsPolicyService, OpenApiService } from "@app/core";
import { winstonConfiguration } from "@configuration";
import { environment } from "@environment";
import { Logger, LoggerService } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { WINSTON_MODULE_NEST_PROVIDER, WinstonModule } from "nest-winston";

import { AppModule } from "./app/app.module";

class BlogspaceServiceApplication {
  private static readonly logger: Logger = new Logger("Bootstrap");

  public static async run(): Promise<void> {
    try {
      const application: NestExpressApplication = await NestFactory.create(AppModule, {
        bufferLogs: true
      });

      application.useLogger(application.get(WINSTON_MODULE_NEST_PROVIDER));
      application.enableCors(application.get(CorsPolicyService).getConfiguration());
      application.disable("x-powered-by");
      application.get(OpenApiService).run(application);

      await application.init();
      await application.listen(environment.server.port, environment.server.hostname);

      this.logger.log(`Application active on ${environment.system.profile} profile`);
      this.logger.log(`Application running on ${await application.getUrl()}`);
      this.logger.log("Application service started successfully");
    } catch (error) {
      const logger: LoggerService = WinstonModule.createLogger({
        ...winstonConfiguration,
        defaultMeta: {
          context: "Bootstrap"
        }
      });

      logger.fatal!(error);
    }
  }
}

BlogspaceServiceApplication.run();
