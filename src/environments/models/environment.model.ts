import { EnvironmentLogger } from "./environment-logger.model";
import { EnvironmentSecurity } from "./environment-security.model";
import { EnvironmentServer } from "./environment-server.model";
import { EnvironmentSwagger } from "./environment-swagger.model";
import { EnvironmentSystem } from "./environment-system.model";

export class Environment {
  public readonly system!: EnvironmentSystem;
  public readonly server!: EnvironmentServer;
  public readonly security!: EnvironmentSecurity;
  public readonly logger!: EnvironmentLogger;
  public readonly swagger!: EnvironmentSwagger;

  public constructor(data: Required<Environment>) {
    Object.assign(this, data);
  }
}
