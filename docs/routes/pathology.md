import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

### Pathologies Routes

<!---
    create pathology
--->
<details>
  <summary className="route_summary"><p className="badge-post">POST</p><p>/pathologies</p></summary>
  <div>
    <div>Create a new pathology</div>
    <br/>
    <h3>Request Header</h3>
    <p class="token-needed">Bearer TOKEN</p>
    <h3>Request body</h3>
    <div>

        {
            "name": "Pathology Name"
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
        "name": "Pathology Name"
    }

  </div>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>400<span> - </span> Missing 1 or more credentials</p>
    <p>400<span> - </span> Failed to create</p>
  </TabItem>
</Tabs>
  </div>
</details>

<!---
    get all
--->

<details>
  <summary className="route_summary"><p className="badge-get">GET</p><p>/pathologies</p></summary>
  <div>
    <div>Get all pathologies</div>
    <br/>
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

    [
        {
            "id": "0000",
            "name": "Pathology name"
        }
    ]

  </div>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>401<span> - </span> Token invalid or have to connect</p>
  </TabItem>
</Tabs>
  </div>
</details>


<!---
    get one
--->

<details>
  <summary className="route_summary"><p className="badge-get">GET</p><p>/pathologies/&#123;id&#125;</p></summary>
  <div>
    <div>Get information about 1 patholgy</div>
    <br/>
    <h3>Parameters</h3>
    <p>id : pathology id</p>
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
        "id": "000000",
        "name": "pathology name"
    }

  </div>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>401<span> - </span> Token invalid or have to connect</p>
    <p>404<span> - </span> Pathology not found</p>
  </TabItem>
</Tabs>
  </div>
</details>


<!---
    delete
--->

<details>
  <summary className="route_summary"><p className="badge-delete">DELETE</p><p>/pathologies/&#123;id&#125;</p></summary>
  <div>
    <div>Delete 1 patholgy</div>
    <br/>
    <h3>Parameters</h3>
    <p>id : pathology id</p>
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
    <p>404<span> - </span> Pathology not found</p>
  </TabItem>
</Tabs>
  </div>
</details>

<!---
    get organizations
--->
<details>
  <summary className="route_summary"><p className="badge-get">GET</p><p>/pathologies/&#123;id&#125;/organizations</p></summary>
  <div>
    <div>Get all organizations from 1 pathology</div>
    <br/>
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

    [
        "0000",
        "0001",
        "0002"
    ]

  </div>
  <p>(list of organizations id)</p>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>401<span> - </span> Token invalid or have to connect</p>
    <p>404<span> - </span> Pathology not found</p>
  </TabItem>
</Tabs>
  </div>
</details>
