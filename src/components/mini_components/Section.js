import React from 'react'

function Section(props) {
    const {id,title,children} = props;
    return (
        <section id={id}>
            <div className="container pt-5">
                <h1 className="text-warning py-4 display-4">{title}</h1>
                    {children}
            </div>
        </section>
    )
}

export default Section
