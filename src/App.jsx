import Login from "./components/feature-auth/login/Login";
import Register from "./components/feature-auth/register/Register";
import EditProfile from "./components/feature-userprofile/edit-profile/EditProfile";
import ViewProfile from "./components/feature-userprofile/view-profile/ViewProfile";
import Success from "./components/feature-auth/success/Success";
import { Navigate, Outlet, Route, Router, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

function App() {

  const token = useSelector(state => state.auth.auth.token);

  const isAuthenticated = () => {
    return (token) ? true: false;
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route exact path="/auth" Component={Login} />
      <Route exact path="/register" Component={Register} />

      {/* Private routes */}
      <Route exact path="/" element={<PrivateRoute auth={{ isAuthenticated: isAuthenticated() }}><ViewProfile /></PrivateRoute>} />
      <Route exact path="/success" element={<PrivateRoute auth={{ isAuthenticated: isAuthenticated() }}><Success /></PrivateRoute>} />
      <Route exact path="/profile-edit" element={<PrivateRoute auth={{ isAuthenticated: isAuthenticated() }}><EditProfile /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
