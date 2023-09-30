import React from 'react';
import Swagger from '../Tools/Swagger';
import SwaggerCall from '../Tools/SwaggerCall';

export default function SwaggerPathologies() {
    return (
        <Swagger
            title="Pathologies"
            description="Pathologies api routes"
        >
            <SwaggerCall callType='POST' pathUrl=""
                mainUrl="/pathologies"
                pathDescription='Create a new pathologies'
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
                        description: "Pathology's name",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "Pathology created",
                        json_content:{
                            "id": "0000",
                            "name": "Pathology Name"
                        }
                    },
                    {
                        status_code: 400,
                        description: "Missing 1 or more credentials"
                    },
                    {
                        status_code: 400,
                        description: "Failed to create"
                    }
                ]}
            />
            <SwaggerCall callType='GET' pathUrl=""
                mainUrl="/pathologies"
                pathDescription='Get all pathologies'
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
                        description: "Pathology got",
                        json_content:[{
                            "id": "0000",
                            "name": "Pathology name"
                        }]
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    }
                ]}
            />
            <SwaggerCall callType='GET' pathUrl="/{pathology.id}"
                mainUrl="/pathologies"
                pathDescription='Get 1 pathology'
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
                        name: "pathology.id",
                        description: "Pathology's id",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "Pathology got",
                        json_content:{
                            "id": "0000",
                            "name": "Pathology name"
                        }
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 404,
                        description: "Pathology not found"
                    }
                ]}
            />
            <SwaggerCall callType='DELETE' pathUrl="/{pathology.id}"
                mainUrl="/pathologies"
                pathDescription='Delete pathology'
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
                        name: "pathology.id",
                        description: "Pathology's id",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 204,
                        description: "Pathology deleted"
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 404,
                        description: "Pathology not found"
                    }
                ]}
            />
            <SwaggerCall callType='GET' pathUrl="/{pathology.id}/organizations"
                mainUrl="/pathologies"
                pathDescription='Get all organizations id from 1 pathology'
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
                        name: "pathology.id",
                        description: "Pathology's id",
                        type: "String",
                        required: true
                    }
                ]}
                responses={[
                    {
                        status_code: 200,
                        description: "Organizations id got",
                        json_content: [
                            "0000",
                            "0001",
                            "0002"
                        ]
                    },
                    {
                        status_code: 401,
                        description: "Token invalid or have to connect"
                    },
                    {
                        status_code: 404,
                        description: "Pathology not found"
                    }
                ]}
            />
        </Swagger>
    )
}
