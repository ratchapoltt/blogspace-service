export class EnvironmentServer {
  public readonly port: number;
  public readonly hostname: string;

  public constructor(data: Required<EnvironmentServer>) {
    Object.assign(this, data);
  }
}
