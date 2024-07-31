import * as Joi from "joi";

export class EnvLoggerErrorValidationSchema {
  public readonly stack!: Joi.BooleanSchema;

  public constructor(data: Required<EnvLoggerErrorValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvLoggerTimestampValidationSchema {
  public readonly format!: Joi.StringSchema;

  public constructor(data: Required<EnvLoggerTimestampValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvLoggerColorizeValidationSchema {
  public readonly all!: Joi.BooleanSchema;

  public constructor(data: Required<EnvLoggerColorizeValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvLoggerLabelValidationSchema {
  public readonly pattern!: Joi.StringSchema;
  public readonly message!: Joi.BooleanSchema;

  public constructor(data: Required<EnvLoggerLabelValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvLoggerPrintfValidationSchema {
  public readonly pattern!: Joi.StringSchema;

  public constructor(data: Required<EnvLoggerPrintfValidationSchema>) {
    Object.assign(this, data);
  }
}

export class EnvLoggerValidationSchema {
  public readonly level!: Joi.StringSchema;
  public readonly error!: Joi.ObjectSchema<EnvLoggerErrorValidationSchema>;
  public readonly timestamp!: Joi.ObjectSchema<EnvLoggerTimestampValidationSchema>;
  public readonly colorize!: Joi.ObjectSchema<EnvLoggerColorizeValidationSchema>;
  public readonly label!: Joi.ObjectSchema<EnvLoggerLabelValidationSchema>;
  public readonly printf!: Joi.ObjectSchema<EnvLoggerPrintfValidationSchema>;

  public constructor(data: Required<EnvLoggerValidationSchema>) {
    Object.assign(this, data);
  }
}
