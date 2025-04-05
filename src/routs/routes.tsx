// import App from '@/App';

// import ProtectedRoute from '../components/layout/ProtectedRoute';
// import About from '@/pages/About';
// import AllBooks from '@/pages/All-Books';
// import Blogs from '@/pages/Blogs';
// import Contact from '@/pages/Contact';
// import Home from '@/pages/Home/Home';
// import Login from '@/pages/Login';
// import Recomended from '@/pages/Recomended';
// import Register from '@/pages/Register';
// import UserProfile from '@/pages/UserProfile';
// import { createBrowserRouter } from 'react-router-dom';

// import Dashboard from './Dashboard';
// import OverviewDashboard from './OverviewDashboard';
// import AllUser from '@/pages/UserManagment/AllUser';
// import ProductMange from '@/pages/ProductManagment/ProductMange';
// import CreateProduct from '@/pages/ProductManagment/CreateProduct';
// import EditProductPage from '@/pages/ProductManagment/EditProductPage';
// import ProductDetails from '@/pages/ProductManagment/ProductDetails';
// import Checkout from '@/pages/OrderManagment/Checkout ';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: 'contact', element: <Contact /> },
//       { path: 'about', element: <About /> },
//       { path: 'allbooks', element: <AllBooks /> },
//       { path: 'recomendeds', element: <Recomended /> },
//       { path: 'blogs', element: <Blogs /> },
//       {
//         path: 'products/:id',
//         element: <ProductDetails />,
//       },
//       {
//         path: 'checkout',
//         element: <Checkout />,
//       },
 
 
 
 
 
 
 
 

//     ],
//   },

//   //--------------------- Before SignUp Routes ---------------------
//   { path: '/login', element: <Login /> },
//   { path: '/register', element: <Register /> },
//   { path: '/profile', element: <UserProfile /> },

//   //---------------------- Private Routes -------------------

//   {
//     path: '/dashboard',
//     element: (
//       <ProtectedRoute allowedRoles={['admin', 'user']}>
//         <Dashboard />
//       </ProtectedRoute>
//     ),
//     children: [
//       { path: '/dashboard', element: <OverviewDashboard /> },
//       { path: 'profile', element: <UserProfile /> },
//       { path: 'allbooks', element: <AllBooks /> },

//       {
//         path: 'user',
//         element: (
//           <ProtectedRoute allowedRoles={['admin']}>
//             <AllUser />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: 'productManage',
//         element: (
//           <ProtectedRoute allowedRoles={['admin']}>
//             <ProductMange />
//           </ProtectedRoute>
//         ),
//       },

//       // {
//       // path: 'orderManage',
//       // element: (
//       // <ProtectedRoute allowedRoles={['admin','user']}>
//       // {/* <OrderList/> */}
//       // {/* </ProtectedRoute> */}
//       // ),
//       // },

//       {
//         path: 'products/create',
//         element: (
//           <ProtectedRoute allowedRoles={['admin']}>
//             <CreateProduct />
//           </ProtectedRoute>
//         ),
//       },

//       {
//         path: 'products/edit/:id',
//         element: (
//           <ProtectedRoute allowedRoles={['admin']}>
//             <EditProductPage />
//           </ProtectedRoute>
//         ),
//       },

//       // Order List পেজ যুক্ত করা হলো
//       // {
//       // path: 'orderList',
//       // element: (
//       // <ProtectedRoute allowedRoles={['admin', 'user']}>
//       // {/* <OrderList /> */}
//       // {/* </ProtectedRoute> */}
//       // ),
//       // },

//       // Order Details পেজ যুক্ত করা হলো
//       // {
//       // path: 'order/:orderId',
//       // element: (
//       // <ProtectedRoute allowedRoles={['admin', 'user']}>
//       // {/* <OrderDetails /> */}
//       // {/* </ProtectedRoute> */}
//       // ),
//       // },

//       {
//         path: 'checkout',
//         element: (
//           <ProtectedRoute allowedRoles={['admin', 'user']}>
//             <Checkout />
//           </ProtectedRoute>
//         ),
//       },


















//     ],
//   },
// ]);

// export default router;






import App from '@/App';
import ProtectedRoute from '../components/layout/ProtectedRoute';
import About from '@/pages/About';
import AllBooks from '@/pages/All-Books';
import Blogs from '@/pages/Blogs';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login';
import Recomended from '@/pages/Recomended';
import Register from '@/pages/Register';
import UserProfile from '@/pages/UserProfile';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import OverviewDashboard from './OverviewDashboard';
import AllUser from '@/pages/UserManagment/AllUser';
import ProductMange from '@/pages/ProductManagment/ProductMange';
import CreateProduct from '@/pages/ProductManagment/CreateProduct';
import EditProductPage from '@/pages/ProductManagment/EditProductPage';
import ProductDetails from '@/pages/ProductManagment/ProductDetails';

import PaymentSuccess from '@/pages/OrderManagment/PaymentSuccess'; // Add this import
import OrderDetails from '@/pages/OrderManagment/OrderDetails'; // Add this import
import Checkout from '@/pages/OrderManagment/Checkout ';
import OrderList from '@/pages/OrderManagment/OrderList';
import OrderEdit from '@/pages/OrderManagment/OrderEdit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
      { path: 'allbooks', element: <AllBooks /> },
      { path: 'recomendeds', element: <Recomended /> },
      { path: 'blogs', element: <Blogs /> },
      {
        path: 'products/:id',
        element: <ProductDetails />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      // Add these new routes
      {
        path: 'payment-success',
        element: <PaymentSuccess />,
      },
      {
        path: 'orders/:id',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'user']}>
            <OrderDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },

  //--------------------- Before SignUp Routes ---------------------
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/profile', element: <UserProfile /> },

  //---------------------- Private Routes -------------------
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'user']}>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { path: '/dashboard', element: <OverviewDashboard /> },
      { path: 'profile', element: <UserProfile /> },
      { path: 'allbooks', element: <AllBooks /> },
      {
        path: 'user',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AllUser />
          </ProtectedRoute>
        ),
      },
      {
        path: 'productManage',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <ProductMange />
          </ProtectedRoute>
        ),
      },
      {
        path: 'products/create',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <CreateProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: 'products/edit/:id',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <EditProductPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'checkout',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'user']}>
            <Checkout />
          </ProtectedRoute>
        ),
      },

       {
   path: 'payment-success',
   element: (
     <ProtectedRoute allowedRoles={['admin', 'user']}>
       <PaymentSuccess/>
     </ProtectedRoute>
   ),
 },


      // Add dashboard version of order details if needed
      {
        path: 'orders/:id',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'user']}>
            <OrderDetails />
          </ProtectedRoute>
        ),
      },

       {
   path: 'orders/:id',
   element: (
     <ProtectedRoute allowedRoles={['admin', 'user']}>
       <OrderDetails />
     </ProtectedRoute>
   ),
 },

       {
   path: 'orders/edit/:id',
   element: (
     <ProtectedRoute allowedRoles={['admin', 'user']}>
       <OrderEdit/>
     </ProtectedRoute>
   ),
 },


       {
   path: 'orderList',
   element: (
     <ProtectedRoute allowedRoles={['admin',]}>
       <OrderList/>
     </ProtectedRoute>
   ),
 },


 
    ],
  },
]);

export default router;