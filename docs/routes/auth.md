import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

### Auth Routes

<details>
  <summary className="route_summary"><p className="badge-post">POST</p><p>/auth/register</p></summary>
  <div>
    <div>Create a new account</div>
    <br/>
    <h3>Request Authorization</h3>
    <p>No token needed</p>
    <h3>Request body</h3>
    <div>

        {
            "email": "my.email@email.com",
            "username": "my username",
            "password": "my password"
        }

  </div>
  <Tabs
  defaultValue="result"
  values={[
    {label: 'Result', value: 'result'},
    {label: 'Error', value: 'error'}
  ]}>
  <TabItem value="result">
    <h3>Response</h3>
    <p>204<span> - </span> no content</p>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>400<span> - </span> missing one or more fields in body</p>
    <p>403<span> - </span> bad email or password or username</p>
    <p>409<span> - </span> email or username already exists</p>
  </TabItem>
</Tabs>
  </div>
</details>

<details>
  <summary className="route_summary"><p className="badge-post">POST</p><p>/auth/login</p></summary>
  <div>
    <div>Login</div>
    <br/>
    <h3>Request Authorization</h3>
    <p>No token needed</p>
    <h3>Request body</h3>
    <div>

        {
            "email": "my.email@email.com",
            "password": "my password"
        }

  </div>
  <Tabs
  defaultValue="result"
  values={[
    {label: 'Result', value: 'result'},
    {label: 'Error', value: 'error'}
  ]}>
  <TabItem value="result">
    <h3>Response</h3>
    <p>200<span> - </span> with content</p>
    <h5>Body returned</h5>
    <div>

    {
        "token": "your token",
        "email": "my.email@email.com",
        "username": "my username",
        "id": "00000000000000"
    }

  </div>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>403<span> - </span> bad email or password or username</p>
    <p>404<span> - </span> user with those credentials not found</p>
    <p>423<span> - </span> too many connection tried. Please contact YANA for more information.</p>
    <p>449<span> - </span> missing one or more fields in body</p>
  </TabItem>
</Tabs>
  </div>
</details>

<details>
  <summary className="route_summary"><p className="badge-post">POST</p><p>/auth/confirm</p></summary>
  <div>
    <div>Confirm password to upgrade oauth role</div>
    <br/>
    <h3>Request Authorization</h3>
    <p>Bearer Token needed</p>
    <h3>Request body</h3>
    <div>

        {
            "password": "my password"
        }

  </div>
  <Tabs
  defaultValue="result"
  values={[
    {label: 'Result', value: 'result'},
    {label: 'Error', value: 'error'}
  ]}>
  <TabItem value="result">
    <h3>Response</h3>
    <p>204<span> - </span> no content</p>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>400<span> - </span> missing the password</p>
    <p>403<span> - </span> bad password</p>
    <p>405<span> - </span> higher role doesn't requested</p>
  </TabItem>
</Tabs>
  </div>
</details>

<details>
  <summary className="route_summary"><p className="badge-post">POST</p><p>/auth/logout</p></summary>
  <div>
    <div>Logout your user</div>
    <br/>
    <h3>Request Authorization</h3>
    <p>Bearer Token needed</p>
    <h3>No body</h3>
  <Tabs
  defaultValue="result"
  values={[
    {label: 'Result', value: 'result'},
    {label: 'Error', value: 'error'}
  ]}>
  <TabItem value="result">
    <h3>Response</h3>
    <p>204<span> - </span> no content</p>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>401<span> - </span> need to login</p>
  </TabItem>
</Tabs>
  </div>
</details>
