// HTTP 200 - Success Responses
// These responses indicate that the request has succeeded.
const SUCCESS_200 = {
  USER_DELETED: "User successfully deleted",
  REQUEST_SUCCESSFUL: "Request was successful",
  DATA_RETRIEVED: "Data successfully retrieved",
};

// HTTP 201 - Created Responses
// These responses indicate that the request has succeeded and a new resource has been created.
const SUCCESS_201 = {
  USER_CREATED: "User successfully created",
  RESOURCE_CREATED: "Resource successfully created",
  ITEM_ADDED: "Item successfully added",
};

// HTTP 400 - Bad Request Errors
// These errors indicate that the request sent by the client was invalid.
const ERR_400 = {
  BAD_REQUEST: "Bad request",
  MISSING_PARAMETERS: "Required parameters are missing",
  INVALID_DATA: "Invalid data provided",
  DUPLICATE_REQUEST: "Duplicate request",
};

// HTTP 401 - Unauthorized Errors
// These errors indicate that the client must authenticate itself to get the requested response.
const ERR_401 = {
  HEADER_MISSING: "Authorization header missing",
  INVALID_FORMAT: "Invalid authorization format. Expected 'Bearer <token>'",
  UNAUTHORIZED: "Unauthorized access",
  TOKEN_EXPIRED: "Token has expired",
  INVALID_CREDENTIALS: "Invalid credentials provided", // Indicates that the provided credentials are invalid
};

// HTTP 403 - Forbidden Errors
// These errors indicate that the server understands the request but refuses to authorize it.
const ERR_403 = {
  FORBIDDEN: "Forbidden",
  ACCESS_DENIED: "Access denied",
  INSUFFICIENT_PERMISSIONS: "Insufficient permissions",
};

// HTTP 404 - Not Found Errors
// These errors indicate that the server can not find the requested resource.
const ERR_404 = {
  NOT_FOUND: "Resource not found",
  USER_NOT_FOUND: "User not found",
  PAGE_NOT_FOUND: "Page not found",
};

// HTTP 409 - Conflict Errors
// These errors indicate that the request could not be processed because of conflict in the request.
const ERR_409 = {
  CONFLICT: "Conflict",
  EMAIL_IN_USE: "User email already in use",
  RESOURCE_EXISTS: "Resource already exists",
  DATA_CONFLICT: "Data conflict",
};

// HTTP 500 - Internal Server Errors
// These errors indicate that the server encountered an unexpected condition that prevented it from fulfilling the request.
const ERR_500 = {
  ERROR_OCCURRED: "Server error occurred",
  INTERNAL_SERVER_ERROR: "Internal server error",
  DATABASE_ERROR: "Database error occurred",
  SERVICE_UNAVAILABLE: "Service is temporarily unavailable",
};

// Exporting all error message objects
export {
  SUCCESS_200,
  SUCCESS_201,
  ERR_400,
  ERR_401,
  ERR_403,
  ERR_404,
  ERR_409,
  ERR_500,
};
