import { Routes, Route } from "react-router-dom";
import { ForgotPassword } from "../pages/ForgotPassword";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Verify } from "../pages/Verify";
import { AdminLayout } from "./AdminLayout";

export default function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify/:username" element={<Verify />} />
            <Route path="/home" element={<AdminLayout><Home /></AdminLayout>} />
        </Routes>
    );
}