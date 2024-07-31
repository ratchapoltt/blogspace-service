export class ContextStoreAccept {
  public readonly language: string;

  public constructor(data: Required<ContextStoreAccept>) {
    Object.assign(this, data);
  }
}

export class ContextStore {
  public readonly accept: ContextStoreAccept;

  public constructor(data: Required<ContextStore>) {
    Object.assign(this, data);
  }
}
