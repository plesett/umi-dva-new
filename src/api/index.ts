import request from '@/utiles/request';

// 测试登录
export async function Login() {
	// params 来自于effects中参数

 	// 对应rest接口，/server/api/用的是config.js中proxy代理。详细配置在config.js中配置。
    return request('/sys/auth/code', { 
   		 // 请求方式
        method: 'GET',
     	// 用data包裹参数是官方指定写法，如果data有参数umi-request会默认读取data里面参数。
        data: {
            cmd: 'login',
            type: 'request',
            request: {
                username: 'admin',
                password: 'admin'
            }
        }
    })
}