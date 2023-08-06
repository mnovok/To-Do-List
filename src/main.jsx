import React from 'react';
import { ReactDOM } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/About';
import { Signup } from './pages/Signup';

const router = createBrowserRouter([
    {
    path: "/",
    element: <App/>,
    children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "signup",
                element: <Signup/>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);