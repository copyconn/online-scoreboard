import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

import {Control, Results, View} from "./modules";
import {CreateMatch} from "./modules/Control/CreateMatch";

const router = createBrowserRouter([
    {
        path: '/',
        element: <View/>,
    },
    {
        path: '/control',
        element: <Control/>,
    },
    {
        path: '/results',
        element: <Results/>,
    },
    {
        path: '/create',
        element: <CreateMatch />,
    },
])

function App() {
    return (
        <Provider store={store}>
            <div>
                <RouterProvider router={router}/>
            </div>
        </Provider>
    );
}

export default App;