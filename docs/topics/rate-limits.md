# Rate Limits

Rate limits exist across Yana's APIs to prevent spam, abuse, and service overload.

### Header Format

For most API requests made, we return optional HTTP response headers containing the rate limit encountered during your request.

#### Rate Limit Header Examples
```
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1470173023
X-RateLimit-Reset-After: 1
```

- **X-RateLimit-Limit** - The maximum number of requests that can be made in the current period.
- **X-RateLimit-Remaining** - The number of requests remaining in the current period.
- **X-RateLimit-Reset** - The time at which the current rate limit period resets in UTC epoch time.
- **X-RateLimit-Reset-After** - Total time (in seconds) of when the current rate limit will reset.

### Exceeding A Rate Limit

In the case that a rate limit is exceeded, the API will return a HTTP 429 response code with a JSON body. Your application should rely on the `retry_after` field to determine when to retry the request.

#### Rate Limit Response Structure

| Field         | Type      | Description                                                   |
| :----         | :---      | :---                                                          |
| message       | string    | A message describing the rate limit that was exceeded.        |
| retry_after   | integer   | The number of seconds to wait before retrying the request.    |
