import React from 'react';
import {Button, Nav} from "react-bootstrap"
import './header-component.css'

class HeaderComp extends React.Component{
    render () {
        return (
            <div className="main-header">
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/products">Product</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/farms">Farm</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">Contact</Nav.Link>
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