import { Reader } from "properties-reader";

export class TranslateLanguage {
  public readonly en: Reader;
  public readonly th: Reader;

  public constructor(data: Required<TranslateLanguage>) {
    Object.assign(this, data);
  }
}
