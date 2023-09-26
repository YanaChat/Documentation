import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

### Users Routes

#### General command

<!---
    get user
--->
<details>
  <summary className="route_summary"><p className="badge-get">GET</p><p>/users/&#123;id&#125;</p></summary>
  <div>
    <div>Get information about an account</div>
    <br/>
    <h3>Parameters</h3>
    <p>id : user id</p>
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
        "username": "user's username",
        "email": "email@email.com", -> ONLY OWN USER
        "doubleAuthEnabled": false -> ONLY OWN USER
    }

  </div>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>401<span> - </span> Token invalid or have to connect</p>
    <p>404<span> - </span> user not found</p>
  </TabItem>
</Tabs>
  </div>
</details>

#### For connected user

<!---
    edit user
--->
<details>
  <summary className="route_summary"><p className="badge-patch">PATCH</p><p>/users</p></summary>
  <div>
    <div>Update account information</div>
    <br/>
    <h3>Parameters</h3>
    <p>id : user id</p>
    <h3>Request Header</h3>
    <p class="token-needed">Bearer TOKEN</p>
    <h3>Request body</h3>
    <div>

        {
            "username": "new username",
            "email": "new email"
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
        "id": "000000",
        "username": "user's username",
        "email": "email@email.com",
        "doubleAuthEnabled": false
    }

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
    get organizations
--->
<details>
  <summary className="route_summary"><p className="badge-get">GET</p><p>/users/organizations</p></summary>
  <div>
    <div>Get organizations from user account</div>
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
          "ownerId": "0000",
          "pathologyId": "000",
          "name": "My Organization",
          "description": "My super description"
      },
      ...
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
    leave organization
--->
<details>
  <summary className="route_summary"><p className="badge-delete">DELETE</p><p>/users/organizations/&#123;organization.id&#125;</p></summary>
  <div>
    <div>Leave an organization</div>
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
    <p>204<span> - </span> no content</p>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>401<span> - </span> Token invalid or have to connect</p>
  </TabItem>
</Tabs>
  </div>
</details>

<!---
    edit password
--->
<details>
  <summary className="route_summary"><p className="badge-patch">PATCH</p><p>/users/edit-password</p></summary>
  <div>
    <div>Change your password</div>
    <br/>
    <h3>Request Header</h3>
    <p class="token-needed">Bearer TOKEN</p>
    <h3>Request body</h3>
    <div>

        {
            "last-password": "",
            "new-password": "",
            "confirm-password": ""
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
    <p>Important : You have to confirm your new password with an email and with route "/users/confirm-password"</p>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>400<span> - </span> Missing 1 or more credentials</p>
    <p>401<span> - </span> Token invalid or have to connect</p>
    <p>501<span> - </span> Failed to run process to change the password</p>
  </TabItem>
</Tabs>
  </div>
</details>

<!---
    confirm password
--->
<details>
  <summary className="route_summary"><p className="badge-post">POST</p><p>/users/confirm-password</p></summary>
  <div>
    <div>Confirm the password changing</div>
    <br/>
    <h3>Request Header</h3>
    <p class="token-needed">Bearer TOKEN</p>
    <h3>Request body</h3>
    <div>

        {
            "code": "received by email"
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
    <p>400<span> - </span> Missing 1 or more credentials</p>
    <p>401<span> - </span> Token invalid or have to connect</p>
    <p>501<span> - </span> Validation to change password failed</p>
  </TabItem>
</Tabs>
  </div>
</details>

<!---
    enable mfa
--->
<details>
  <summary className="route_summary"><p className="badge-patch">PATCH</p><p>/users/enable-mfa</p></summary>
  <div>
    <div>Enable double authentication</div>
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

    {
        "qrcode": "qr code image content",
        "code": "code of mfa (2nd possibility to enable it)"
    }

  </div>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>401<span> - </span> Token invalid or have to connect</p>
    <p>500<span> - </span> Failed to initiate enabling mfa</p>
  </TabItem>
</Tabs>
  </div>
</details>

<!---
    confirm mfa
--->
<details>
  <summary className="route_summary"><p className="badge-post">POST</p><p>/users/confirm-mfa</p></summary>
  <div>
    <div>Confirm double authentication enabling</div>
    <br/>
    <h3>Request Header</h3>
    <p class="token-needed">Bearer TOKEN</p>
    <h3>Request body</h3>
    <div>

        {
            "code": "code gave by GoogleAuthenticator or other app"
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
    <p>400<span> - </span> Missing 1 or more credentials</p>
    <p>401<span> - </span> Token invalid or have to connect</p>
    <p>402<span> - </span> No enable mfa called</p>
    <p>406<span> - </span> Bad code sent</p>
  </TabItem>
</Tabs>
  </div>
</details>