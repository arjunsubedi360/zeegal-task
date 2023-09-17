"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReasonPhrasesEnum = exports.HttpStatusEnum = void 0;
var HttpStatusEnum;
(function (HttpStatusEnum) {
    HttpStatusEnum[HttpStatusEnum["CONTINUE"] = 100] = "CONTINUE";
    HttpStatusEnum[HttpStatusEnum["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatusEnum[HttpStatusEnum["PROCESSING"] = 102] = "PROCESSING";
    HttpStatusEnum[HttpStatusEnum["OK"] = 200] = "OK";
    HttpStatusEnum[HttpStatusEnum["CREATED"] = 201] = "CREATED";
    HttpStatusEnum[HttpStatusEnum["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatusEnum[HttpStatusEnum["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatusEnum[HttpStatusEnum["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatusEnum[HttpStatusEnum["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatusEnum[HttpStatusEnum["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatusEnum[HttpStatusEnum["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    HttpStatusEnum[HttpStatusEnum["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HttpStatusEnum[HttpStatusEnum["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatusEnum[HttpStatusEnum["MOVED_TEMPORARILY"] = 302] = "MOVED_TEMPORARILY";
    HttpStatusEnum[HttpStatusEnum["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatusEnum[HttpStatusEnum["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatusEnum[HttpStatusEnum["USE_PROXY"] = 305] = "USE_PROXY";
    HttpStatusEnum[HttpStatusEnum["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatusEnum[HttpStatusEnum["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatusEnum[HttpStatusEnum["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusEnum[HttpStatusEnum["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusEnum[HttpStatusEnum["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatusEnum[HttpStatusEnum["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusEnum[HttpStatusEnum["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusEnum[HttpStatusEnum["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatusEnum[HttpStatusEnum["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatusEnum[HttpStatusEnum["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatusEnum[HttpStatusEnum["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatusEnum[HttpStatusEnum["CONFLICT"] = 409] = "CONFLICT";
    HttpStatusEnum[HttpStatusEnum["GONE"] = 410] = "GONE";
    HttpStatusEnum[HttpStatusEnum["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatusEnum[HttpStatusEnum["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatusEnum[HttpStatusEnum["REQUEST_TOO_LONG"] = 413] = "REQUEST_TOO_LONG";
    HttpStatusEnum[HttpStatusEnum["REQUEST_URI_TOO_LONG"] = 414] = "REQUEST_URI_TOO_LONG";
    HttpStatusEnum[HttpStatusEnum["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatusEnum[HttpStatusEnum["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HttpStatusEnum[HttpStatusEnum["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatusEnum[HttpStatusEnum["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
    HttpStatusEnum[HttpStatusEnum["INSUFFICIENT_SPACE_ON_RESOURCE"] = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE";
    HttpStatusEnum[HttpStatusEnum["METHOD_FAILURE"] = 420] = "METHOD_FAILURE";
    HttpStatusEnum[HttpStatusEnum["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    HttpStatusEnum[HttpStatusEnum["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatusEnum[HttpStatusEnum["LOCKED"] = 423] = "LOCKED";
    HttpStatusEnum[HttpStatusEnum["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpStatusEnum[HttpStatusEnum["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HttpStatusEnum[HttpStatusEnum["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatusEnum[HttpStatusEnum["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    HttpStatusEnum[HttpStatusEnum["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    HttpStatusEnum[HttpStatusEnum["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatusEnum[HttpStatusEnum["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatusEnum[HttpStatusEnum["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatusEnum[HttpStatusEnum["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatusEnum[HttpStatusEnum["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatusEnum[HttpStatusEnum["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    HttpStatusEnum[HttpStatusEnum["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    HttpStatusEnum[HttpStatusEnum["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(HttpStatusEnum || (exports.HttpStatusEnum = HttpStatusEnum = {}));
var ReasonPhrasesEnum;
(function (ReasonPhrasesEnum) {
    ReasonPhrasesEnum["ACCEPTED"] = "Accepted";
    ReasonPhrasesEnum["BAD_GATEWAY"] = "Bad Gateway";
    ReasonPhrasesEnum["BAD_REQUEST"] = "Bad Request";
    ReasonPhrasesEnum["CONFLICT"] = "Conflict";
    ReasonPhrasesEnum["CONTINUE"] = "Continue";
    ReasonPhrasesEnum["CREATED"] = "Created";
    ReasonPhrasesEnum["EXPECTATION_FAILED"] = "Expectation Failed";
    ReasonPhrasesEnum["FAILED_DEPENDENCY"] = "Failed Dependency";
    ReasonPhrasesEnum["FORBIDDEN"] = "Forbidden";
    ReasonPhrasesEnum["GATEWAY_TIMEOUT"] = "Gateway Timeout";
    ReasonPhrasesEnum["GONE"] = "Gone";
    ReasonPhrasesEnum["HTTP_VERSION_NOT_SUPPORTED"] = "HTTP Version Not Supported";
    ReasonPhrasesEnum["IM_A_TEAPOT"] = "I'm a teapot";
    ReasonPhrasesEnum["INSUFFICIENT_SPACE_ON_RESOURCE"] = "Insufficient Space on Resource";
    ReasonPhrasesEnum["INSUFFICIENT_STORAGE"] = "Insufficient Storage";
    ReasonPhrasesEnum["INTERNAL_SERVER_ERROR"] = "Internal Server Error";
    ReasonPhrasesEnum["LENGTH_REQUIRED"] = "Length Required";
    ReasonPhrasesEnum["LOCKED"] = "Locked";
    ReasonPhrasesEnum["METHOD_FAILURE"] = "Method Failure";
    ReasonPhrasesEnum["METHOD_NOT_ALLOWED"] = "Method Not Allowed";
    ReasonPhrasesEnum["MOVED_PERMANENTLY"] = "Moved Permanently";
    ReasonPhrasesEnum["MOVED_TEMPORARILY"] = "Moved Temporarily";
    ReasonPhrasesEnum["MULTI_STATUS"] = "Multi-Status";
    ReasonPhrasesEnum["MULTIPLE_CHOICES"] = "Multiple Choices";
    ReasonPhrasesEnum["NETWORK_AUTHENTICATION_REQUIRED"] = "Network Authentication Required";
    ReasonPhrasesEnum["NO_CONTENT"] = "No Content";
    ReasonPhrasesEnum["NON_AUTHORITATIVE_INFORMATION"] = "Non Authoritative Information";
    ReasonPhrasesEnum["NOT_ACCEPTABLE"] = "Not Acceptable";
    ReasonPhrasesEnum["NOT_FOUND"] = "Not Found";
    ReasonPhrasesEnum["NOT_IMPLEMENTED"] = "Not Implemented";
    ReasonPhrasesEnum["NOT_MODIFIED"] = "Not Modified";
    ReasonPhrasesEnum["OK"] = "OK";
    ReasonPhrasesEnum["PARTIAL_CONTENT"] = "Partial Content";
    ReasonPhrasesEnum["PAYMENT_REQUIRED"] = "Payment Required";
    ReasonPhrasesEnum["PERMANENT_REDIRECT"] = "Permanent Redirect";
    ReasonPhrasesEnum["PRECONDITION_FAILED"] = "Precondition Failed";
    ReasonPhrasesEnum["PRECONDITION_REQUIRED"] = "Precondition Required";
    ReasonPhrasesEnum["PROCESSING"] = "Processing";
    ReasonPhrasesEnum["PROXY_AUTHENTICATION_REQUIRED"] = "Proxy Authentication Required";
    ReasonPhrasesEnum["REQUEST_HEADER_FIELDS_TOO_LARGE"] = "Request Header Fields Too Large";
    ReasonPhrasesEnum["REQUEST_TIMEOUT"] = "Request Timeout";
    ReasonPhrasesEnum["REQUEST_TOO_LONG"] = "Request Entity Too Large";
    ReasonPhrasesEnum["REQUEST_URI_TOO_LONG"] = "Request-URI Too Long";
    ReasonPhrasesEnum["REQUESTED_RANGE_NOT_SATISFIABLE"] = "Requested Range Not Satisfiable";
    ReasonPhrasesEnum["RESET_CONTENT"] = "Reset Content";
    ReasonPhrasesEnum["SEE_OTHER"] = "See Other";
    ReasonPhrasesEnum["SERVICE_UNAVAILABLE"] = "Service Unavailable";
    ReasonPhrasesEnum["SWITCHING_PROTOCOLS"] = "Switching Protocols";
    ReasonPhrasesEnum["TEMPORARY_REDIRECT"] = "Temporary Redirect";
    ReasonPhrasesEnum["TOO_MANY_REQUESTS"] = "Too Many Requests";
    ReasonPhrasesEnum["UNAUTHORIZED"] = "Unauthorized";
    ReasonPhrasesEnum["UNAVAILABLE_FOR_LEGAL_REASONS"] = "Unavailable For Legal Reasons";
    ReasonPhrasesEnum["UNPROCESSABLE_ENTITY"] = "Unprocessable Entity";
    ReasonPhrasesEnum["UNSUPPORTED_MEDIA_TYPE"] = "Unsupported Media Type";
    ReasonPhrasesEnum["USE_PROXY"] = "Use Proxy";
    ReasonPhrasesEnum["MISDIRECTED_REQUEST"] = "Misdirected Request";
})(ReasonPhrasesEnum || (exports.ReasonPhrasesEnum = ReasonPhrasesEnum = {}));
