import { createBrowserRouter } from 'react-router-dom'

// import layouts
import { AppLayout, AuthLayout, AdminLayout } from '@/components/Layouts'

// import pages
import Home from '@/pages/home'
import About from '@/pages/about'
import Contact from '@/pages/contact'

// import auth pages
import Login from '@/pages/auth/login'
import SignIn from '@/pages/auth/signin'

// import admin pages
import Dashboard from '@/pages/admin/dashboard'

// import error pages

// import loader
import { Loader } from '@/components'
import { ErrorBoundary } from '@/components/ErrorBoundary.tsx'

const routes = [
    {
        path: '/',
        element: <AppLayout />,
        loader: Loader,
        //errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        loader: Loader,
        //errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'settings',
                element: <div>Settings</div>,
            },
            {
                path: 'users',
                element: <div>Users</div>,
            },
            {
                path: 'products',
                element: <div>Products</div>,
            },
        ],
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        loader: Loader,
        //errorElement: <ErrorBoundary />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'sign-in',
                element: <SignIn />,
            },
        ],
    },
]

export default createBrowserRouter(routes)
