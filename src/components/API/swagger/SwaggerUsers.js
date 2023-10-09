import React from 'react';
import Swagger from '../Tools/Swagger';
import SwaggerCall from '../Tools/SwaggerCall';

export default function SwaggerUsers() {
    return (
        <Swagger
            title="Users"
            description="Users api routes"
        >
            <SwaggerCall callType='GET' pathUrl="/{id}"
                mainUrl="/users"
                pathDescription='Get information about an account'
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_path={[
                    {
                        name: "id",
                        description: "User's id (set @me to get your user)",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "User information received",
                        json_content:{
                            "id": "000000",
                            "username": "user's username",
                            "email": "email@email.com",
                            "doubleAuthEnabled": false
                        },
                        warning_message: "Email & doubleAuthEnabled are available only if it's thee user's account"
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 404,
                        description: "User not found"
                    }
                ]}
            />
            <SwaggerCall callType='PATCH' pathUrl="/{id}"
                mainUrl="/users"
                pathDescription='Edit user information'
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_path={[
                    {
                        name: "id",
                        description: "User's id (set @me to get your user)",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_body={[
                    {
                        name: "username",
                        description: "New username",
                        type: "String",
                        required: false
                    },
                    {
                        name: "email",
                        description: "New email",
                        type: "String",
                        required: false
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "User with updated information received",
                        json_content:{
                            "id": "000000",
                            "username": "user's username",
                            "email": "email@email.com",
                            "doubleAuthEnabled": false
                        }
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    }
                ]}
            />
            <SwaggerCall callType='GET' pathUrl="/{id}/organizations"
                mainUrl="/users"
                pathDescription="Get user's organizations"
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_path={[
                    {
                        name: "id",
                        description: "User's id (set @me to get your user)",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "User's organization",
                        json_content:[
                            {
                                "id": "0000",
                                "ownerId": "0000",
                                "pathologyId": "000",
                                "name": "My Organization",
                                "description": "My super description"
                            }
                        ]
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    }
                ]}
            />
            <SwaggerCall callType='DELETE' pathUrl="/{id}/organizations/{organization.id}"
                mainUrl="/users"
                pathDescription='Delete link between user and organization'
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_path={[
                    {
                        name: "id",
                        description: "User's id (set @me to get your user)",
                        type: "String",
                        required: true
                    },
                    {
                        name: "organization.id",
                        description: "ID organization targeted",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 204,
                        description: "User's link with organization deleted"
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    }
                ]}
            />
            <SwaggerCall callType='PATCH' pathUrl="/{id}/edit-password"
                mainUrl="/users"
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_path={[
                    {
                        name: "id",
                        description: "User's id (set @me to get your user)",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_body={[
                    {
                        name: "last-password",
                        description: "Last user's password",
                        type: "String",
                        required: true
                    },
                    {
                        name: "new-password",
                        description: "New user's password",
                        type: "String",
                        required: true
                    },
                    {
                        name: "confirm-password",
                        description: "Confirm new user's password",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 204,
                        description: "User with updated information received",
                        warning_message: "You have to confirm your new password with an email and with route \"/users/confirm-password\""
                    },
                    {
                        status_code: 400,
                        description: "Missing 1 or more credentials"
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 501,
                        description: "Failed to run process to change the password"
                    }
                ]}
            />
            <SwaggerCall callType='POST' pathUrl="/{id}/confirm-password"
                mainUrl="/users"
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_path={[
                    {
                        name: "id",
                        description: "User's id (set @me to get your user)",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_body={[
                    {
                        name: "code",
                        description: "Code received by email",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 204,
                        description: "Password changed"
                    },
                    {
                        status_code: 400,
                        description: "Missing 1 or more credentials"
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 501,
                        description: "Failed to run process to change the password"
                    }
                ]}
            />
            <SwaggerCall callType='PATCH' pathUrl="/{id}/enable-mfa"
                mainUrl="/users"
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_path={[
                    {
                        name: "id",
                        description: "User's id (set @me to get your user)",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "Step to active 2FA activated",
                        json_content:{
                            "qrcode": "qr code image content",
                            "code": "2FA code (2nd possibility to enable it)"
                        }
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 500,
                        description: "Failed to initiate enabling mfa"
                    }
                ]}
            />
            <SwaggerCall callType='POST' pathUrl="/{id}/confirm-mfa"
                mainUrl="/users"
                pathDescription='Confirm double authentication enabling'
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_path={[
                    {
                        name: "id",
                        description: "User's id (set @me to get your user)",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_body={[
                    {
                        name: "code",
                        description: "code gave by GoogleAuthenticator or other app",
                        type: "String",
                        required: false
                    }
                ]}
                responses={[
                    {
                        status_code: 204,
                        description: "User 2FA activated"
                    },
                    {
                        status_code: 400,
                        description: "Missing 1 or more credentials"
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 402,
                        description: "No enable mfa called"
                    },
                    {
                        status_code: 406,
                        description: "Bad code sent"
                    }
                ]}
            />
        </Swagger>
    )
}