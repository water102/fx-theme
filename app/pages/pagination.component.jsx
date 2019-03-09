import React, { Component } from 'react';

class PaginationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Basic Paginations</h4>
                                    <p className="card-description">
                                        Default bordered pagination
            </p>
                                    <nav>
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-left" />
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Flat Pagination</h4>
                                    <p className="card-description">
                                        Add calss <code>.flat</code>
                                    </p>
                                    <nav>
                                        <ul className="pagination flat pagination-success">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-left" />
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Separated Pagination</h4>
                                    <p className="card-description">
                                        Add calss <code>.separated</code>
                                    </p>
                                    <nav>
                                        <ul className="pagination separated pagination-danger">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-left" />
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Bordered Rounded</h4>
                                    <p className="card-description">
                                        Add calss <code>.rounded</code>
                                    </p>
                                    <nav>
                                        <ul className="pagination rounded">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-left" />
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Flat Rounded Pagination</h4>
                                    <p className="card-description">
                                        Add calss <code>.rounded-flat</code>
                                    </p>
                                    <nav>
                                        <ul className="pagination rounded-flat pagination-success">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-left" />
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Separated Rounded</h4>
                                    <p className="card-description">
                                        Add calss <code>.rounded-separated</code>
                                    </p>
                                    <nav>
                                        <ul className="pagination rounded-separated pagination-danger">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-left" />
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Left Position</h4>
                                    <p className="card-description">Left Pagination</p>
                                    <nav>
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-left" />
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Center Position</h4>
                                    <p className="card-description">Centered Pagination</p>
                                    <nav>
                                        <ul className="pagination d-flex justify-content-center pagination-success">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-left" />
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Right Position</h4>
                                    <p className="card-description">Right Pagination</p>
                                    <nav>
                                        <ul className="pagination d-flex justify-content-end pagination-danger">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-left" />
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                  </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="mdi mdi-chevron-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
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

export default PaginationPage;