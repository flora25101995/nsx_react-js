import React from 'react';
import {Button, Nav, Navbar, NavItem} from "react-bootstrap"
import './header-component.css'

class HeaderComp extends React.Component{
    render () {
        return (
            <div className="main-header">
                <Nav className="navbar navbar-expand-lg navbar-dark justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/" className="navitem">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/products" className="navitem">Product</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/farms" className="navitem">Farm</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/news" className="navitem">News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact" className="navitem">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Button href="/login" variant="dark">Login</Button>
                    </Nav.Item>
                </Nav>
                {/* <ul>
                    <li><a href="/">trang chủ</a></li>
                    <li><a href="/products">sản phẩm</a></li>
                    <li><a href="/farms">nông trại</a></li>
                    <li>tin tức</li>
                    <li>liên hệ</li>
                    <li id="btn-dn">Đăng nhập</li>
                </ul> */}
            </div>
        )
    }   
}
//npm i react-router react-router-dom --save
export default HeaderComp