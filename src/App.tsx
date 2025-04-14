import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import routes from "./routing";

function App() {
    return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    );
}

export default App;
