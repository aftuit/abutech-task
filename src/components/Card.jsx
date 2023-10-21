import React from 'react'

const Card = ({ data, results, ind }) => {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col me-2">
                            <div className={`text-${data.color} text-xs d-block fw-bold text-uppercase mb-1`}>
                                {data.namse}
                            </div>
                            <div className={`text-${data.color} mb-0 font-weight-bold text-gray-800 d-block`}>
                                {
                                    results[ind] ?
                                        <span>result: {results[ind]}</span>
                                        : <div className={`spinner-border text-${data.color} text-sm`} role="status"></div>
                                }
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className={`fa-brands ${data?.icon} fa-2xl`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card