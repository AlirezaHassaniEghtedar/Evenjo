import { type ReactNode } from "react";

import { Route, Routes } from "react-router";

import QueryProvider from "./providers/QueryProvider.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";

import RootLayout from "./layouts/RootLayout/RootLayout.tsx";
import AuthLayout from "./layouts/AuthLayout/AuthLayout.tsx";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout.tsx";

import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Terms from "./pages/Terms/Terms.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Login from "./pages/Auth/Login/Login.tsx";
import Signup from "./pages/Auth/Signup/Signup.tsx";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword.tsx";
import EnterVerificationCode from "./pages/Auth/EnterVerificationCode/EnterVerificationCode.tsx";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword.tsx";
import FAQ from "./pages/FAQ/FAQ.tsx";
import Event from "./pages/Event/Event.tsx";
import EventList from "./pages/EventList/EventList.tsx";
import Profile from "./layouts/DashboardLayout/Profile/Profile.tsx";

import UserOnlyGuard from "./guards/user-only.guard.tsx";
import GuestOnlyGuard from "./guards/guest-only.guard.tsx";

import "./App.css";

function App(): ReactNode {
  return (
    <QueryProvider>
      <AuthProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/events-list" element={<EventList />} />
            <Route path="/event/:id" element={<Event />} />
          </Route>

          <Route element={<GuestOnlyGuard />}>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/enter-verification-code"
                element={<EnterVerificationCode />}
              />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Route>
          </Route>

          <Route element={<UserOnlyGuard />}>
            <Route element={<DashboardLayout />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </QueryProvider>
  );
}

export default App;