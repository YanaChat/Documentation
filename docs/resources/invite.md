# Invite Resource

:::warning
Yana API is currently in development and is subject to change. The content of this page is not fixed and may change at any time.
:::

### Invite Object

Represents a code that when used, adds a user to a organization.

#### Invite Structure

| Field                         | Type                  | Description                                                                                                                               | API Version       |
| :---                          | :---                  | :---                                                                                                                                      | :---              |
| code                          | string                | the invite code (unique ID)                                                                                                               | Not implemented   |
| organization                  | organization object   | partial organization object                                                                                                               | Not implemented   |
| expires_at                    | ISO8601 timestamp     | the expiration date of this invite, returned from the `GET /invites/{code}` endpoint when with_expiration is `true`                       | Not implemented   |
| approximate_member_count?     | integer               | approximate number of total members in this organization, returned from the `GET /invites/{code}` endpoint when `with_counts` is `true`   | Not implemented   |

#### Example Invite

```json
{
}
```

### Get Invite

**GET** `/invites/{invite.code}`

Returns an [invite](#invite-object) object for the given code.

#### Query String Params

| Field         | Type      | Description                                                   |
| :---          | :---      | :---                                                          |
| with_counts?  | boolean   | whether the invite should contain approximate member counts   |

### Delete Invite

**DELETE** `/invites/{invite.code}`

Delete an invite.
