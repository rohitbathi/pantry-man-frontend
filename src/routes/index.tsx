import React from "react";

import { pathConstants } from "./pathConstants";
import { RouteObject } from "react-router-dom";

const Landingpage: React.FC = React.lazy(() => import("../pages/landingpage"));
const Userhome: React.FC = React.lazy(() => import("../pages/userhomepage"));

export const routes: RouteObject[] = [
    {
        path: pathConstants.LANDING,
        element: <Landingpage />
    },
    {
        path: pathConstants.HOME,
        element: <Userhome />
    }
]

export default routes