# Invite Resource

:::warning
Yana API is currently in development and is subject to change. The content of this page is not fixed and may change at any time.
:::

### Invite Object

Represents code that when used, adds a user to a pathology in Yana to access organizations associated with the pathology.

#### Invite Structure

| Field                         | Type                                                              | Description                                                                                                                               | API Version       |
| :---                          | :---                                                              | :---                                                                                                                                      | :---              |
| code                          | string                                                            | the invite code (unique ID)                                                                                                               | Not implemented   |
| pathology_id                  | [pathology](/docs/resources/pathology#pathology-object) object    | the pathology this invite is for                                                                                                          | Not implemented   |
| expires_at                    | ISO8601 timestamp                                                 | the expiration date of this invite, returned from the `GET /invites/{code}` endpoint when with_expiration is `true`                       | Not implemented   |

#### Example Invite

```json
{
    "code": "abcdef",
    "pathology_id": 41771983423143938,
    "expires_at": 1672531200000,
}
```

### Get Invite

**GET** `/invites/{invite.code}`

Returns an [invite](#invite-object) object for the given code.

### Delete Invite

**DELETE** `/invites/{invite.code}`

Delete an invite.
