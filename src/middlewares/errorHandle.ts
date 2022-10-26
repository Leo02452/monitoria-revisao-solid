import { NextFunction, Request, Response } from 'express';
import { errorCatalog, ErrorTypes } from '../errors/catalog';

const errorHandle = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const messageAsErrorTypes = err.message as ErrorTypes;

  const mappedError = errorCatalog[messageAsErrorTypes];
  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message });
  }

  return res.status(500).json({ message: err.message });
};

export default errorHandle;
