import React from 'react'
// Layout Parent component
export const Layout = (props) => {
    return (
        <div className={props.class} >
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
}

