export class EnvironmentSystemApplication {
  public readonly version!: string;
  public readonly name!: string;
  public readonly description!: string;

  public constructor(data: Required<EnvironmentSystemApplication>) {
    Object.assign(this, data);
  }
}

export class EnvironmentSystemDate {
  public readonly timezone!: string;

  public constructor(data: Required<EnvironmentSystemDate>) {
    Object.assign(this, data);
  }
}

export class EnvironmentSystem {
  public readonly profile!: string;
  public readonly application!: EnvironmentSystemApplication;
  public readonly date!: EnvironmentSystemDate;

  public constructor(data: Required<EnvironmentSystem>) {
    Object.assign(this, data);
  }
}
