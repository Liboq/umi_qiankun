import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1',
          entry: '//localhost:8001',
        },
        {
          name: 'app2',
          entry: '//localhost:8002',
        },
      ],
      // 配置微应用关联的路由
      routes: [
        {
          path: '/app1',
          microApp: 'app1',
        },
        {
          path: '/app2',
          microApp: 'app2',
        },
      ],
    },
  },
});
