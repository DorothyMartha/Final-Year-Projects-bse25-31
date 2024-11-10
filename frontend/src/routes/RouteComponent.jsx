// RouteComponent.js

import React from "react";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import { withFaroRouterInstrumentation } from "@grafana/faro-react";
import WorkSpace from "../pages/workSpace/WorkSpace";
import TeamOverView from "../pages/teams/teamOverView/TeamOverView";
import CreateTeamHandler from "../pages/teams/CreateTeamHandler";
import MainTaskDetailsPage from "../pages/tasks/taskDetails/MainTaskDetailsPage";

// Define your routes array
const routes = [
  { path: "/", element: <WorkSpace /> },
  { path: "/space/teams/:name", element: <CreateTeamHandler /> },
  { path: "/space/teams/team/:teamname", element: <TeamOverView /> },
  { path: "/space/maintaskdetails", element: <MainTaskDetailsPage /> }
];

// Create the browser router with Faro instrumentation
const browserRouter = withFaroRouterInstrumentation(createBrowserRouter(routes));

function RouteComponent() {
  return (
    <div>
      <Routes router={browserRouter} /> {/* Use the instrumented router here */}
    </div>
  );
}

export default RouteComponent;
