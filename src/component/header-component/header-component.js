import React from 'react';
import './header-component.css'

class HeaderComp extends React.Component{
    render () {
        return (
            <div>
                <ul>
                    <li><a href="/">trang chủ</a></li>
                    <li><a href="/products">sản phẩm</a></li>
                    <li><a href="/farms">nông trại</a></li>
                    <li>tin tức</li>
                    <li>liên hê</li>
                </ul>
            </div>
        )
    }   
}
//npm i react-router react-router-dom --save
export default HeaderComp