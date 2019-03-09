import React, { Component } from 'react';

class ModalPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-12 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Large Modal</h4>
                                    <p className="card-description">
                                        Large sized modal with max-width set to <code>90%</code>
                                    </p>
                                    {/* Dummy Modal Starts */}
                                    <div className="modal demo-modal">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Modal title</h5>
                                                    <button type="button" className="close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Modal body text goes here.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success">
                                                        Submit
                    </button>
                                                    <button type="button" className="btn btn-light">
                                                        Cancel
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Dummy Modal Ends */}
                                    {/* Modal starts */}
                                    <div className="text-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-sm"
                                            data-toggle="modal"
                                            data-target="#exampleModal"
                                        >
                                            Click for demo
                                            <i className="mdi mdi-play-circle ml-1" />
                                        </button>
                                    </div>
                                    <div
                                        className="modal fade"
                                        id="exampleModal"
                                        tabIndex={-1}
                                        role="dialog"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog modal-lg" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5
                                                        className="modal-title"
                                                        id="exampleModalLabel"
                                                    >
                                                        Modal title
                    </h5>
                                                    <button
                                                        type="button"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        aria-label="Close"
                                                    >
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Modal body text goes here.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success">
                                                        Submit
                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light"
                                                        data-dismiss="modal"
                                                    >
                                                        Cancel
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Modal Ends */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Medium Modal</h4>
                                    <p className="card-description">
                                        Normal modal with default bootstrap settings
            </p>
                                    {/* Dummy Modal Starts */}
                                    <div className="modal demo-modal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Modal title</h5>
                                                    <button type="button" className="close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Modal body text goes here.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success">
                                                        Submit
                    </button>
                                                    <button type="button" className="btn btn-light">
                                                        Cancel
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Dummy Modal Ends */}
                                    {/* Modal starts */}
                                    <div className="text-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-sm"
                                            data-toggle="modal"
                                            data-target="#exampleModal-2"
                                        >
                                            Click for demo
                                            <i className="mdi mdi-play-circle ml-1" />
                                        </button>
                                    </div>
                                    <div
                                        className="modal fade"
                                        id="exampleModal-2"
                                        tabIndex={-1}
                                        role="dialog"
                                        aria-labelledby="exampleModalLabel-2"
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5
                                                        className="modal-title"
                                                        id="exampleModalLabel-2"
                                                    >
                                                        Modal title
                    </h5>
                                                    <button
                                                        type="button"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        aria-label="Close"
                                                    >
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Modal body text goes here.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success">
                                                        Submit
                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light"
                                                        data-dismiss="modal"
                                                    >
                                                        Cancel
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Modal Ends */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Small Modal</h4>
                                    <p className="card-description">
                                        Small modal with max-width set to <code>300px</code>
                                    </p>
                                    {/* Dummy Modal Starts */}
                                    <div className="modal demo-modal">
                                        <div className="modal-dialog modal-sm">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Modal title</h5>
                                                    <button type="button" className="close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Modal body text goes here.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success">
                                                        Submit
                    </button>
                                                    <button type="button" className="btn btn-light">
                                                        Cancel
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Dummy Modal Ends */}
                                    {/* Modal starts */}
                                    <div className="text-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-sm"
                                            data-toggle="modal"
                                            data-target="#exampleModal-3"
                                        >
                                            Click for demo
                                            <i className="mdi mdi-play-circle ml-1" />
                                        </button>
                                    </div>
                                    <div
                                        className="modal fade"
                                        id="exampleModal-3"
                                        tabIndex={-1}
                                        role="dialog"
                                        aria-labelledby="exampleModalLabel-3"
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog modal-sm" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5
                                                        className="modal-title"
                                                        id="exampleModalLabel-3"
                                                    >
                                                        Modal title
                    </h5>
                                                    <button
                                                        type="button"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        aria-label="Close"
                                                    >
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Modal body text goes here.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success">
                                                        Submit
                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light"
                                                        data-dismiss="modal"
                                                    >
                                                        Cancel
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Modal Ends */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Varying Modal Content</h4>
                                    <div
                                        className="modal fade"
                                        id="exampleModal-4"
                                        tabIndex={-1}
                                        role="dialog"
                                        aria-labelledby="exampleModalLabel-4"
                                        style={{ display: "none" }}
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5
                                                        className="modal-title"
                                                        id="exampleModalLabel-4"
                                                    >
                                                        New message to @fat
                    </h5>
                                                    <button
                                                        type="button"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        aria-label="Close"
                                                    >
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="recipient-name"
                                                                className="col-form-label"
                                                            >
                                                                Recipient:
                        </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="recipient-name"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="message-text"
                                                                className="col-form-label"
                                                            >
                                                                Message:
                        </label>
                                                            <textarea
                                                                className="form-control"
                                                                id="message-text"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success">
                                                        Send message
                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light"
                                                        data-dismiss="modal"
                                                    >
                                                        Close
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-info"
                                        data-toggle="modal"
                                        data-target="#exampleModal-4"
                                        data-whatever="@mdo"
                                    >
                                        Open modal for @mdo
            </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Varying Modal Content</h4>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-toggle="modal"
                                        data-target="#exampleModal-4"
                                        data-whatever="@fat"
                                    >
                                        Open modal for @fat
            </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Varying Modal Content</h4>
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        data-toggle="modal"
                                        data-target="#exampleModal-4"
                                        data-whatever="@getbootstrap"
                                    >
                                        Open modal for @getbootstrap
            </button>
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

export default ModalPage;