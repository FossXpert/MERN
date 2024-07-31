// components/Layout/AdminLayout.js

import AdminSidebar from "./Sidebar/AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminSidebar />
      <div>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
