import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

### User Routes

<details>
  <summary className="route_summary"><p className="badge-get">GET</p><p>/users/&#123;id&#125;</p></summary>
  <div>
    <div>Get information about an account</div>
    <br/>
    <h3>Parameters</h3>
    <p>id : user id</p>
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
    <p>200<span> - </span> with content</p>
    <div>

    {
        "email": "user.email@email.com",
        "username": "user's username",
        "password_tried": 0 --only if it's his own account
    }

  </div>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>401<span> - </span> you have to login</p>
    <p>404<span> - </span> user not found</p>
  </TabItem>
</Tabs>
  </div>
</details>