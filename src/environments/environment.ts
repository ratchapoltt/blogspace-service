import { HttpStatus } from "@nestjs/common";

import {
  Environment,
  EnvironmentLogger,
  EnvironmentLoggerColorize,
  EnvironmentLoggerError,
  EnvironmentLoggerLabel,
  EnvironmentLoggerPrintf,
  EnvironmentLoggerTimestamp,
  EnvironmentSecurity,
  EnvironmentSecurityApi,
  EnvironmentSecurityCookie,
  EnvironmentSecurityCors,
  EnvironmentServer,
  EnvironmentSwagger,
  EnvironmentSystem,
  EnvironmentSystemApplication,
  EnvironmentSystemDate
} from "./models";

export const environment: Environment = new Environment({
  system: new EnvironmentSystem({
    profile: process.env.SYSTEM_PROFILE!,
    application: new EnvironmentSystemApplication({
      version: process.env.SYSTEM_APPLICATION_VERSION!,
      name: process.env.SYSTEM_APPLICATION_NAME!,
      description: process.env.SYSTEM_APPLICATION_DESCRIPTION!
    }),
    date: new EnvironmentSystemDate({
      timezone: process.env.SYSTEM_DATE_TIMEZONE!
    })
  }),
  server: new EnvironmentServer({
    port: Number.parseInt(process.env.SERVER_PORT!, 10),
    hostname: process.env.SERVER_HOSTNAME!
  }),
  security: new EnvironmentSecurity({
    cors: new EnvironmentSecurityCors({
      origins: process.env.SECURITY_CORS_ORIGINS!.split(","),
      methods: process.env.SECURITY_CORS_METHODS!.split(","),
      allowedHeaders: process.env.SECURITY_CORS_ALLOWED_HEADERS!.split(","),
      exposedHeaders: process.env.SECURITY_CORS_EXPOSED_HEADERS!.split(","),
      credentials: process.env.SECURITY_CORS_CREDENTIALS === "true",
      maxAge: Number.parseInt(process.env.SECURITY_CORS_MAX_AGE!, 10),
      optionsSuccessStatus: HttpStatus.NO_CONTENT,
      preflightContinue: false
    }),
    cookie: new EnvironmentSecurityCookie({
      secret: process.env.SECURITY_COOKIE_SECRET!
    }),
    api: new EnvironmentSecurityApi({
      key: process.env.SECURITY_API_KEY!
    })
  }),
  logger: new EnvironmentLogger({
    level: process.env.LOGGER_LEVEL!,
    error: new EnvironmentLoggerError({
      stack: process.env.LOGGER_ERROR_STACK === "true"
    }),
    timestamp: new EnvironmentLoggerTimestamp({
      format: process.env.LOGGER_TIMESTAMP_FORMAT!
    }),
    colorize: new EnvironmentLoggerColorize({
      all: process.env.LOGGER_COLORIZE_ALL === "true"
    }),
    label: new EnvironmentLoggerLabel({
      pattern: process.env.LOGGER_LABEL_PATTERN!,
      message: process.env.LOGGER_LABEL_MESSAGE === "true"
    }),
    printf: new EnvironmentLoggerPrintf({
      pattern: process.env.LOGGER_PRINTF_PATTERN!
    })
  }),
  swagger: new EnvironmentSwagger({
    enable: process.env.SWAGGER_ENABLE === "true"
  })
});
