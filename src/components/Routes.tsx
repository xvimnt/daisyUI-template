import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Signin } from "../pages/Signin";
import { AdminLayout } from "./AdminLayout";

export default function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<AdminLayout><Home /></AdminLayout>} />
        </Routes>
    );
}