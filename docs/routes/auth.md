import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

### Auth Routes

<!---
    register
--->
<details>
  <summary className="route_summary"><p className="badge-post">POST</p><p>/auth/register</p></summary>
  <div>
    <div>Create a new account</div>
    <br/>
    <h3>Request Header</h3>
    <p>No token needed</p>
    <h3>Request body</h3>
    <div>

        {
            "email": "my.email@email.com",
            "username": "my username",
            "password": "my password",
            "code": "email code"
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
      "session": "token"
    }

  </div>
  <p>! important : To fill the email code, you have to call send-code. It will send a code by email</p>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>400<span> - </span> Missing 1 or more credentials</p>
    <p>403<span> - </span> Email never checked or bad email code</p>
    <p>406<span> - </span> email already used</p>
  </TabItem>
</Tabs>
  </div>
</details>

<!---
    login
--->
<details>
  <summary className="route_summary"><p className="badge-post">POST</p><p>/auth/login</p></summary>
  <div>
    <div>Login</div>
    <br/>
    <h3>Request Header</h3>
    <p>No token needed</p>
    <h3>Request body</h3>
    <div>

        {
            "email": "my.email@email.com",
            "password": "my password",
            "mfa-code": "double auth code if needed"
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
    <p>400<span> - </span> Missing 1 or more credentials</p>
    <p>401<span> - </span> bad email or password or username</p>
    <p>422<span> - </span> double auth activated, please resend request with double auth code.</p>
  </TabItem>
</Tabs>
  </div>
</details>

<!---
    send code to check email
--->
<details>
  <summary className="route_summary"><p className="badge-post">POST</p><p>/auth/send-code</p></summary>
  <div>
    <div>Check email for registering</div>
    <br/>
    <h3>Request Header</h3>
    <p>No token needed</p>
    <h3>Request body</h3>
    <div>

        {
            "email": "my.email@email.com"
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
    <p>409<span> - </span> Email already used</p>
  </TabItem>
</Tabs>
  </div>
</details>

<!---
    validate
--->
<details>
  <summary className="route_summary"><p className="badge-get">GET</p><p>/auth/validate</p></summary>
  <div>
    <div>Change token when it'll expire</div>
    <br/>
    <h3>Request Header</h3>
    <p class="token-needed">Bearer TOKEN</p>
    <h3>Request body</h3>
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
    <h5>Body returned</h5>
    <div>

    {
        "session": "new token"
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
    forgot password
--->
<details>
  <summary className="route_summary"><p className="badge-get">GET</p><p>/auth/forgot-password</p></summary>
  <div>
    <div>Forgot password</div>
    <br/>
    <h3>Request Header</h3>
    <p>No token needed</p>
    <h3>Request body</h3>
    <div>

        {
            "email": "my.email@email.com"
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
    <p>! imprtant : this task is async. If there is an error during the request, this error will not be catch</p>
  </TabItem>
  <TabItem value="error">
    <h3>Responses</h3>
    <p>400<span> - </span> Missing 1 or more credentials</p>
  </TabItem>
</Tabs>
  </div>
</details>
