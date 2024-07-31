import * as Joi from "joi";

export class EnvSwaggerValidationSchema {
  public readonly enable: Joi.BooleanSchema;

  public constructor(data: Required<EnvSwaggerValidationSchema>) {
    Object.assign(this, data);
  }
}
