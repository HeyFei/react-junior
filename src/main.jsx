import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import State from './State'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <State/>
    </React.StrictMode>,
)
