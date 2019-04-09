import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).on("mouseenter mouseleave", ".sidebar .nav-item", function(ev) {
      var body = $("body");
      var sidebarIconOnly = body.hasClass("sidebar-icon-only");
      var horizontalMenu = body.hasClass("horizontal-menu");
      var sidebarFixed = body.hasClass("sidebar-fixed");
      var $menuItem = $(this);
      if (!("ontouchstart" in document.documentElement)) {
        if (sidebarIconOnly || horizontalMenu) {
          if (sidebarFixed) {
            if (ev.type === "mouseenter") {
              body.removeClass("sidebar-icon-only");
            }
          } else {
            if (ev.type === "mouseenter") {
              $menuItem.addClass("hover-open");
            } else {
              $menuItem.removeClass("hover-open");
            }
          }
        }
      } else {
        if (sidebarIconOnly || horizontalMenu) {
          if (ev.type === "mouseenter") {
            $menuItem.addClass("hover-open");
          } else {
            $menuItem.removeClass("hover-open");
          }
        }
      }
    });
    // Horizontal menu toggle fuction for mobile
    $(".navbar.horizontal-layout .navbar-menu-wrapper .navbar-toggler").on(
      "click",
      function() {
        $(".navbar.horizontal-layout").toggleClass("header-toggled");
      }
    );
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <div className="user-wrapper">
                <div className="profile-image">
                  <img
                    src="/assets/images/faces/face8.jpg"
                    alt="profile image"
                  />
                </div>
                <div className="text-wrapper">
                  <p className="profile-name">Richard V.Welsh</p>
                  <ul className="nav navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link d-flex user-switch-dropdown-toggler"
                        id="UsersettingsDropdown"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <small className="designation text-muted">
                          Manager
                        </small>
                        <span className="status-indicator online" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-left navbar-dropdown"
                        aria-labelledby="UsersettingsDropdown"
                      >
                        <a className="dropdown-item p-0">
                          <div className="d-flex border-bottom">
                            <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                              <i className="mdi mdi-bookmark-plus-outline mr-0 text-gray" />
                            </div>
                            <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                              <i className="mdi mdi-account-outline mr-0 text-gray" />
                            </div>
                            <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                              <i className="mdi mdi-alarm-check mr-0 text-gray" />
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item mt-2">Manage Accounts</a>
                        <a className="dropdown-item">Change Password</a>
                        <a className="dropdown-item"> Check Inbox </a>
                        <a className="dropdown-item"> Sign Out </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="btn btn-success btn-block">
                New Project <i className="mdi mdi-plus" />
              </button>
            </div>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#dashboard-dropdown"
              aria-expanded="false"
              aria-controls="dashboard-dropdown"
            >
              <i className="menu-icon mdi mdi-television" />
              <span className="menu-title">Dashboard</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="dashboard-dropdown">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Dashboard 1
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard-2">
                    Dashboard 2
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#apps-dropdown"
              aria-expanded="false"
              aria-controls="apps-dropdown"
            >
              <i className="menu-icon mdi mdi-dna" />
              <span className="menu-title">Apps</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="apps-dropdown">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/apps/email">
                    E-mail
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/apps/calendar.html">
                    Calendar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/apps/todo.html">
                    Todo List
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/apps/gallery.html">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#tables-dropdown"
              aria-expanded="false"
              aria-controls="apps-dropdown"
            >
              <i className="menu-icon mdi mdi-dna" />
              <span className="menu-title">Tables</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="tables-dropdown">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tables/basic-table">
                    Basic table
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/widgets">
              <i className="menu-icon mdi mdi-trackpad" />
              <span className="menu-title">Widgets</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i className="menu-icon mdi mdi-content-copy" />
              <span className="menu-title">Basic UI Elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/accordions">
                    Accordions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/buttons">
                    Buttons
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/badges">
                    Badges
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/breadcrumbs">
                    Breadcrumbs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dropdowns">
                    Dropdowns
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/modals">
                    Modals
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/progress">
                    Progress bar
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pagination">
                    Pagination
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/tabs.html">
                    Tabs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    Typography
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/ui-features/tooltips.html"
                  >
                    Tooltips
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-advanced"
              aria-expanded="false"
              aria-controls="ui-advanced"
            >
              <i className="menu-icon mdi mdi-lightbulb-outline" />
              <span className="menu-title">Advanced Elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-advanced">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/dragula.html">
                    Dragula
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/ui-features/clipboard.html"
                  >
                    Clipboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/ui-features/context-menu.html"
                  >
                    Context menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/slider.html">
                    Sliders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/ui-features/carousel.html"
                  >
                    Carousel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/colcade.html">
                    Colcade
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/loaders.html">
                    Loaders
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#form-elements"
              aria-expanded="false"
              aria-controls="form-elements"
            >
              <i className="menu-icon mdi mdi-backup-restore" />
              <span className="menu-title">Form elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="form-elements">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/forms/basic_elements.html"
                  >
                    Basic Elements
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/forms/advanced_elements.html"
                  >
                    Advanced Elements
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/forms/validation.html">
                    Validation
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/forms/wizard.html">
                    Wizard
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#editors"
              aria-expanded="false"
              aria-controls="editors"
            >
              <i className="menu-icon mdi mdi-code-brackets" />
              <span className="menu-title">Editors</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="editors">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/forms/text_editor.html">
                    Text editors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/forms/code_editor.html">
                    Code editors
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#charts"
              aria-expanded="false"
              aria-controls="charts"
            >
              <i className="menu-icon mdi mdi-chart-line" />
              <span className="menu-title">Charts</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="charts">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/charts/chartjs.html">
                    ChartJs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/charts/morris.html">
                    Morris
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/charts/flot-chart.html">
                    Flot
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/charts/google-charts.html"
                  >
                    Google charts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/charts/sparkline.html">
                    Sparkline js
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/charts/c3.html">
                    C3 charts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/charts/chartist.html">
                    Chartists
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/charts/justGage.html">
                    JustGage
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#tables"
              aria-expanded="false"
              aria-controls="tables"
            >
              <i className="menu-icon mdi mdi-table" />
              <span className="menu-title">Tables</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="tables">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/tables/basic-table.html">
                    Basic table
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/tables/data-table.html">
                    Data table
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/tables/js-grid.html">
                    Js-grid
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/tables/sortable-table.html"
                  >
                    Sortable table
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/ui-features/popups.html">
              <i className="menu-icon mdi mdi-shield-outline" />
              <span className="menu-title">Popups</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/ui-features/notifications.html">
              <i className="menu-icon mdi mdi-flag-outline" />
              <span className="menu-title">Notifications</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#icons"
              aria-expanded="false"
              aria-controls="icons"
            >
              <i className="menu-icon mdi mdi-sticker" />
              <span className="menu-title">Icons</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="icons">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/icons/flag-icons.html">
                    Flag icons
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/icons/font-awesome.html">
                    Font Awesome
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/icons/simple-line-icon.html"
                  >
                    Simple line icons
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/icons/themify.html">
                    Themify icons
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#maps"
              aria-expanded="false"
              aria-controls="maps"
            >
              <i className="menu-icon mdi mdi-map-marker-circle" />
              <span className="menu-title">Maps</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="maps">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/maps/mapeal.html">
                    Mapeal
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/maps/vector-map.html">
                    Vector Map
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/maps/google-maps.html">
                    Google Map
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="menu-icon mdi mdi-restart" />
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/login.html">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/login-2.html">
                    Login 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/register.html">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/register-2.html">
                    Register 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/lock-screen.html">
                    Lockscreen
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#error"
              aria-expanded="false"
              aria-controls="error"
            >
              <i className="menu-icon mdi mdi-restart" />
              <span className="menu-title">Error pages</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="error">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/error-404.html">
                    404
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/error-500.html">
                    500
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#general-pages"
              aria-expanded="false"
              aria-controls="general-pages"
            >
              <i className="menu-icon mdi mdi-cube-outline" />
              <span className="menu-title">General Pages</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="general-pages">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/blank-page.html">
                    Blank Page
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/samples/landing-page.html"
                  >
                    Landing Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/profile.html">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/faq.html">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/faq-2.html">
                    FAQ 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/news-grid.html">
                    News grid
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/timeline.html">
                    Timeline
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/samples/search-results.html"
                  >
                    Search Results
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/portfolio.html">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#e-commerce"
              aria-expanded="false"
              aria-controls="e-commerce"
            >
              <i className="menu-icon mdi mdi-apple-keyboard-command" />
              <span className="menu-title">E-commerce</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="e-commerce">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/invoice.html">
                    Invoice
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/samples/pricing-table.html"
                  >
                    Pricing Table
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/orders.html">
                    Orders
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
