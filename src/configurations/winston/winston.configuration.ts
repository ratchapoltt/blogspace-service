import { environment } from "@environment";

import stringFormat from "string-format";

import * as winston from "winston";

const levels: winston.config.AbstractConfigSetLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  verbose: 4,
  debug: 5
};

const colors: Record<string, string> = {
  fatal: "red bold",
  error: "red",
  warn: "yellow",
  info: "green",
  verbose: "cyan",
  debug: "blue"
};

const format: winston.Logform.Format = winston.format.combine(
  winston.format.errors({
    stack: environment.logger.error.stack
  }),
  winston.format.json(),
  winston.format.timestamp({
    format: environment.logger.timestamp.format
  }),
  winston.format.ms(),
  winston.format.colorize({
    all: environment.logger.colorize.all,
    colors
  }),
  winston.format.label({
    label: stringFormat(
      environment.logger.label.pattern,
      environment.system.application.name,
      environment.system.application.version
    ),
    message: environment.logger.label.message
  }),
  winston.format.printf((data: winston.Logform.TransformableInfo): string => {
    return stringFormat(
      environment.logger.printf.pattern,
      data.label,
      data.timestamp,
      data.level,
      data.context,
      data.message,
      data.ms,
      data.stack ? `\n${data.stack}` : ""
    );
  })
);

const transports: winston.transport[] = [new winston.transports.Console()];

const configuration: winston.LoggerOptions = {
  levels,
  format,
  transports
};

export default configuration;
