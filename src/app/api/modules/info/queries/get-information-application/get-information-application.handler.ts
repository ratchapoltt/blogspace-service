import { InformationApplicationResponse } from "@app/dto";
import { environment } from "@environment";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

import { GetInformationApplicationQuery } from "./get-information-application.query";

@QueryHandler(GetInformationApplicationQuery)
export class GetInformationApplicationHandler
  implements IQueryHandler<GetInformationApplicationQuery, InformationApplicationResponse>
{
  public execute(_query: GetInformationApplicationQuery): Promise<InformationApplicationResponse> {
    return Promise.resolve(
      new InformationApplicationResponse({
        version: environment.system.application.version,
        name: environment.system.application.name,
        description: environment.system.application.description
      })
    );
  }
}
