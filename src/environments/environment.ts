import { HttpStatus } from "@nestjs/common";

import {
  Environment,
  EnvironmentI18n,
  EnvironmentI18nFile,
  EnvironmentI18nLanguage,
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
    profile: process.env.SYSTEM_PROFILE,
    application: new EnvironmentSystemApplication({
      version: process.env.SYSTEM_APPLICATION_VERSION,
      name: process.env.SYSTEM_APPLICATION_NAME,
      description: process.env.SYSTEM_APPLICATION_DESCRIPTION
    }),
    date: new EnvironmentSystemDate({
      timezone: process.env.SYSTEM_DATE_TIMEZONE
    })
  }),
  server: new EnvironmentServer({
    port: Number.parseInt(process.env.SERVER_PORT, 10),
    hostname: process.env.SERVER_HOSTNAME
  }),
  security: new EnvironmentSecurity({
    cors: new EnvironmentSecurityCors({
      origins: process.env.SECURITY_CORS_ORIGINS.split(",").map((origin: string): string => {
        return origin.trim();
      }),
      methods: process.env.SECURITY_CORS_METHODS.split(",").map((method: string): string => {
        return method.trim();
      }),
      allowedHeaders: process.env.SECURITY_CORS_ALLOWED_HEADERS.split(",").map((header: string): string => {
        return header.trim();
      }),
      exposedHeaders: process.env.SECURITY_CORS_EXPOSED_HEADERS.split(",").map((header: string): string => {
        return header.trim();
      }),
      credentials: process.env.SECURITY_CORS_CREDENTIALS === "true",
      maxAge: Number.parseInt(process.env.SECURITY_CORS_MAX_AGE, 10),
      optionsSuccessStatus: HttpStatus.NO_CONTENT,
      preflightContinue: false
    }),
    cookie: new EnvironmentSecurityCookie({
      secret: process.env.SECURITY_COOKIE_SECRET
    }),
    api: new EnvironmentSecurityApi({
      key: process.env.SECURITY_API_KEY
    })
  }),
  i18n: new EnvironmentI18n({
    default: process.env.I18N_DEFAULT,
    encoding: process.env.I18N_ENCODING,
    language: new EnvironmentI18nLanguage({
      en: new EnvironmentI18nFile({
        path: process.env.I18N_EN_FILE_PATH
      }),
      th: new EnvironmentI18nFile({
        path: process.env.I18N_TH_FILE_PATH
      })
    })
  }),
  logger: new EnvironmentLogger({
    level: process.env.LOGGER_LEVEL,
    error: new EnvironmentLoggerError({
      stack: process.env.LOGGER_ERROR_STACK === "true"
    }),
    timestamp: new EnvironmentLoggerTimestamp({
      format: process.env.LOGGER_TIMESTAMP_FORMAT
    }),
    colorize: new EnvironmentLoggerColorize({
      all: process.env.LOGGER_COLORIZE_ALL === "true"
    }),
    label: new EnvironmentLoggerLabel({
      pattern: process.env.LOGGER_LABEL_PATTERN,
      message: process.env.LOGGER_LABEL_MESSAGE === "true"
    }),
    printf: new EnvironmentLoggerPrintf({
      pattern: process.env.LOGGER_PRINTF_PATTERN
    })
  }),
  swagger: new EnvironmentSwagger({
    enable: process.env.SWAGGER_ENABLE === "true"
  })
});
