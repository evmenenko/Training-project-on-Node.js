const errorsInfo = {

  "4xx": {

    badRequest: {
      message: "The request contains a syntax error",
      name: "BadRequest"
    },

    conflict: {
      message: "The request could not be completed due to conflicting access to the resource",
      name: "Conflict"
    },

    gone: {
      message: "The resource has been deleted and is no longer available",
      name: "Gone"
    },

    notFound: {
      message: "The resource is not found",
      name: "NotFound"
    },

    retryWith: {
      message: "Did not enough information",
      name: "RetryWith"
    },

    unauthorized: {
      message: "To access the requested resource requires authentication",
      name: "Unauthorized"
    },

    unprocessableEntity: {
      message: "Server cannot process the request because there is a logical error in a sent data",
      name: "UnprocessableEntity"
    },
  },

  "5xx": {

    internalServerError: {
      message: "Internal server error",
      name: "InternalServerError"
    },
    
    notImplemented: {
      message: "The server does not support capabilities required to process the request",
      name: "NotImplemented"
    },
  },
}

module.exports = errorsInfo;