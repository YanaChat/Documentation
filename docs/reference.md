# API Reference

Yana API is a HTTPS/REST API.

#### Base URL

```
https://api.yana.tchat
```

## API Versioning

:::warning
Yana API is currently in development and is subject to change. So it's not stable. The default version changes every time we make changes to the API. We recommend that you specify the API version you want to use in your code.
:::

Yana exposes different versions of our API. You should specify which version to use by including it in the request path like `https://api.yana.tchat/v{version_number}`. Omitting the version number from the route will route requests to the current default version (marked below). You can find the change log for the newest API version here.

#### API Versions

| Version       | Status        | Default   |
| :---          | :---          | :---      |
| 0.0.0.1       | Not Released  | ✓        |

*Last updated: none*

When the API version is marked as `Unavailable` or `Discontinued`, it is no longer available and will never be available again. If you are using an outdated version, you should update your code to use a newer version.

## Authentication

Yana uses OAuth2 to authenticate requests. You can read more about it here.

Authentication is performed with the `Authorization` HTTP header in the format `Authorization: TOKEN_TYPE TOKEN`.

#### Example Bearer Token Authorization Header

```
Authorization: Bearer CZhtkLDpNYXgPH9Ml6shqh2OwykChw
```

## Snowflakes

Yana utilizes Twitter's [snowflake](https://github.com/twitter/snowflake/tree/snowflake-2010) format for uniquely identifiable descriptors (IDs). These IDs are guaranteed to be unique across all of Yana, except in some unique scenarios in which child objects share their parent's ID. Because Snowflake IDs are up to 64 bits in size (e.g. a uint64), they are always returned as strings in the HTTP API to prevent integer overflows in some languages. See [Gateway ETF/JSON](https://discord.com/developers/docs/topics/gateway#encoding-and-compression) for more information regarding Gateway encoding.

#### Snowflake ID Broken Down in Binary

```
111111111111111111111111111111111111111111 11111 11111 111111111111
64                                         22    17    12          0
```

#### Snowflake ID Format Structure (Left to Right)

| Field                 | Bits      | Number of bits    | Description                                                                   | RETRIEVAL                         |
| :---                  | :---      | :---              | :---                                                                          | :---                              |
| Timestamp             | 63 to 22  | 42 bits           | Milliseconds since Yana Epoch, the first second of 2023 or 1672531200000.     | (snowflake >> 22) + 1672531200000 |
| Internal worker ID    | 21 to 17  | 5 bits            |                                                                               | (snowflake & 0x3E0000) >> 17      |
| Internal process ID   | 16 to 12  | 5 bits            |                                                                               | (snowflake & 0x1F000) >> 12       |
| Increment             | 11 to 0   | 12 bits           | For every ID that is generated on that process, this number is incremented    | snowflake & 0xFFF                 |

### Snowflake IDs in Pagination

We typically use snowflake IDs in many of our API routes for pagination. The standardized pagination paradigm we utilize is one in which you can specify IDs `before` and `after` in combination with `limit` to retrieve a desired page of results. You will want to refer to the specific endpoint documentation for details.

It is useful to note that snowflake IDs are just numbers with a timestamp, so when dealing with pagination where you want results from the beginning of time (in Yana Epoch, but `0` works here too) or before/after a specific time you can generate a snowflake ID for that time.

#### Generating a snowflake ID from a Timestamp Example
````
(timestamp_ms - YANA_EPOCH) << 22
````

### Nullable and Optional Resource Fields

Resource fields that may contain a `null` value have types that are prefixed with a question mark. Resource fields that are optional have names that are suffixed with a question mark.

#### Example Nullable and Optional Fields

| Field                         | Type      |
| :---                          | :---      |
| optional_field?               | string    |
| nullable_field                | string?   |
| optional_and_nullable_field?  | string?   |

### Rate Limiting

The HTTP API implements a process for limiting and preventing excessive requests. For more information on rate limiting of requests, please see the [Rate Limits](/docs/topics/rate-limits) section.

## Image Formatting

#### Image Base URL

```
https://cdn.yana.tchat
```

#### Image Formats

| Format | Extension |
| :---   | :---      |
| PNG    | `.png`    |
| JPEG   | `.jpg`    |
| GIF    | `.gif`    |

#### CDN Endpoints

| Type              | Endpoint                                            | Supports          |
| :---              | :---                                                | :---              |
| User Avatar       | `/avatars/{user.id}/user_avatar.png`                | PNG, JPEG, GIF    |
| User Banner       | `/banners/{user.id}/user_banner.png`                | PNG, JPEG, GIF    |
| Organization Icon | `/icons/{organization.id}/organization_icon.png`    | PNG, JPEG, GIF    |

## Image Data

Image data is a [Data URI scheme](https://en.wikipedia.org/wiki/Data_URI_scheme) that supports JPG, GIF, and PNG formats. An example Data URI format is:

```
data:image/jpeg;base64,BASE64_ENCODED_JPEG_IMAGE_DATA
```

Ensure you use the proper content type (`image/jpeg`, `image/png`, `image/gif`) that matches the image data being provided.