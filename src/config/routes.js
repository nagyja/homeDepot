// Inclue the React library
import React from "react";

// Include the react-router module
import router from "react-router";

// Include the Route component
const Route = router.Route;

//  Include the IndexRoute (catch-all route)
const IndexRoute = router.IndexRoute;

// Include the Router component
const Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
const browserHistory = router.browserHistory;

// Reference the high-level components
import Main from "./components/main";
import Landing from "./components/landing";
import Results from "./components/results";
import Video from "./components/video";

// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Landing, Video, or Results show the appropriate component */}
      <Route path="Landing" component={Landing} />
      <Route path="Results" component={Results} />
      <Route path="Video" component={Video} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Landing} />

    </Route>
  </Router>
);