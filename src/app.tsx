/**
 * app.tsx 运行时配置
 * 覆写 render
 * 用于渲染之前做权限校验
 */

import React from 'react';
import { RequestConfig } from 'umi';

/**
 * 页面首次运行时执行
 * @param oldRender 
 */
export function render(oldRender: () => void) {
    // ... 执行中间件操作
    console.log("--------中间件操作--------")
    oldRender()
}

/**
 * 会在整个应用最开始执行，返回值会作为全局共享的数据。
 * Layout 插件、Access 插件以及用户都可以通过 useModel('@@initialState') 直接获取到这份数据
 * const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');
 */
// export async function getInitialState() {
//     // const data = await fetchXXX();
//     let data = ['false']
//     return data;
// }

export const request: RequestConfig = {
    timeout: 1000,
    errorConfig: {},
    middlewares: [
        async function middlewareA(ctx, next) {
            console.log('A before 1', ctx);
            await next();
            console.log('A after 2');
        },
        async function middlewareB(ctx, next) {
            console.log('B before 3', ctx);
            await next();
            console.log('B after 4');
        }
    ],
    requestInterceptors: [],
    responseInterceptors: [],
}