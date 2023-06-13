import { ErrorOptions } from 'commander';

export class HttpError extends Error {
  constructor(
    public status: number,
    public statusMesage: string,
    message?: string | undefined,
    options?: ErrorOptions | undefined
  ) {
    super(message, options);
  }
}
