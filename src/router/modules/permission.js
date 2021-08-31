import Layout from '@/layout'

export default {
  path: '/permissions',
  name: 'permissions',
  component: Layout,
  children: [{
    path: '/permissions/',
    component: () => import('@/views/permission'),
    meta: {
      title: '权限',
      icon: 'lock'
    }
  }]
}
