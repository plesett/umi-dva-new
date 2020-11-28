import { defineConfig } from 'umi';

export default defineConfig({
  dva: {
    immer: true,
    hmr: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/Authentication/index',
      routes: [
        { path: '/', component: '@/pages/index/index', title: "首页~" },
        { path: '/test', component: '@/pages/test/index', title: "测试~" }
      ]
    },
  ],
});
