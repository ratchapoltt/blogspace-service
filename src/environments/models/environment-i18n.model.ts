export class EnvironmentI18nFile {
  public readonly path: string;

  public constructor(data: Required<EnvironmentI18nFile>) {
    Object.assign(this, data);
  }
}

export class EnvironmentI18nLanguage {
  public readonly en: EnvironmentI18nFile;
  public readonly th: EnvironmentI18nFile;

  public constructor(data: Required<EnvironmentI18nLanguage>) {
    Object.assign(this, data);
  }
}

export class EnvironmentI18n {
  public readonly default: string;
  public readonly encoding: string;
  public readonly language: EnvironmentI18nLanguage;

  public constructor(data: Required<EnvironmentI18n>) {
    Object.assign(this, data);
  }
}
