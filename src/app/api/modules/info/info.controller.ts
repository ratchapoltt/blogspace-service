import { InformationApplicationResponse } from "@app/dto";
import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { InfoService } from "./info.service";

@ApiTags("InfoController")
@Controller()
export class InfoController {
  private readonly service: InfoService;

  public constructor(service: InfoService) {
    this.service = service;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public async index(): Promise<InformationApplicationResponse> {
    return await this.service.informationApplication();
  }
}
