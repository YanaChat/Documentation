# Users Resource

Users in Yana are generally considered the base entity. Users can spawn across the entire platform, be members of organizations participate in text and voice chat, and much more.

:::warning
Yana API is currently in development and is subject to change. The content of this page is not fixed and may change at any time.
:::

## Usernames

Yana enforces the following restrictions for usernames:

1. Can contain most valid unicode characters. We limit some zero-width and non-rendering characters.
2. Must be between 2 and 32 characters long.
3. Are sanitized and trimmed of leading, trailing, and excessive internal whitespace
4. Cannot contain the following substrings: `@`, `#`, `:`, `yana`

### User Object

#### User Structure

| Field         | Type      | Description                                               | REQUIRED OAUTH2 SCOPE | API Version       |
| :---          | :---      | :---                                                      | :---                  | :---              |
| id            | snowflake | the user's id                                             | identify              | Not Implemented   |
| username      | string    | the user's username                                       | identify              | Not Implemented   |
| avatar        | ?string   | the user's avatar hash                                    | identify              | Not Implemented   |
| email         | string    | the user's email                                          | identify              | Not Implemented   |
| mfa_enabled?  | boolean   | whether the user has two factor enabled on their account  | identify              | Not Implemented   |
| banner?       | string    | the user's banner hash                                    | identify              | Not Implemented   |
| flags?        | integer   | the [flags](#user-flags) on a user's account              | identify              | Not Implemented   |

#### Example User

```json
{
    "id": "41771983423143940",
    "username": "kap35",
    "avatar": "image_content",
    "email": "my_email@email.com",
    "mfa_enabled": false,
    "banner": "image_content",
    "flags": [],
}
```

#### User Flags

| Value  | Name             | Description       |
| :---   | :---             | :---              |
| 1 << 0 | STAFF            | Yana Employee     |
| 1 << 1 | CERTIFIED_DOCTOR | Certified Doctor  |

### Get Current User

**GET** `/users/@me`

Returns the [user](#user-object) object of the requester's account.

### Get User

**GET** `/users/{user.id}`

Returns a [user](#user-object) object for a given user ID.

### Modify Current User

**PATCH** `/users/@me`

Modify the requester's user account settings. Returns a [user](#user-object) on success.

#### JSON Params

| Field         | Type          | Description                           | API Version       |
| :---          | :---          | :---                                  | :---              |
| username?     | string        | the user's username                   | Not Implemented   |
| avatar?       | ?image data   | the user's avatar                     | Not Implemented   |
| banner?       | ?image data   | the user's banner                     | Not Implemented   |

### Get Current User Organizations

**GET** `/users/@me/organizations`

Returns a list of partial [organization](/docs/resources/organization#organization-object) objects the current user is a member of.

#### Example User

```json
{
    "username": "kap35",
    "avatar": "image_content",
    "banner": "image_content",
}
```

### Get Current User Organization Member

**GET** `/users/@me/organizations/{organization.id}/member`

Returns a [organization member](/docs/resources/organization#organization-member-object) object for the current user.

### Leave Organization

**DELETE** `/users/@me/organizations/{organization.id}`

Leave a organization. Returns a 204 empty response on success.
