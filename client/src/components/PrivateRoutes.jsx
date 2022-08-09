import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoutes = () => {
  const token = window.localStorage.getItem("token")
  return token ? <Outlet /> : <Navigate to="/" />
}
