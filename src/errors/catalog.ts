export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  UnauthorizedError = 'UnauthorizedError',
}

type ErrorResponseObject = {
  message: string;
  httpStatus: number
};

export type ErrorCatalog = Record<ErrorTypes, ErrorResponseObject>;

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Object not found',
    httpStatus: 404,
  },

  UnauthorizedError: {
    message: 'Invalid password',
    httpStatus: 401,
  },
};
