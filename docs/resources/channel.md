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

#### Example Channel

```json
{
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
