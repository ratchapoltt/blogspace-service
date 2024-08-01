export class ApiHeaderResponse {
  public code: string;
  public message: string;
  public timestamp: string;

  public constructor(data?: Partial<ApiHeaderResponse>) {
    if (data !== null && data !== undefined) {
      Object.assign(this, data);
    }
  }
}

export class ApiErrorResponse {
  public header: ApiHeaderResponse;
  public error: string | number | object | Date;

  public constructor(data?: Partial<ApiErrorResponse>) {
    if (data !== null && data !== undefined) {
      Object.assign(this, data);
    }
  }
}

export class ApiResponse {
  public header: ApiHeaderResponse;
  public payload: string | number | object | Date;

  public constructor(data?: Partial<ApiResponse>) {
    if (data !== null && data !== undefined) {
      Object.assign(this, data);
    }
  }
}
