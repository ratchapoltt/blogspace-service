export class InformationApplicationResponse {
  public readonly version: string;
  public readonly name: string;
  public readonly description: string;

  public constructor(data: Partial<InformationApplicationResponse>) {
    Object.assign(this, data);
  }
}
