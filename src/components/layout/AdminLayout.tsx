import Dashboard from '@/routs/Dashboard';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <Dashboard></Dashboard>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
