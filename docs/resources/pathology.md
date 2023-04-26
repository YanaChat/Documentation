# Pathology Resource

Pathology is a resource that represents a pathology within Yana. It is associated with an organization.

:::warning
Yana API is currently in development and is subject to change. The content of this page is not fixed and may change at any time.
:::

### Pathology Object

#### Pathology Structure

| Field             | Type      | Description                                   | API Version       |
| :---              | :---      | :---                                          | :---              |
| id                | snowflake | the id of this pathology                      | Not Implemented   |
| name              | string    | name of the pathology (2-100 characters)      | Not Implemented   |

#### Example Pathology

```json
{
    "id": 41771983423143940,
    "name": "Pathology name",
}
```

### Get Pathology

**GET** `/pathologies/{pathology.id}`

Returns a [pathology](#pathology-object) object for the given id.

### Get Pathologies

**GET** `/pathologies`

Returns an array of [pathology](#pathology-object) objects for the given ids.

#### Query Params

| Field             | Type      | Description                                   | Default   | API Version       |
| :---              | :---      | :---                                          | :---      | :---              |
| limit?            | integer   | max number of pathologies to return (1-100)   | 50        | Not Implemented   |
| before?           | snowflake | return pathologies before this id             |           | Not Implemented   |
| after?            | snowflake | return pathologies after this id              |           | Not Implemented   |

### Create Pathology

**POST** `/pathologies`

Register a new pathology. Returns a [pathology](#pathology-object) on success.

#### JSON Params

| Field             | Type      | Description                                   | API Version       |
| :---              | :---      | :---                                          | :---              |
| name              | string    | name of the pathology (2-100 characters)      | Not Implemented   |


### Get Organizations by Pathology

**GET** `/pathologies/{pathology.id}/organizations`

Returns an array of [organization](/docs/resources/organization#organization-object) objects for the given pathology id.
