export class EnvironmentSecurityCors {
  public readonly origins!: string[];
  public readonly methods!: string[];
  public readonly allowedHeaders!: string[];
  public readonly exposedHeaders!: string[];
  public readonly credentials!: boolean;
  public readonly maxAge!: number;
  public readonly optionsSuccessStatus!: number;
  public readonly preflightContinue!: boolean;

  public constructor(data: Required<EnvironmentSecurityCors>) {
    Object.assign(this, data);
  }
}

export class EnvironmentSecurityCookie {
  public readonly secret!: string;

  public constructor(data: Required<EnvironmentSecurityCookie>) {
    Object.assign(this, data);
  }
}

export class EnvironmentSecurityApi {
  public readonly key!: string;

  public constructor(data: Required<EnvironmentSecurityApi>) {
    Object.assign(this, data);
  }
}

export class EnvironmentSecurity {
  public readonly cors!: EnvironmentSecurityCors;
  public readonly cookie!: EnvironmentSecurityCookie;
  public readonly api!: EnvironmentSecurityApi;

  public constructor(data: Required<EnvironmentSecurity>) {
    Object.assign(this, data);
  }
}
