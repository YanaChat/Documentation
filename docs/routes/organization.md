import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

### Organizations Routes

<!---
    create organization
--->
<details>
  <summary className="route_summary"><p className="badge-post">POST</p><p>/organizations</p></summary>
  <div>
    <div>Create a new organization</div>
    <br/>
    <h3>Request Header</h3>
    <p class="token-needed">Bearer TOKEN</p>
    <h3>Request body</h3>
    <div>

        {
            "name": "My Organization Name",
            "pathologyId": "0000"
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
        "id": "0000",
        "ownerId": "0000",
        "pathologyId": "0000",
        "name": "My Organization Name",
        "description": "My organization description"
    }

  </div>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>400<span> - </span> Missing 1 or more credentials</p>
    <p>400<span> - </span> Pathology not found</p>
  </TabItem>
</Tabs>
  </div>
</details>

<!---
    get 1 organization
--->

<details>
  <summary className="route_summary"><p className="badge-get">GET</p><p>/organizations/&#123;id&#125;</p></summary>
  <div>
    <div>Get information about 1 organization</div>
    <br/>
    <h3>Parameters</h3>
    <p>id : organization id</p>
    <h3>Request Header</h3>
    <p class="token-needed">Bearer TOKEN</p>
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
        "id": "0000",
        "ownerId": "0000",
        "pathologyId": "0000",
        "name": "My Organization Name",
        "description": "My organization description"
    }

  </div>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>401<span> - </span> Token invalid or have to connect</p>
    <p>404<span> - </span> Organization not found</p>
  </TabItem>
</Tabs>
  </div>
</details>


<!---
    edit organization
--->

<details>
  <summary className="route_summary"><p className="badge-patch">PATCH</p><p>/organizations/&#123;id&#125;</p></summary>
  <div>
    <div>Edit organization</div>
    <br/>
    <h3>Parameters</h3>
    <p>id : organization id</p>
    <h3>Request Header</h3>
    <p class="token-needed">Bearer TOKEN</p>
    <h3>Request body</h3>
    <div>

        {
            "name": "My Organization Name",
            "description": "My description"
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
    <div>

    {
        "id": "0000",
        "ownerId": "0000",
        "pathologyId": "0000",
        "name": "My Organization Name",
        "description": "My organization description"
    }

  </div>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>401<span> - </span> Token invalid or have to connect</p>
    <p>403<span> - </span> You are not the organization owner</p>
    <p>404<span> - </span> Organization not found</p>
  </TabItem>
</Tabs>
  </div>
</details>


<!---
    delete organization
--->

<details>
  <summary className="route_summary"><p className="badge-delete">DELETE</p><p>/organizations/&#123;id&#125;</p></summary>
  <div>
    <div>Delete 1 organization</div>
    <br/>
    <h3>Parameters</h3>
    <p>id : organization id</p>
    <h3>Request Header</h3>
    <p class="token-needed">Bearer TOKEN</p>
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
    <p>401<span> - </span> Token invalid or have to connect</p>
    <p>403<span> - </span> You are not the organization owner</p>
    <p>404<span> - </span> Organization not found</p>
  </TabItem>
</Tabs>
  </div>
</details>

