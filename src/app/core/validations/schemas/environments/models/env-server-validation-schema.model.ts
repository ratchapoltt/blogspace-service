import * as Joi from "joi";

export class EnvServerValidationSchema {
  public readonly port: Joi.NumberSchema;
  public readonly hostname: Joi.StringSchema;

  public constructor(data: Required<EnvServerValidationSchema>) {
    Object.assign(this, data);
  }
}
