import React, { Component } from 'react';

class ProgressPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Normal Progressbar</h4>
                                    <p className="page-description">
                                        Basic bootstrap progress bars
            </p>
                                    <div className="template-demo">
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                aria-valuenow={0}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow={50}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow={100}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Colored Progressbar</h4>
                                    <p className="page-description">
                                        You can give bootstrap colors to progress bars
            </p>
                                    <div className="template-demo">
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={0}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow={50}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow={100}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Progressbar Striped</h4>
                                    <p className="page-description">
                                        Using stipped-progress-bar class
            </p>
                                    <div className="template-demo">
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-danger progress-bar-striped"
                                                role="progressbar"
                                                style={{ width: "30%" }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-warning progress-bar-striped"
                                                role="progressbar"
                                                style={{ width: "45%" }}
                                                aria-valuenow={45}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-info progress-bar-striped"
                                                role="progressbar"
                                                style={{ width: "60%" }}
                                                aria-valuenow={60}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-primary progress-bar-striped"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-success progress-bar-striped"
                                                role="progressbar"
                                                style={{ width: "90%" }}
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Striped Animated</h4>
                                    <p className="page-description">
                                        Using stipped-progress-bar class
            </p>
                                    <div className="template-demo">
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                                role="progressbar"
                                                style={{ width: "30%" }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                                role="progressbar"
                                                style={{ width: "45%" }}
                                                aria-valuenow={45}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                                                role="progressbar"
                                                style={{ width: "60%" }}
                                                aria-valuenow={60}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                role="progressbar"
                                                style={{ width: "90%" }}
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">With Label</h4>
                                    <p className="page-description">
                                        Size add class progress sm, md, lg
            </p>
                                    <div className="template-demo">
                                        <div className="d-flex justify-content-between">
                                            <small>Filled percentage</small>
                                            <small>60%</small>
                                        </div>
                                        <div className="progress progress-lg mt-2">
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                style={{ width: "60%" }}
                                                aria-valuenow={60}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                60%
                </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <small>Photoshop</small>
                                        </div>
                                        <div className="progress progress-lg mt-2">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style={{ width: "90%" }}
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-lg">
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: "60%" }}
                                                aria-valuenow={60}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                60% completed
                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Progressbar Sizes</h4>
                                    <p className="page-description">
                                        Size add class progress sm, md, lg
            </p>
                                    <div className="template-demo">
                                        <div className="progress progress-sm">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-md">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow={50}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-lg">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="progress progress-xl">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow={100}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Skill Bars</h4>
                                    <div className="template-demo">
                                        <div className="d-flex justify-content-between mt-2">
                                            <small>Photoshop</small>
                                            <small>90%</small>
                                        </div>
                                        <div className="progress progress-sm mt-2">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style={{ width: "90%" }}
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <small>After effects</small>
                                            <small>68%</small>
                                        </div>
                                        <div className="progress progress-sm mt-2">
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                style={{ width: "68%" }}
                                                aria-valuenow={68}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <small>Flash</small>
                                            <small>55%</small>
                                        </div>
                                        <div className="progress progress-sm mt-2">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "55%" }}
                                                aria-valuenow={55}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <small>Illustrator</small>
                                            <small>35%</small>
                                        </div>
                                        <div className="progress progress-sm mt-2">
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: "35%" }}
                                                aria-valuenow={35}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <small>Corel Draw</small>
                                            <small>85%</small>
                                        </div>
                                        <div className="progress progress-sm mt-2">
                                            <div
                                                className="progress-bar bg-dark"
                                                role="progressbar"
                                                style={{ width: "85%" }}
                                                aria-valuenow={85}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <small>Dreamweaver</small>
                                            <small>75%</small>
                                        </div>
                                        <div className="progress progress-sm mt-2">
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content-wrapper ends */}
            </div>
        );
    };
}

export default ProgressPage;