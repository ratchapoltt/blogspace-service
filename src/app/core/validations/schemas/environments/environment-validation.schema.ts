import * as Joi from "joi";

import {
  EnvI18nFileValidationSchema,
  EnvI18nLanguageValidationSchema,
  EnvI18nValidationSchema,
  EnvLoggerColorizeValidationSchema,
  EnvLoggerErrorValidationSchema,
  EnvLoggerLabelValidationSchema,
  EnvLoggerPrintfValidationSchema,
  EnvLoggerTimestampValidationSchema,
  EnvLoggerValidationSchema,
  EnvSecurityApiValidationSchema,
  EnvSecurityCookieValidationSchema,
  EnvSecurityCorsValidationSchema,
  EnvSecurityValidationSchema,
  EnvServerValidationSchema,
  EnvSwaggerValidationSchema,
  EnvSystemApplicationValidationSchema,
  EnvSystemDateValidationSchema,
  EnvSystemValidationSchema,
  EnvValidationSchema
} from "./models";

export const environmentValidationSchema: Joi.ObjectSchema<EnvValidationSchema> = Joi.object<EnvValidationSchema>(
  new EnvValidationSchema({
    system: Joi.object<EnvSystemValidationSchema>(
      new EnvSystemValidationSchema({
        profile: Joi.string().valid("local", "development", "sit", "uat", "production").required(),
        application: Joi.object<EnvSystemApplicationValidationSchema>(
          new EnvSystemApplicationValidationSchema({
            version: Joi.string().required(),
            name: Joi.string().required(),
            description: Joi.string().required()
          })
        ).required(),
        date: Joi.object<EnvSystemDateValidationSchema>(
          new EnvSystemDateValidationSchema({
            timezone: Joi.string().required()
          })
        ).required()
      })
    ).required(),
    server: Joi.object<EnvServerValidationSchema>(
      new EnvServerValidationSchema({
        port: Joi.number().port().required(),
        hostname: Joi.string().hostname().required()
      })
    ).required(),
    security: Joi.object<EnvSecurityValidationSchema>(
      new EnvSecurityValidationSchema({
        cors: Joi.object<EnvSecurityCorsValidationSchema>(
          new EnvSecurityCorsValidationSchema({
            origins: Joi.array().items(Joi.string()).required(),
            methods: Joi.array().items(Joi.string()).required(),
            allowedHeaders: Joi.array().items(Joi.string()).required(),
            exposedHeaders: Joi.array().items(Joi.string()).required(),
            credentials: Joi.boolean().required(),
            maxAge: Joi.number().required(),
            optionsSuccessStatus: Joi.number().required(),
            preflightContinue: Joi.boolean().required()
          })
        ).required(),
        cookie: Joi.object<EnvSecurityCookieValidationSchema>(
          new EnvSecurityCookieValidationSchema({
            secret: Joi.string().length(16).required()
          })
        ).required(),
        api: Joi.object<EnvSecurityApiValidationSchema>(
          new EnvSecurityApiValidationSchema({
            key: Joi.string().length(50).required()
          })
        ).required()
      })
    ).required(),
    i18n: Joi.object<EnvI18nValidationSchema>(
      new EnvI18nValidationSchema({
        default: Joi.string().required(),
        encoding: Joi.string().required(),
        language: Joi.object<EnvI18nLanguageValidationSchema>(
          new EnvI18nLanguageValidationSchema({
            en: Joi.object<EnvI18nFileValidationSchema>(
              new EnvI18nFileValidationSchema({
                path: Joi.string().required()
              })
            ).required(),
            th: Joi.object<EnvI18nFileValidationSchema>(
              new EnvI18nFileValidationSchema({
                path: Joi.string().required()
              })
            ).required()
          })
        ).required()
      })
    ).required(),
    logger: Joi.object<EnvLoggerValidationSchema>(
      new EnvLoggerValidationSchema({
        level: Joi.string().valid("debug", "info").required(),
        error: Joi.object<EnvLoggerErrorValidationSchema>(
          new EnvLoggerErrorValidationSchema({
            stack: Joi.boolean().required()
          })
        ).required(),
        timestamp: Joi.object<EnvLoggerTimestampValidationSchema>(
          new EnvLoggerTimestampValidationSchema({
            format: Joi.string().required()
          })
        ).required(),
        colorize: Joi.object<EnvLoggerColorizeValidationSchema>(
          new EnvLoggerColorizeValidationSchema({
            all: Joi.boolean().required()
          })
        ).required(),
        label: Joi.object<EnvLoggerLabelValidationSchema>(
          new EnvLoggerLabelValidationSchema({
            pattern: Joi.string().required(),
            message: Joi.boolean().required()
          })
        ).required(),
        printf: Joi.object<EnvLoggerPrintfValidationSchema>(
          new EnvLoggerPrintfValidationSchema({
            pattern: Joi.string().required()
          })
        ).required()
      })
    ).required(),
    swagger: Joi.object<EnvSwaggerValidationSchema>(
      new EnvSwaggerValidationSchema({
        enable: Joi.boolean().required()
      })
    ).required()
  })
).required();
