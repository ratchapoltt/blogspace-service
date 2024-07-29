import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app/app.module";

class BlogspaceServiceApplication {
  private static readonly logger: Logger = new Logger("Bootstrap");

  public static async run(): Promise<void> {
    const application: NestExpressApplication = await NestFactory.create(AppModule);

    await application.init();
    await application.listen(3000);

    this.logger.log(`Application running on ${await application.getUrl()}`);
    this.logger.log("Application service started successfully");
  }
}

BlogspaceServiceApplication.run();
