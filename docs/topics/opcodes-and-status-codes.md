# Opcodes and Status Codes

:::warning
Yana API is currently in development and is subject to change. The content of this page is not fixed and may change at any time.
:::

## HTTP

Yana API will return semantically valid HTTP response codes based on the success of your request. The following table can be used as a reference for response codes it will return.

#### HTTP Response Codes

| Code                      | Description                                                                       |
| :---                      | :---                                                                              |
| 200 (OK)                  | The request completed successfully.                                               |
| 201 (CREATED)             | The entity was created successfully.                                              |
| 204 (NO CONTENT)          | The request completed successfully but returned no content.                       |
| 304 (NOT MODIFIED)        | The entity was not modified (no action was taken).                                |
| 400 (BAD REQUEST)         | The request was improperly formatted, or the server couldn't understand it.       |
| 401 (UNAUTHORIZED)        | The `Authorization` header was missing or invalid.                                |
| 403 (FORBIDDEN)           | The `Authorization` token you passed did not have permission to the resource.     |
| 404 (NOT FOUND)           | The resource at the location specified doesn't exist.                             |
| 405 (METHOD NOT ALLOWED)  | The HTTP method used is not valid for the location specified.                     |
| 429 (TOO MANY REQUESTS)   | You are being rate limited, see Rate Limits.                                      |
| 502 (GATEWAY UNAVAILABLE) | There was not a gateway available to process your request. Wait a bit and retry.  |
| 5xx (SERVER ERROR)        | The server had an error processing your request (these are rare).                 |
