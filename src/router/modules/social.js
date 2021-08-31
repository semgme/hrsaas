import Layout from '@/layout'

export default {
  path: '/social_securitys',
  name: 'social_securitys',
  component: Layout,
  children: [{
    path: '/social_securitys/',
    component: () => import('@/views/social'),
    meta: {
      title: '社保',
      icon: 'table'
    }
  }]
}
