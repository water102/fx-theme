import Dashboard1 from "./pages/dashboard-1";
import Dashboard2 from "./pages/dashboard-2";
import EmailPage from "./pages/email.component";
import WidgetsPage from "./pages/widgets.component";
import AccordionsPage from "./pages/accordions.component";
import ButtonsPage from "./pages/buttons.component";
import BadgesPage from "./pages/badges.component";
import BreadcrumbsPage from "./pages/breadcrumbs.component";
import DropdownsPage from "./pages/dropdowns.component";
import ModalPage from "./pages/modal.component";
import ProgressPage from "./pages/progress.component";
import PaginationPage from "./pages/pagination.component";
import BasicTablePage from "./pages/tables/basic-table.component";
import LoginPage from "./pages/login";

const routes = [
  {
    exact: true,
    path: "/",
    requireLogin: false,
    component: Dashboard1
  },
  {
    exact: true,
    path: "/dashboard-2",
    requireLogin: false,
    component: Dashboard2
  },
  {
    exact: true,
    path: "/apps/email",
    requireLogin: false,
    component: EmailPage
  },
  {
    exact: true,
    path: "/widgets",
    requireLogin: false,
    component: WidgetsPage
  },
  {
    exact: true,
    path: "/accordions",
    requireLogin: false,
    component: AccordionsPage
  },
  {
    exact: true,
    path: "/buttons",
    requireLogin: false,
    component: ButtonsPage
  },
  {
    exact: true,
    path: "/badges",
    requireLogin: false,
    component: BadgesPage
  },
  {
    exact: true,
    path: "/breadcrumbs",
    requireLogin: false,
    component: BreadcrumbsPage
  },
  {
    exact: true,
    path: "/dropdowns",
    requireLogin: false,
    component: DropdownsPage
  },
  {
    exact: true,
    path: "/modals",
    requireLogin: false,
    component: ModalPage
  },
  {
    exact: true,
    path: "/progress",
    requireLogin: false,
    component: ProgressPage
  },
  {
    exact: true,
    path: "/tables/basic-table",
    requireLogin: false,
    component: BasicTablePage
  },
  {
    exact: true,
    path: "/pagination",
    requireLogin: false,
    component: PaginationPage
  },
  {
    exact: true,
    path: "/login",
    requireLogin: false,
    layout: "empty",
    component: LoginPage
  }
];

export default routes;
