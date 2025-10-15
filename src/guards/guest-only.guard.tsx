import { type ReactElement } from "react";

import { Navigate, Outlet } from "react-router";

import { useAuth } from "../contexts/AuthContext.tsx";

import Loading from "../components/Loading/Loading.tsx";

export default function GuestOnlyGuard(): ReactElement {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}