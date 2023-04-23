import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';
import CodeBlock from '@theme/CodeBlock';

# Channels Resource

:::warning
Yana API is currently in development and is subject to change. The content of this page is not fixed and may change at any time.
:::

### Channel Object

Represents a organization channel within Yana.

#### Channel Structure

| Field             | Type      | Description                                   | API Version       |
| :---              | :---      | :---                                          | :---              |
| id                | snowflake | the id of this channel                        | Not Implemented   |
| organization_id   | snowflake | the id of the organization                    | Not Implemented   |
| name              | string    | name of the channel (2-100 characters)        | Not Implemented   |
| type              | integer   | the [type](#channel-types) of channel         | Not Implemented   |

#### Channel Types

| Type              | Id     | Description                      |
| :---              | :---   | :---                             |
| DM                | 0      | a direct message between users   |
| ORGANIZATION_POST | 1      | a post channel                   |
| POST_TEXT         | 2      | a subpost text channel           |

#### Example Channel

```json
{
    "id": "41771983423143937",
    "organization_id": "41771983423143938",
    "name": "My Channel",
    "type": "1"
}
```

### Message Object

Represents a message sent in a channel within Yana.

#### Message Structure

| Field             | Type              | Description                                                                   | API Version       |
| :---              | :---              | :---                                                                          | :---              |
| id                | string            | the id of this message                                                        | Not Implemented   |
| channel_id        | string            | the id of the channel                                                         | Not Implemented   |
| author            | user object       | the author of this message (not guaranteed to be a valid user, see below)     | Not Implemented   |
| content           | string            | the content of the message                                                    | Not Implemented   |
| timestamp         | ISO8601 timestamp | ISO8601 timestamp of the message                                              | Not Implemented   |

#### Example Message Structure

```json
{
    "id": "41771983423143939",
    "channel_id": "41771983423143937",
    "author": {
        "id": "41771983423143940",
        "username": "kap35",
        "avatar": "image_content",
        "email": "my_email@email.com",
        "mfa_enabled": false,
        "banner": "image_content",
        "flags": [],
    },
    "content": "Message Content",
    "timestamp": "1672531200000"
}
```

### Post Message Object

Represents a post message sent in a channel within Yana.

#### Post Message Structure

| Field             | Type              | Description                                                                   | API Version       |
| :---              | :---              | :---                                                                          | :---              |
| id                | string            | the id of this message                                                        | Not Implemented   |
| channel_id        | string            | the id of the channel                                                         | Not Implemented   |
| author            | user object       | the author of this message (not guaranteed to be a valid user, see below)     | Not Implemented   |
| title             | string            | the title of the message                                                      | Not Implemented   |
| content           | string            | the content of the message                                                    | Not Implemented   |
| timestamp         | ISO8601 timestamp | ISO8601 timestamp of the message                                              | Not Implemented   |

#### Example Post Message

```json
{
    "id": "41771983423143939",
    "channel_id": "41771983423143937",
    "author": {
        "id": "41771983423143940",
        "username": "kap35",
        "avatar": "image_content",
        "email": "my_email@email.com",
        "mfa_enabled": false,
        "banner": "image_content",
        "flags": [],
    },
    "title": "Post Title",
    "content": "Message Content",
    "timestamp": "1672531200000"
}
```

### Get Channel

**GET** `/channels/{channel.id}`

Returns a [channel](#channel-object) object for the given id.

### Modify Channel

**PATCH** `/channels/{channel.id}`

Update a channel's settings. Returns a [channel](#channel-object) on success and a 400 BAD REQUEST on invalid parameters.

#### JSON Params

| Field             | Type      | Description                                   | API Version       |
| :---              | :---      | :---                                          | :---              |
| name?             | string    | name of the channel (2-100 characters)        | Not Implemented   |

### Delete/Close Channel

**DELETE** `/channels/{channel.id}`

Delete a channel, or close a private message. Returns a 204 empty response on success.

### Get Channel Messages

**GET** `/channels/{channel.id}/messages`

Retrieves the messages in a channel. Returns an array of message objects on success.

#### Query String Params

| Field             | Type      | Description                                   | Default | API Version       |
| :---              | :---      | :---                                          | :---    | :---              |
| limit?            | integer   | max number of messages to return (1-100)      | 50      | Not Implemented   |
| before?           | snowflake | get messages before this message id           |         | Not Implemented   |
| after?            | snowflake | get messages after this message id            |         | Not Implemented   |

### Get Channel Message

**GET** `/channels/{channel.id}/messages/{message.id}`

Retrieves a specific message in a channel. Returns a message object on success.

### Create Message

**POST** `/channels/{channel.id}/messages`

Post a message to a organization or DM channel. Returns a [message](#message-object) object on success.

:::info
Check the channel type before sending a message. You can only send message to text channels.
:::

#### JSON Params

| Field             | Type      | Description                                   | API Version       |
| :---              | :---      | :---                                          | :---              |
| content           | string    | the message contents (up to 2000 characters)  | Not Implemented   |

### Get Channel Posts

**GET** `/channels/{channel.id}/posts`

Retrieves the posts in a channel. Returns an array of post message objects on success.

#### Query String Params

| Field             | Type      | Description                                   | Default | API Version       |
| :---              | :---      | :---                                          | :---    | :---              |
| limit?            | integer   | max number of messages to return (1-100)      | 50      | Not Implemented   |
| before?           | snowflake | get messages before this message id           |         | Not Implemented   |
| after?            | snowflake | get messages after this message id            |         | Not Implemented   |

### Get Channel Post

**GET** `/channels/{channel.id}/posts/{message.id}`

Retrieves a specific post in a channel. Returns a post message object on success.

### Create Post

**POST** `/channels/{channel.id}/posts`

Post a post message to a organization. Returns a [post message](#post-message-object) object on success.

:::info
Check the channel type before sending a message. You can only send post message to post channels.
:::

#### JSON Params

| Field             | Type      | Description                                   | API Version       |
| :---              | :---      | :---                                          | :---              |
| title             | string    | the message title (up to 200 characters)      | Not Implemented   |
| content           | string    | the message contents (up to 2000 characters)  | Not Implemented   |
