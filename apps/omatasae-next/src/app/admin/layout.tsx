import React from "react";
import AdminSidebar from "./components/Sidebar/AdminSidebar.server";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full">
      <AdminSidebar />
      <main className="grow shrink h-full">{children}</main>
    </div>
  );
}

export default AdminLayout;
