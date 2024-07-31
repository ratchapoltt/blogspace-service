import * as Joi from "joi";

import { EnvI18nValidationSchema } from "./env-i18n-validation-schema.model";
import { EnvLoggerValidationSchema } from "./env-logger-validation-schema.model";
import { EnvSecurityValidationSchema } from "./env-security-validation-schema.model";
import { EnvServerValidationSchema } from "./env-server-validation-schema.model";
import { EnvSwaggerValidationSchema } from "./env-swagger-validation-schema.model";
import { EnvSystemValidationSchema } from "./env-system-validation-schema.model";

export class EnvValidationSchema {
  public readonly system: Joi.ObjectSchema<EnvSystemValidationSchema>;
  public readonly server: Joi.ObjectSchema<EnvServerValidationSchema>;
  public readonly security: Joi.ObjectSchema<EnvSecurityValidationSchema>;
  public readonly i18n: Joi.ObjectSchema<EnvI18nValidationSchema>;
  public readonly logger: Joi.ObjectSchema<EnvLoggerValidationSchema>;
  public readonly swagger: Joi.ObjectSchema<EnvSwaggerValidationSchema>;

  public constructor(data: Required<EnvValidationSchema>) {
    Object.assign(this, data);
  }
}
