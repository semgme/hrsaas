import Layout from '@/layout'

export default {
  path: '/social',
  component: Layout,
  children: [{
    path: '',
    name: 'social123',
    component: () => import('@/views/social'),
    meta: {
      title: '社保',
      icon: 'table'
    }
  }]
}
