export class EnvironmentSwagger {
  public readonly enable!: boolean;

  public constructor(data: Required<EnvironmentSwagger>) {
    Object.assign(this, data);
  }
}
