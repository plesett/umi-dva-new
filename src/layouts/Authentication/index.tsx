import { Router } from '@/config/router'
import React from 'react'
import { IRouteComponentProps, useSelector } from 'umi'
import LayoutIndex from '../index'

const Authentication = ({ children, location }: IRouteComponentProps) => {
    const isLogin = useSelector((state: any) => state.global.isLogin)
    // 判断是否登录， 即是否有token
    const state = Router.indexOf(location.pathname) != -1 && isLogin
    if (location.pathname === '/' ? true : state) {
        return <LayoutIndex children={children} />
    } else {
        // return <Redirect to="/login" />
        return <h1>您暂无权限</h1>
    }
}

export default Authentication