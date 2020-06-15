interface ErrorData {
  message: string;
}

export interface ApiError {
  context: {
    errors: ErrorData[];
  };
}
