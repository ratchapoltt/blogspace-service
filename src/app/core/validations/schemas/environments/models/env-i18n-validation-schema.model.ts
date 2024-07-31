import * as Joi from "joi";

export class EnvI18nFileValidationSchema {
  public readonly path: Joi.StringSchema;

  public constructor(data: Required<EnvI18nFileValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvI18nLanguageValidationSchema {
  public readonly en: Joi.ObjectSchema<EnvI18nFileValidationSchema>;
  public readonly th: Joi.ObjectSchema<EnvI18nFileValidationSchema>;

  public constructor(data: Required<EnvI18nLanguageValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvI18nValidationSchema {
  public readonly default: Joi.StringSchema;
  public readonly encoding: Joi.StringSchema;
  public readonly language: Joi.ObjectSchema<EnvI18nLanguageValidationSchema>;

  public constructor(data: Required<EnvI18nValidationSchema>) {
    Object.assign(this, data);
  }
}
