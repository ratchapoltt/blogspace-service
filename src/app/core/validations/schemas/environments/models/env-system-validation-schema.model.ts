import * as Joi from "joi";

export class EnvSystemApplicationValidationSchema {
  public readonly version: Joi.StringSchema;
  public readonly name: Joi.StringSchema;
  public readonly description: Joi.StringSchema;

  public constructor(data: Required<EnvSystemApplicationValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvSystemDateValidationSchema {
  public readonly timezone: Joi.StringSchema;

  public constructor(data: Required<EnvSystemDateValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvSystemValidationSchema {
  public readonly profile: Joi.StringSchema;
  public readonly application: Joi.ObjectSchema<EnvSystemApplicationValidationSchema>;
  public readonly date: Joi.ObjectSchema<EnvSystemDateValidationSchema>;

  public constructor(data: Required<EnvSystemValidationSchema>) {
    Object.assign(this, data);
  }
}
