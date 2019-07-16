import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Layout from './components/Layout';

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/:destination' component={Layout} />
            <Route component={Layout} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
