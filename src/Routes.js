import React from 'react'

import Home from './containers/Home'
import Login from './containers/Login'

export default (
    [
        {
            path: "/",
            component: Home,
            exact: true,
            loadData: Home.loadData,
            key: 'home'
        },
        {
            path: "/login",
            component: Login,
            exact: true,
            key: 'login'
        }
    ]
)

