import React from 'react';
import Swagger from '../Tools/Swagger';
import SwaggerCall from '../Tools/SwaggerCall';

export default function SwaggerOrganizations() {
    return (
        <Swagger
            title="Organizations"
            description="Organizations api routes"
        >
            <SwaggerCall callType='POST' pathUrl=""
                mainUrl="/organizations"
                pathDescription='Create a new organization'
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
                        name: "name",
                        description: "Organization name",
                        type: "String",
                        required: true
                    },
                    {
                        name: "pathologyId",
                        description: "ID of pathology organization talk about",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "Organization created",
                        json_content:{
                            "id": "0000",
                            "ownerId": "0000",
                            "pathologyId": "0000",
                            "name": "My Organization Name",
                            "description": "My organization description"
                        }
                    },
                    {
                        status_code: 400,
                        description: "Missing 1 or more arguments"
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 400,
                        description: "Pathology not found"
                    }
                ]}
            />
            <SwaggerCall callType='GET' pathUrl="/{organization.id}"
                mainUrl="/organizations"
                pathDescription='Get information about 1 organization'
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "Session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_path={[
                    {
                        name: "organization.id",
                        description: "Organization's id",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "Organization get",
                        json_content:{
                            "id": "0000",
                            "ownerId": "0000",
                            "pathologyId": "0000",
                            "name": "My Organization Name",
                            "description": "My organization description"
                        }
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 404,
                        description: "Organization not found"
                    }
                ]}
            />
            <SwaggerCall callType='PATCH' pathUrl="/{organization.id}"
                mainUrl="/organizations"
                pathDescription='Edit an organization'
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "Session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_path={[
                    {
                        name: "organization.id",
                        description: "Organization's id",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_body={[
                    {
                        name: "name",
                        description: "New organization's name",
                        type: "String",
                        required: false
                    },
                    {
                        name: "description",
                        description: "New organization's description",
                        type: "String",
                        required: false
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "Organization updated",
                        json_content:{
                            "id": "0000",
                            "ownerId": "0000",
                            "pathologyId": "0000",
                            "name": "My Organization Name",
                            "description": "My organization description"
                        }
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 403,
                        description: "You are not allow to execute modification on organization"
                    },
                    {
                        status_code: 404,
                        description: "Organization not found"
                    }
                ]}
            />
            <SwaggerCall callType='DELETE' pathUrl="/{organization.id}"
                mainUrl="/organizations"
                pathDescription='Delete 1 organization'
                parameter_header={[
                    {
                        name: "Bearer",
                        description: "Session token",
                        type: "String",
                        required: true
                    }
                ]}
                parameter_path={[
                    {
                        name: "organization.id",
                        description: "Organization's id",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 204,
                        description: "Organization deleted"
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 403,
                        description: "You are not allow to execute modification on organization"
                    },
                    {
                        status_code: 404,
                        description: "Organization not found"
                    }
                ]}
            />
        </Swagger>
    )
}
