import React from "react";
import async from "../components/Async";

import {
  Sliders,
} from "react-feather";

const Blank = async(() => import("../pages/dashboard/Blank"));

const dashboardsRoutes = {
  id: "Dashboard",
  path: "/dashboard",
  header: "Pages",
  icon: <Sliders />,
  containsHome: true,
  children: [
    {
      path: "/",
      name: "Blank Page",
      component: Blank
    }
  ],
  component: null
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  dashboardsRoutes,
];

// Routes visible in the sidebar
export const sidebarRoutes = [
  dashboardsRoutes,
];
