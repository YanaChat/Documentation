# Organization Resource

Organizations in Yana represent a group of users.

:::warning
Yana API is currently in development and is subject to change. The content of this page is not fixed and may change at any time.
:::

### Organization Object

#### Organization Structure

| Field                     | Type      | Description                                                                                                                                   | API Version       |
| :---                      | :---      | :---                                                                                                                                          | :---              |
| id                        | snowflake | organization's id                                                                                                                             | Not implemented   |
| name                      | string    | organization's name (2-100 characters, excluding trailing and leading whitespace)                                                             | Not implemented   |
| icon                      | ?string   | organization's icon hash                                                                                                                      | Not implemented   |
| owner                     | boolean   | true if the user is the owner of the organization                                                                                             | Not implemented   |
| owner_id                  | snowflake | id of owner                                                                                                                                   | Not implemented   |
| description               | string    | organization's description (0-300 characters)                                                                                                 | Not implemented   |
| pathology_id              | snowflake | id of the pathology the organization is in                                                                                                    | Not implemented   |
| banner                    | ?string   | organization's banner hash                                                                                                                    | Not implemented   |
| home_channel_id           | snowflake | default channel for the organization                                                                                                          | Not implemented   |
| approximate_member_count? | integer   | approximate number of total members in this organization, returned from the `GET /organizations/{id}` endpoint when `with_counts` is `true`   | Not implemented   |

#### Example Organization

```json
{
    "id": "41771983423143945",
    "name": "Organization name",
    "description": "Organization description",
    "icon": "image_data",
    "banner": "image_data",
    "owner": true,
    "owner_id": "41771983423143939",
    "home_channel_id": "41771983423143938",
    "pathology_id": "41771983423143938",
    "approximate_member_count": 100,
}
```

### Organization Member Object

#### Organization Member Structure

| Field         | Type          | Description                                   | API Version       |
| :---          | :---          | :---                                          | :---              |
| user          | user object   | the user this organization member represents  | Not implemented   |


#### Example Organization Member

```json
{
    "user": {
        "id": "41771983423143940",
        "username": "kap35",
        "avatar": "image_content",
        "email": "my_email@email.com",
        "mfa_enabled": false,
        "banner": "image_content",
        "flags": [],
    }
}
```

### Create Organization

**POST** `/organizations`

Create a new organization. Returns a [organization](#organization-object) on success.

#### JSON Params

| Field         | Type          | Description                                   | API Version       |
| :---          | :---          | :---                                          | :---              |
| name          | string        | name of the organization (2-100 characters)   | Not implemented   |
| pathology_id  | snowflake     | id of the pathology the organization is in    | Not implemented   |

### Get Organization

**GET** `/organizations/{organization.id}`

Returns the [organization](#organization-object) object for the given id. If with_counts is set to true, this endpoint will also return approximate_member_count and approximate_presence_count for the organization.

#### Query String Params

| Field             | Type      | Description                                                                           | Required | Default |
| :---              | :---      | :---                                                                                  | :---     | :---    |
| with_counts?      | boolean   | when true, will return approximate member and presence counts for the organization    | false    | false   |

#### Example Response

```json
{
    "with_counts": true
}
```
```json
{
    "with_counts": false
}
```

### Modify Organization

**PATCH** `/organizations/{organization.id}`

Modify a organization's settings. Returns a [organization](#organization-object) object on success.

#### JSON Params

| Field         | Type          | Description                                                   | API Version       |
| :---          | :---          | :---                                                          | :---              |
| name?         | string        | organization's name                                           | Not implemented   |
| icon?         | ?image data   | base64 1024x1024 png/jpeg/gif image                           | Not implemented   |
| owner_id?     | string        | user id to transfer organization ownership to (must be owner) | Not implemented   |
| description?  | string        | base64 16:9 png/jpeg image for the organization banner        | Not implemented   |
| banner?       | ?image data   | base64 1024x1024 png/jpeg/gif image                           | Not implemented   |

### Delete Organization

**DELETE** `/organizations/{organization.id}`

Delete a organization permanently. User must be owner. Returns `204 No Content` on success.

### Get Organization Channels

**GET** `/organizations/{organization.id}/channels`

Returns a list of [channel](#channel-object) objects.

### Create Organization Channel

**POST** `/organizations/{organization.id}/channels`

Create a new channel [channel](#channel-object) object for the organization. Returns the new [channel](#channel-object) object on success.

#### JSON Params

| Field         | Type          | Description                                                                   | Channel Type      | API Version       |
| :---          | :---          | :---                                                                          | :---              | :---              |
| name          | string        | name of the channel (2-100 characters)                                        | All               | Not implemented   |
| type          | integer       | the [type](/docs/resources/channel#channel-types) of channel                  | All               | Not implemented   |

### Get Organization Member

**GET** `/organizations/{organization.id}/members/{user.id}`

Returns a [organization member](#organization-member-object) object for the given user.

### List Organization Members

**GET** `/organizations/{organization.id}/members`

Returns a list of [organization member](#organization-member-object) objects that are members of the organization.

#### Query String Params

| Field             | Type      | Description                                                                           | Default |
| :---              | :---      | :---                                                                                  | :---    |
| limit?            | integer   | max number of members to return (1-1000)                                              | 1       |
| after?            | snowflake | the highest user id in the previous page                                              | 0       |

### Remove Organization Member

**DELETE** `/organizations/{organization.id}/members/{user.id}`

Remove a member from a organization. Returns a 204 empty response on success.
