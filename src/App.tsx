import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Control, CreateMatch, Summary, Current } from "./modules";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Current/>,
    },
    {
        path: '/control',
        element: <Control/>,
    },
    {
        path: '/results',
        element: <Summary/>,
    },
    {
        path: '/create',
        element: <CreateMatch/>,
    },
])

function App() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;