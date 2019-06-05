import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/home/home'
import ProductPage from './pages/products/product'
import FarmPage from './pages/farms/farm'
import LoginPage from './pages/login/login'
import Auth from './component/auth/auth-component';

const MainRouter = () => (
    <main>
        <Switch>

            <Route exact path='/' render={
                () => (
                    <Auth orRedirectTo='/login' orRender={
                        <HomePage></HomePage>
                    }></Auth>
                )
            }></Route>

            <Route path='/products' component={ProductPage}></Route>
            <Route path='/farms' component={FarmPage}></Route>
            <Route path='/login' component={LoginPage}></Route>
        </Switch>
    </main>
)

export default MainRouter