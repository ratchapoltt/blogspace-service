import { environment } from "@environment";
import { Injectable, OnModuleInit } from "@nestjs/common";

import propertiesReader from "properties-reader";
import stringFormat from "string-format";

import path from "node:path";

import { TranslateException, TranslateReaderPropertiesFileException } from "./exceptions";
import { TranslateOptions } from "./interfaces";
import { TranslateLanguage } from "./models";

@Injectable()
export class TranslateService implements OnModuleInit {
  private translateLanguage!: TranslateLanguage;

  private formatMessage(message: string, args: string[]): string {
    return args !== null && args !== undefined ? stringFormat(message, ...args) : message;
  }

  public onModuleInit(): void {
    try {
      this.translateLanguage = new TranslateLanguage({
        en: propertiesReader(path.join(__dirname, environment.i18n.language.en.path), environment.i18n.encoding),
        th: propertiesReader(path.join(__dirname, environment.i18n.language.th.path), environment.i18n.encoding)
      });
    } catch (error) {
      const err: Error = error as Error;

      throw new TranslateReaderPropertiesFileException(
        `Unable to read file from path ${err.message.replace("ENOENT: no such file or directory, open ", "").replaceAll("'", "")}`
      );
    }
  }

  public translate(propertyName: string, option?: TranslateOptions): string {
    const language: string = option?.language ?? environment.i18n.default;

    if (Object.hasOwn(this.translateLanguage, language)) {
      const value: propertiesReader.Value = this.translateLanguage[language].get(propertyName);

      if (value === null || value === undefined) {
        throw new TranslateException(
          `Unable to translate the language because the key ${propertyName} is missing in the ${language} language file`
        );
      }

      return this.formatMessage(value.toString(), option?.args);
    } else {
      throw new TranslateException(`Unable to translate as ${language} language is not supported`);
    }
  }
}
