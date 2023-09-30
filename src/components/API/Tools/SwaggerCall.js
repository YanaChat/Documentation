import React from 'react';
import SwaggerResponse from './SwaggerResponse';
import SwaggerParameter from './SwaggerParameter';

function SwaggerParameterPartRender ({
    title,
    prefixKey = "myParam",
    parameters
}) {
    return (
        <div>
            <h5>{ title }</h5>
            <table className='table-parameter'>
                <tbody>
                {
                    parameters.map((param, id) => {
                        return (
                            <SwaggerParameter
                                key={prefixKey + id}
                                description={param.description}
                                name={param.name}
                                required={param.required}
                                type={param.type}
                            />
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

function SwaggerParameterRender ({
    parameter_header = [],
    parameter_body = [],
    parameter_cookie = [],
    parameter_path = [],
    parameter_query = [],
}) {
    return (
        <div className="custom-swagger-route-parameters">
            <h4>Parameters</h4>
            <dt className='required explanation'>Elements required</dt>
            {
                parameter_header.length !== 0 ? <SwaggerParameterPartRender
                    title={"Header"}
                    parameters={parameter_header}
                    prefixKey='header'
                /> : ""
            }
            {
                parameter_path.length !== 0 ? <SwaggerParameterPartRender
                    title={"Path"}
                    parameters={parameter_path}
                    prefixKey='path'
                /> : ""
            }
            {
                parameter_body.length !== 0 ? <SwaggerParameterPartRender
                    title={"Body"}
                    parameters={parameter_body}
                    prefixKey='body'
                /> : ""
            }
            {
                parameter_cookie.length !== 0 ? <SwaggerParameterPartRender
                    title={"Cookie"}
                    parameters={parameter_cookie}
                    prefixKey='cookie'
                /> : ""
            }
            {
                parameter_query.length !== 0 ? <SwaggerParameterPartRender
                    title={"Query"}
                    parameters={parameter_query}
                    prefixKey='query'
                /> : ""
            }
        </div>
    )
}

export default function SwaggerCall({
    children,
    callType = "GET",
    mainUrl,
    pathUrl,
    pathDescription = "",
    parameter_header = [],
    parameter_body = [],
    parameter_cookie = [],
    parameter_path = [],
    parameter_query = [],
    responses = []
}) {
    return (
        <details className="custom-swagger-route">
            <summary className="route_summary"><p
                className={ callType === "PUT" ? "badge-put" : callType === "POST" ? "badge-post" : callType === "PATCH" ? "badge-patch" : "badge-get" }
            >
                { callType }</p><p>{mainUrl}<span className="route-path-custom">{pathUrl}</span></p>
                <br/>
                <div className="custom-swagger-route-description">
                    <h4>{pathDescription}</h4>
                </div>
            </summary>
                {
                    parameter_body.length === 0
                        && parameter_cookie.length === 0
                        && parameter_header.length === 0
                        && parameter_path.length === 0
                        && parameter_query.length === 0 ? "" : <SwaggerParameterRender
                            parameter_body={parameter_body}
                            parameter_cookie={parameter_cookie}
                            parameter_header={parameter_header}
                            parameter_path={parameter_path}
                            parameter_query={parameter_query}
                        />
                }
            <div className="custom-swagger-route-results">
                <h4>Responses</h4>
                {
                    responses.map((response, id) => {
                        return <SwaggerResponse
                            key={"response" + id}
                            description={response.description}
                            status_code={response.status_code}
                            json_content={response.json_content}
                            warning_message={response.warning_message}
                        />
                    })
                }
            </div>
        </details>
    );
}
