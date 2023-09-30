import React from 'react';

export default function SwaggerParameter ({
    name = "Id",
    type = "String",
    description,
    required = false
}) {
    return (
        <tr className='parameter-line'>
            <td className={required ? "name required" : "name"}>{name}</td>
            <td className='type'>{type}</td>
            <td>{description}</td>
        </tr>
    )
}
