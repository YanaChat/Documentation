import React from 'react';

export default function Swagger({children, title, description}) {
    return (
        <div className="custom-swagger">
            <h1>{ title }</h1>
            <p>{ description }</p>
            { children }
        </div>
    );
}
