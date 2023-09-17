import { HttpStatusEnum, ReasonPhrasesEnum } from '../enums'

/**
 * Build error response for validation errors.
 */
function buildError(err: any) {
  // Validation errors
  if (err.isJoi) {
    return {
      success: false,
      code: HttpStatusEnum.BAD_REQUEST,
      message:  ReasonPhrasesEnum.BAD_REQUEST || err ,
      details:
        err.details &&
        err.details.map((err: any) => {
          return {
            message: err.message || err,
            param: err.path.join('.'),
          }
        }),
    }
  } else {
    return {
      success: false,
      code: HttpStatusEnum.INTERNAL_SERVER_ERROR,
      message: ReasonPhrasesEnum.INTERNAL_SERVER_ERROR,
    }
  }
}

export default buildError
