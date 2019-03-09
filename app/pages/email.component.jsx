import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class EmailComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-panel">
                <div className="content-wrapper px-3 pt-0 pb-0">
                    <div className="email-wrapper wrapper">
                        <div className="mail-sidebar bg-white">
                            <div className="menu-bar">
                                <ul className="menu-items">
                                    <li className="compose mb-3">
                                        <button className="btn btn-primary btn-block">
                                            Compose
                </button>
                                    </li>
                                    <li className="active">
                                        <a href="#">
                                            <i className="mdi mdi-email-outline" /> Inbox
                </a>
                                        <span className="badge badge-pill badge-success">8</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="mdi mdi-share" /> Sent
                </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="mdi mdi-file-outline" /> Draft
                </a>
                                        <span className="badge badge-pill badge-warning">4</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="mdi mdi-upload" /> Outbox
                </a>
                                        <span className="badge badge-pill badge-danger">3</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="mdi mdi-star-outline" /> Starred
                </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="mdi mdi-delete" /> Trash
                </a>
                                    </li>
                                </ul>
                                <div className="wrapper d-none d-md-block">
                                    <div className="online-status d-flex justify-content-between align-items-center">
                                        <p className="chat">Chats</p>
                                        <span className="status offline online" />
                                    </div>
                                </div>
                                <ul className="profile-list d-none d-md-block">
                                    <li className="profile-list-item">
                                        <a href="#">
                                            <img
                                                className="img-xs rounded-circle"
                                                src="/assets/images/faces/face1.jpg"
                                                alt
                                            />
                                            <div className="user">
                                                <p className="u-name">David</p>
                                                <p className="u-designation">Python Developer</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="profile-list-item">
                                        <a href="#">
                                            <img
                                                className="img-xs rounded-circle"
                                                src="/assets/images/faces/face2.jpg"
                                                alt
                                            />
                                            <div className="user">
                                                <p className="u-name">Stella Johnson</p>
                                                <p className="u-designation">SEO Expert</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="profile-list-item">
                                        <a href="#">
                                            <img
                                                className="img-xs rounded-circle"
                                                src="/assets/images/faces/face20.jpg"
                                                alt
                                            />
                                            <div className="user">
                                                <p className="u-name">Catherine</p>
                                                <p className="u-designation">IOS Developer</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="profile-list-item">
                                        <a href="#">
                                            <img
                                                className="img-xs rounded-circle"
                                                src="/assets/images/faces/face12.jpg"
                                                alt
                                            />
                                            <div className="user">
                                                <p className="u-name">John Doe</p>
                                                <p className="u-designation">Business Analyst</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="profile-list-item">
                                        <a href="#">
                                            <img
                                                className="img-xs rounded-circle"
                                                src="/assets/images/faces/face25.jpg"
                                                alt
                                            />
                                            <div className="user">
                                                <p className="u-name">Daniel Russell</p>
                                                <p className="u-designation">Tester</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="profile-list-item">
                                        <a href="#">
                                            <img
                                                className="img-xs rounded-circle"
                                                src="/assets/images/faces/face10.jpg"
                                                alt
                                            />
                                            <div className="user">
                                                <p className="u-name">Sarah Graves</p>
                                                <p className="u-designation">Admin</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="profile-list-item">
                                        <a href="#">
                                            <img
                                                className="img-xs rounded-circle"
                                                src="/assets/images/faces/face23.jpg"
                                                alt
                                            />
                                            <div className="user">
                                                <p className="u-name">Sophia Lara</p>
                                                <p className="u-designation">UI/UX</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="profile-list-item">
                                        <a href="#">
                                            <img
                                                className="img-xs rounded-circle"
                                                src="/assets/images/faces/face11.jpg"
                                                alt
                                            />
                                            <div className="user">
                                                <p className="u-name">Catherine Myers</p>
                                                <p className="u-designation">Business Analyst</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="profile-list-item">
                                        <a href="#">
                                            <img
                                                className="img-xs rounded-circle"
                                                src="/assets/images/faces/face9.jpg"
                                                alt
                                            />
                                            <div className="user">
                                                <p className="u-name">Tim</p>
                                                <p className="u-designation">PHP Developer</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="email-view-wrapper">
                            <div className="mail-list-container">
                                <div className="border-bottom pt-4 pb-4 mb-3 px-3 d-flex align-items-center">
                                    <div className="form-group mb-0 w-100 mr-4 mr-md-0">
                                        <input
                                            className="form-control w-100"
                                            type="search"
                                            placeholder="Search mail"
                                            id="Mail-rearch"
                                        />
                                    </div>
                                    <div className="aside-toggler btn btn-secondary btn-icons ml-auto d-md-none">
                                        <i className="mdi mdi-menu" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">David Moore</p>
                                        <p className="message_text">
                                            Hi Emily, Please be informed that the new project
                                            presentation is due Monday.
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star-outline" />
                                    </div>
                                </div>
                                <div className="mail-list new_mail">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                defaultChecked
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">
                                            Microsoft Account Password Change
                </p>
                                        <p className="message_text">
                                            Change the password for your Microsoft Account using the
                                            security code 35525
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star favorite" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">Sophia Lara</p>
                                        <p className="message_text">
                                            Hello, last date for registering for the annual music
                                            event is closing in
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star-outline" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">Stella Davidson</p>
                                        <p className="message_text">
                                            Hey there, can you send me this year’s holiday calendar?
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star favorite" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">David Moore</p>
                                        <p className="message_text">FYI</p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star favorite" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">Daniel Russel</p>
                                        <p className="message_text">
                                            Hi, Please find this week’s update..
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star-outline" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">Sarah Graves</p>
                                        <p className="message_text">
                                            Hey, can you send me this year’s holiday calendar ?
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star-outline" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">Bruno King</p>
                                        <p className="message_text">
                                            Hi, Please find this week’s monitoring report in the
                                            attachment.
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star-outline" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">Me, Mark</p>
                                        <p className="message_text">
                                            Hi, Testing is complete. The system is ready to go live.
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star-outline" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">Catherine Myers</p>
                                        <p className="message_text">
                                            Template Market: Limited Period Offer!!! 50% Discount on
                                            all Templates.
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star favorite" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">Daniel Russell</p>
                                        <p className="message_text">
                                            Hi Emily, Please approve my leaves for 10 days from 10th
                                            May to 20th May.
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star-outline" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">Sarah Graves</p>
                                        <p className="message_text">
                                            Hello there, Make the most of the limited period offer.
                                            Grab your favorites
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star-outline" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">John Doe</p>
                                        <p className="message_text">
                                            This is the first reminder to complete the online
                                            cybersecurity course
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star-outline" />
                                    </div>
                                </div>
                                <div className="mail-list">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <i className="input-helper" />
                                        </label>
                                    </div>
                                    <div className="content">
                                        <p className="sender-name">Bruno</p>
                                        <p className="message_text">
                                            Dear Employee, As per the regulations all employees are
                                            required to complete
                </p>
                                    </div>
                                    <div className="details">
                                        <i className="mdi mdi-star-outline" />
                                    </div>
                                </div>
                            </div>
                            <div className="mail-view">
                                <div className="mail-header-toolbar">
                                    <button
                                        type="button"
                                        className="btn btn-icons btn-rounded btn-secondary mail-back-button mr-3"
                                    >
                                        <i className="mdi mdi-arrow-left" />
                                    </button>
                                    <div className="wrapper">
                                        <div className="btn-group mb-1">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                <i className="mdi mdi-reply text-primary" /> Reply
                  </button>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                <i className="mdi mdi-reply-all text-primary" />Reply
                                                All
                  </button>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                <i className="mdi mdi-share text-primary" />Forward
                  </button>
                                        </div>
                                        <div className="btn-group mb-1">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                <i className="mdi mdi-attachment text-primary" />Attach
                  </button>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                <i className="mdi mdi-delete text-primary" />Delete
                  </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="message-body">
                                    <div className="sender-details">
                                        <img
                                            className="img-sm rounded-circle mr-3"
                                            src="/assets/images/faces/face11.jpg"
                                            alt
                                        />
                                        <div className="details">
                                            <p className="msg-subject">

                                                Weekly Update - Week 19 (May 8, 2017 - May 14, 2017)
                                    </p>
                                            <p className="sender-email">

                                                Sarah Graves <a href="#">
                                                    itsmesarah268@gmail.com
                    </a>
                                                &nbsp; <i className="mdi mdi-account-multiple-plus" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="message-content">
                                        <p>Hi Emily,</p>
                                        <p>
                                            This week has been a great week and the team is right on
                                            schedule with the set deadline. The team has made great
                                            progress and achievements this week. At the current rate
                                            we will be able to deliver the product right on time and
                                            meet the quality that is expected of us. Attached are the
                                            seminar report held this week by our team and the final
                                            product design that needs your approval at the earliest.
                </p>
                                        <p>
                                            For the coming week the highest priority is given to the
                          development for
                                    <a href="#" target="_blank">
                                                http://www.bootstrapdash.com/
                  </a>
                                            once the design is approved and necessary improvements are
                                            made.
                </p>
                                        <p>
                                            <br />
                                            <br />Regards, <br />Sarah Graves
                </p>
                                    </div>
                                    <div className="attachments-sections">
                                        <ul>
                                            <li>
                                                <div className="thumb">
                                                    <i className="mdi mdi-file-pdf" />
                                                </div>
                                                <div className="details">
                                                    <p className="file-name">Seminar Reports.pdf</p>
                                                    <div className="buttons">
                                                        <p className="file-size">678Kb</p>
                                                        <a href="#" className="view">
                                                            View
                        </a>
                                                        <a href="#" className="download">
                                                            Download
                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <i className="mdi mdi-file-image" />
                                                </div>
                                                <div className="details">
                                                    <p className="file-name">Product Design.jpg</p>
                                                    <div className="buttons">
                                                        <p className="file-size">1.96Mb</p>
                                                        <a href="#" className="view">
                                                            View
                        </a>
                                                        <a href="#" className="download">
                                                            Download
                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default EmailComponent;