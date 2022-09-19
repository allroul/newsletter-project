import React from "react";
import '../main.scss'

const NotFoundPage = () => {
    return (
        <div className="container">
            <div className="not-found-page-wrapper">
                <h1 className="not-found-page-title">
                    <span>
                        404
                    </span>
                    Sorry, this page doesn't exist :(
                </h1>
            </div>            
        </div>
    )
}

export default NotFoundPage