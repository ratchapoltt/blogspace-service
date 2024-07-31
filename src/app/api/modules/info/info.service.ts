import { InformationApplicationResponse } from "@app/dto";
import { Injectable } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";

import { GetInformationApplicationQuery } from "./queries";

@Injectable()
export class InfoService {
  private readonly queryBus: QueryBus;

  public constructor(queryBus: QueryBus) {
    this.queryBus = queryBus;
  }

  public async informationApplication(): Promise<InformationApplicationResponse> {
    return await this.queryBus.execute(new GetInformationApplicationQuery());
  }
}
