export class EnvironmentLoggerError {
  public readonly stack!: boolean;

  public constructor(data: Required<EnvironmentLoggerError>) {
    Object.assign(this, data);
  }
}

export class EnvironmentLoggerTimestamp {
  public readonly format!: string;

  public constructor(data: Required<EnvironmentLoggerTimestamp>) {
    Object.assign(this, data);
  }
}

export class EnvironmentLoggerColorize {
  public readonly all!: boolean;

  public constructor(data: Required<EnvironmentLoggerColorize>) {
    Object.assign(this, data);
  }
}

export class EnvironmentLoggerLabel {
  public readonly pattern!: string;
  public readonly message!: boolean;

  public constructor(data: Required<EnvironmentLoggerLabel>) {
    Object.assign(this, data);
  }
}

export class EnvironmentLoggerPrintf {
  public readonly pattern!: string;

  public constructor(data: Required<EnvironmentLoggerPrintf>) {
    Object.assign(this, data);
  }
}

export class EnvironmentLogger {
  public readonly level!: string;
  public readonly error!: EnvironmentLoggerError;
  public readonly timestamp!: EnvironmentLoggerTimestamp;
  public readonly colorize!: EnvironmentLoggerColorize;
  public readonly label!: EnvironmentLoggerLabel;
  public readonly printf!: EnvironmentLoggerPrintf;

  public constructor(data: Required<EnvironmentLogger>) {
    Object.assign(this, data);
  }
}
