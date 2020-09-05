import React from 'react'

const Categories = ({name, description}) => {
    return(
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{'name: '+name}</h5>
                    <p className="card-text">{'description: '+description}</p>
                </div>
            </div>
        </div>
    )

};

export default Categories
