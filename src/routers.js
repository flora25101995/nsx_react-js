import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/home/home'
import ProductPage from './pages/products/product'
import FarmPage from './pages/farms/farm'

const MainRouter = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/products' component={ProductPage}></Route>
            <Route path='/farms' component={FarmPage}></Route>
        </Switch>
    </main>
)

export default MainRouter