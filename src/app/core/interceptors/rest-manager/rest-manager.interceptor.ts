import { ContextService, ContextStore, DateService, TranslatePropertyName, TranslateService } from "@app/common";
import { ApiHeaderResponse, ApiResponse } from "@app/dto";
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";

import { Observable, map } from "rxjs";

@Injectable()
export class RestManagerInterceptor
  implements NestInterceptor<string | number | Record<string, unknown> | Date, ApiResponse>
{
  private readonly contextService: ContextService;
  private readonly dateService: DateService;
  private readonly translateService: TranslateService;

  public constructor(contextService: ContextService, dateService: DateService, translateService: TranslateService) {
    this.contextService = contextService;
    this.dateService = dateService;
    this.translateService = translateService;
  }

  public intercept(
    context: ExecutionContext,
    next: CallHandler<string | number | Record<string, unknown> | Date>
  ): Observable<ApiResponse> {
    return next.handle().pipe(
      map((data: string | number | Record<string, unknown> | Date): ApiResponse => {
        const { accept }: ContextStore = this.contextService.getStore();
        const [code, message]: string[] = this.translateService
          .translate(TranslatePropertyName.API_SUCCESS, {
            language: accept.language
          })
          .split("::");
        const now: Date = this.dateService.now();

        return new ApiResponse({
          header: new ApiHeaderResponse({
            code,
            message,
            timestamp:
              accept.language === "th"
                ? this.dateService.convertDDMMBBBBHHmmss(now, "/")
                : this.dateService.convertDDMMYYYYHHmmss(now, "/")
          }),
          payload: data
        });
      })
    );
  }
}
