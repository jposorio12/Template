import {
  Route,
  Routes as Switch,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import useViews from "../../Views";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch></Switch>
    </BrowserRouter>
  );
};

export default Router;
