import React from 'react';
import './header-component.css'

class HeaderComp extends React.Component{
    render () {
        return (
            <div className="main-header">
                <ul>
                    <li><a href="/">trang chủ</a></li>
                    <li><a href="/products">sản phẩm</a></li>
                    <li><a href="/farms">nông trại</a></li>
                    <li>tin tức</li>
                    <li>liên hệ</li>
                    <li id="btn-dn">Đăng nhập</li>
                </ul>
            </div>
        )
    }   
}
//npm i react-router react-router-dom --save
export default HeaderComp