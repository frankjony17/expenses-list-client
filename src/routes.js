import React, { useContext } from "react";
/// React router dom
import {  Switch, Route } from "react-router-dom";

/// Layout
import Nav from "./components/layouts/nav";
import Footer from "./components/layouts/Footer";
import ScrollToTop from "./components/layouts/ScrollToTop";
/// Dashboard
import Home from "./components/Dashboard/Home";
import Messages from "./components/Dashboard/Messages";
import LatestActivity from "./components/Dashboard/LatestActivity";
import Task from "./components/Dashboard/Task";
/// App
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import Compose from "./components/AppsMenu/Email/Compose/Compose";
import ProductDetail from "./components/AppsMenu/Shop/ProductGrid/ProductDetail";

import { ThemeContext } from "./context/ThemeContext";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";
import ProductType from "./pages/products/ProductType";

const Markup = () => {
  const { menuToggle } = useContext(ThemeContext);
  const routes = [
    /// Dashboard
    { url: "", component: Home },
    { url: "messages", component: Messages },
    { url: "latest-activity", component: LatestActivity },
    { url: "task", component: Task },

    /// products
    { url: "products-my", component: AppProfile },
    { url: "products-system", component: Compose },
    { url: "products-type", component: ProductType },
    { url: "products-category", component: Compose },

    /// Shopping
    { url: "shopping-lists", component: ProductDetail },

    /// Themes
    { url: "dashboard-light", component: Home },
    { url: "dashboard-dark", component: Home },

    /// Apps
    { url: "app-profile", component: AppProfile },
    { url: "email-compose", component: Compose },
    { url: "email-inbox", component: Inbox },
    { url: "email-read", component: Read },
  ];
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  let pagePath = path.split("-").includes("page");

  const ROUTES = routes.map((data, i) => (
      <Route
          key={i}
          exact
          path={`/${data.url}`}
          component={data.component}
      />
  ))

  return (
      <>
        <div
            id={`${!pagePath ? "main-wrapper" : ""}`}
            className={`${!pagePath ? "show" : "vh-100"} ${menuToggle ? "menu-toggle" : ""}`}
        >
          {!pagePath && <Nav />}

          <div className={`${!pagePath ? "content-body" : ""}`}>
            <div className={`${!pagePath ? "container-fluid" : ""}`} style={{ minHeight: window.screen.height - 60 }}>
              <Switch>{ROUTES}</Switch>
            </div>
          </div>

          {!pagePath && <Footer />}
        </div>
        <ScrollToTop />
    </>
  );
};

export default Markup;
