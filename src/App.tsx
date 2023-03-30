import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Control, Results, View} from "./modules";

const router = createBrowserRouter([
    {
        path: '/',
        element: <View />,
    },
    {
        path: '/control',
        element: <Control />,
    },
    {
        path: '/results',
        element: <Results />,
    },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;