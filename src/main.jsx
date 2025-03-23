import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import "./styles.css";
import reportWebVitals from "./reportWebVitals.js";

import App from "./App.jsx";
import { Counter } from "./components/counter/Counter.jsx";
import { Layout } from "./components/layout/Layout.jsx";
import { CountryMatchGame } from "./components/country-match-game/CountryMatchGame.jsx";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "_pathlessLayout",
  component: Layout,
});

const counterRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/counter",
  component: Counter,
});

const countryMatchGameRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/country-match-game",
  component: CountryMatchGame,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  layoutRoute.addChildren([counterRoute, countryMatchGameRoute]),
]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
  basepath: "/epm-react-challenge",
});

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
