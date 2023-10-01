import React from 'react';
import WarningIcon from "../../WarningIcon/WarningIcon.js"

export function SwaggerResponse__200_meaning({status_code}) {
    let value = "OK";
    switch (status_code) {
        case 200:
            value = "OK";
            break;
        case 201:
            value = "Created";
            break;
        case 202:
            value = "Accepted";
            break;
        case 203:
            value = "Non-Authoritative Information";
            break;
        case 204:
            value = "No Content";
            break;
        case 205:
            value = "Reset Content";
            break;
        case 206:
            value = "Partial Content";
            break;
        case 207:
            value = "Multi-Status";
            break;
        case 208:
            value = "Already Reported";
            break;
        case 226:
            value = "IM Used";
            break;
        default:
            value = "OK";
            break;
    }
    value = `${status_code}: ${value}`
    return (
        <p>
            {value}
        </p>
    )
}

export function SwaggerResponse__300_meaning({status_code}) {
    let value = "";
    switch (status_code) {
        case 300:
            value = "Multiple Choices";
            break;
        case 301:
            value = "Moved Permanently";
            break;
        case 302:
            value = "Found";
            break;
        case 303:
            value = "See Other";
            break;
        case 304:
            value = "Not Modified";
            break;
        case 305:
            value = "Use Proxy";
            break;
        case 306:
            value = "Switch Proxy";
            break;
        case 307:
            value = "Temporary Redirect";
            break;
        case 308:
            value = "Permanent Redirect";
            break;
        default:
            value = "";
            break;
    }
    value = `${status_code}: ${value}`
    return (
        <p>
            {value}
        </p>
    )
}

export function SwaggerResponse__400_meaning({status_code}) {
    let value = "";
    switch (status_code) {
        case 400:
            value = "Bad Request";
            break;
        case 401:
            value = "Unauthorized";
            break;
        case 402:
            value = "Payment Required";
            break;
        case 403:
            value = "Forbidden";
            break;
        case 404:
            value = "Not Found";
            break;
        case 405:
            value = "Method Not Allowed";
            break;
        case 406:
            value = "Not Acceptable";
            break;
        case 407:
            value = "Proxy Authentication Required";
            break;
        case 408:
            value = "Request Timeout";
            break;
        case 409:
            value = "Conflict";
            break;
        case 410:
            value = "Gone";
            break;
        case 411:
            value = "Length Required";
            break;
        case 412:
            value = "Precondition Failed";
            break;
        case 413:
            value = "Payload Too Large";
            break;
        case 414:
            value = "URI Too Long";
            break;
        case 415:
            value = "Unsupported Media Type";
            break;
        case 416:
            value = "Range Not Satisfiable";
            break;
        case 417:
            value = "Expectation Failed";
            break;
        case 418:
            value = "I'm a teapot";
            break;
        case 421:
            value = "Misdirected Request";
            break;
        case 422:
            value = "Unprocessable Entity";
            break;
        case 423:
            value = "Locked";
            break;
        case 424:
            value = "Failed Dependency";
            break;
        case 425:
            value = "Too Early";
            break;
        case 426:
            value = "Upgrade Required";
            break;
        case 428:
            value = "Precondition Required";
            break;
        case 429:
            value = "Too Many Requests";
            break;
        case 431:
            value = "Request Header Fields Too Large";
            break;
        case 451:
            value = "Unavailable For Legal Reasons";
            break;
        default:
            value = "";
            break;
    }
    value = `${status_code}: ${value}`
    return (
        <p>
            {value}
        </p>
    )
}

export function SwaggerResponse__500_meaning({status_code}) {
    let value = "";
    switch (status_code) {
        case 500:
            value = "Internal Server Error";
            break;
        case 501:
            value = "Not Implemented";
            break;
        case 502:
            value = "Bad Gateway";
            break;
        case 503:
            value = "Service Unavailable";
            break;
        case 504:
            value = "Gateway Timeout";
            break;
        case 505:
            value = "HTTP Version Not Supported";
            break;
        case 506:
            value = "Variant Also Negotiates";
            break;
        case 507:
            value = "Insufficient Storage";
            break;
        case 508:
            value = "Loop Detected";
            break;
        case 510:
            value = "Not Extended";
            break;
        case 511:
            value = "Network Authentication Required";
            break;
        default:
            value = "";
            break;
    }
    value = `${status_code}: ${value}`
    return (
        <p>
            {value}
        </p>
    )
}

export function SwaggerResponseMeaning({status_code}) {
    if (status_code >= 200 && status_code < 300)
        return (
            <SwaggerResponse__200_meaning
                status_code={status_code}
            />
        );
    if (status_code >= 300 && status_code < 400)
        return (
            <SwaggerResponse__300_meaning
                status_code={status_code}
            />
        );
    if (status_code >= 400 && status_code < 500)
        return (
            <SwaggerResponse__400_meaning
                status_code={status_code}
            />
        );
    if (status_code >= 500 && status_code < 600)
        return (
            <SwaggerResponse__500_meaning
                status_code={status_code}
            />
        );
    return (<p>{status_code}: unknown</p>);
}

export function SwaggerResponseContent({
    json_content
}) {
    return (
        <div>
            <pre> { JSON.stringify(json_content, null, 2) } </pre>
        </div>
    )
}

export function warningIntel({
    message
}) {
    return (
        <span className='warning-button' title={message}>
            <WarningIcon/>
        </span>
    )
}

export function SwaggerResponseWarning({warning_message}) {
    return (<div className="warning">
        {warning_message}
    </div>)
}

export default function SwaggerResponse({
    status_code = 204,
    description = "",
    warning_message = undefined,
    json_content = undefined
}) {
    return (
        <details className={warning_message === undefined && json_content === undefined ? "swagger-response no-content" : "swagger-response have-content"}>
            <summary className="swagger-response-summary">
                <table>
                    <tbody>
                        <tr>
                            <td className={
                                            status_code >= 200 && status_code < 300 ? "code status-good" :
                                            status_code >= 300 && status_code < 400 ? "code status-rediection" :
                                            status_code >= 400 && status_code < 500 ? "code status-error" :
                                            status_code >= 500 && status_code < 600 ? "code status-internal-error" : "code status-unknown"
                                        }
                            >
                                <SwaggerResponseMeaning
                                    status_code={status_code}
                                />
                            </td>
                            <td className='description'>
                                <p>
                                {description}
                                    {
                                        warning_message !== undefined ? warningIntel({
                                            message: warning_message
                                        }) : ""
                                    }
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </summary>
            <div className="swagger-response-content">
                {
                    warning_message === undefined ? "" : <SwaggerResponseWarning
                        warning_message={warning_message}
                    />
                }
                {
                    json_content === undefined ? "" : <SwaggerResponseContent
                        json_content={json_content}
                    />
                }
            </div>
        </details>
    );
}
