import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
import Employer from "./Employer/Employer";
import LoginPage from "./Auth/Login";
import FileUpload from "./FileUpload";
import EmployerMain from "./Employer/EmployerMain";
import UploadResume from "./Employer/UploadResume";
import LandingPage from "./Careers/LandingPage";
import Questionnaire from "./Employer/Questionnaire";
import "./App.css";

const RouterUse = () => {
  let isCheckAccessToken = localStorage.getItem("token");
  let routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    {
      path: "upload",
      element: <UploadResume />,
    },
    { path: "login", element: <LoginPage /> },
    // { path: "upload", element: <FileUpload /> },
    {
      path: "employer",
      element: isCheckAccessToken ? <EmployerMain /> : <Navigate to="/login" />,
      children: [
        {
          path: "search",
          element: <Employer />,
        },
        {
          path: "upload",
          element: <UploadResume />,
        },
        {
          path: "questionnaire",
          element: <Questionnaire />,
        },
      ],
    },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterUse />
      </BrowserRouter>
    </div>
  );
}

export default App;
