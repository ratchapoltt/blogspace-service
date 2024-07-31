import * as Joi from "joi";

export class EnvSecurityCorsValidationSchema {
  public readonly origins: Joi.ArraySchema<string[]>;
  public readonly methods: Joi.ArraySchema<string[]>;
  public readonly allowedHeaders: Joi.ArraySchema<string[]>;
  public readonly exposedHeaders: Joi.ArraySchema<string[]>;
  public readonly credentials: Joi.BooleanSchema;
  public readonly maxAge: Joi.NumberSchema;
  public readonly optionsSuccessStatus: Joi.NumberSchema;
  public readonly preflightContinue: Joi.BooleanSchema;

  public constructor(data: Required<EnvSecurityCorsValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvSecurityCookieValidationSchema {
  public readonly secret: Joi.StringSchema;

  public constructor(data: Required<EnvSecurityCookieValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvSecurityApiValidationSchema {
  public readonly key: Joi.StringSchema;

  public constructor(data: Required<EnvSecurityApiValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvSecurityValidationSchema {
  public readonly cors: Joi.ObjectSchema<EnvSecurityCorsValidationSchema>;
  public readonly cookie: Joi.ObjectSchema<EnvSecurityCookieValidationSchema>;
  public readonly api: Joi.ObjectSchema<EnvSecurityApiValidationSchema>;

  public constructor(data: Required<EnvSecurityValidationSchema>) {
    Object.assign(this, data);
  }
}
