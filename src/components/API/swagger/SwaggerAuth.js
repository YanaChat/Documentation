import React from 'react';
import Swagger from '../Tools/Swagger';
import SwaggerCall from '../Tools/SwaggerCall';

export default function SwaggerAuth() {
    return (
        <Swagger
            title="Authentication"
            description="Authentication api routes"
        >
            <SwaggerCall
                pathUrl="/register"
                mainUrl="/auth"
                callType='POST'
                pathDescription='Register a new account'
                parameter_body={[
                    {
                        name: "email",
                        description: "User's email",
                        type: "String",
                        required: true,
                    },
                    {
                        name: "username",
                        description: "User's username",
                        type: "String",
                        required: true,
                    },
                    {
                        name: "password",
                        description: "User's password",
                        type: "String",
                        required: true,
                    },
                    {
                        name: "code",
                        description: "Code received by email to check email",
                        type: "String",
                        required: true,
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "Account created",
                        json_content:{
                            "session": "session token"
                        },
                        warning_message: "To fill the email code, you have to call send-code. It will send a code by email"
                    },
                    {
                        status_code: 400,
                        description: "Missing 1 or more credentials OR credentials not well write",
                    },
                    {
                        status_code: 403,
                        description: "Email never checked or bad email code",
                    },
                    {
                        status_code: 406,
                        description: "email already used",
                    },
                ]}
            />
            <SwaggerCall
                pathUrl="/login"
                mainUrl="/auth"
                callType='POST'
                parameter_body={[
                    {
                        name: "email",
                        description: "User's email",
                        type: "String",
                        required: true,
                    },
                    {
                        name: "password",
                        description: "User's password",
                        type: "String",
                        required: true,
                    },
                ]}
                pathDescription='Login to an account'
                responses={[
                    {
                        status_code: 200,
                        description: "Connected",
                        json_content:{
                            "session": "session token",
                            "email": "my.email@email.com",
                            "username": "my username",
                            "id": "00000000000000",
                            "mfaEnabled": false
                        },
                    },
                    {
                        status_code: 400,
                        description: "Missing 1 or more credentials"
                    },
                    {
                        status_code: 401,
                        description: "bad email or password or username"
                    }
                ]}
            />
            <SwaggerCall
                pathUrl="/confirm-mfa"
                mainUrl="/auth"
                callType='POST'
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "Session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_body={[
                    {
                        name: "code",
                        description: "2FA code given by double authenticator app",
                        type: "String",
                        required: true,
                    }
                ]}
                pathDescription='Login with 2FA to an account'
                responses={[
                    {
                        status_code: 200,
                        description: "Connected",
                        json_content:{
                            "session": "session token",
                            "email": "my.email@email.com",
                            "username": "my username",
                            "id": "00000000000000",
                            "mfaEnabled": true
                        },
                    },
                    {
                        status_code: 400,
                        description: "Missing 1 or more credentials"
                    },
                    {
                        status_code: 401,
                        description: "Have to connect or bad mfa code"
                    }
                ]}
            />
            <SwaggerCall
                pathUrl="/send-code"
                mainUrl="/auth"
                callType='POST'
                parameter_body={[
                    {
                        name: "email",
                        description: "User's email",
                        type: "String",
                        required: true,
                    }
                ]}
                pathDescription='Check email before register'
                responses={[
                    {
                        status_code: 202,
                        description: "Email sent",
                    },
                    {
                        status_code: 400,
                        description: "Missing 1 or more credentials"
                    },
                    {
                        status_code: 409,
                        description: "Email already used"
                    }
                ]}
            />
            <SwaggerCall
                pathUrl="/validate"
                mainUrl="/auth"
                callType='GET'
                pathDescription="Change token when it'll expire"
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "Session token",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "Token refreshed",
                        json_content:{
                            "session": "new token"
                        }
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    }
                ]}
            />
            <SwaggerCall
                pathUrl="/forgot-password"
                mainUrl="/auth"
                callType='GET'
                pathDescription="Password forget"
                parameter_body={[
                    {
                        name: "email",
                        description: "User's email",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 204,
                        description: "Email sent",
                        warning_message: "Task is async. If there is an error during the request, this error will not be catch"
                    },
                    {
                        status_code: 400,
                        description: "Missing 1 or more credentials"
                    }
                ]}
            />
        </Swagger>
    )
}
