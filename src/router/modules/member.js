import Layout from '@/layout'
const MemberRouter = {
  path: '/member',
  component: Layout,
  redirect: '/member/complex-table',
  name: 'Member',
  meta: {
    title: '成员管理',
    icon: 'el-icon-user'
  },
  children: [
    {
      path: 'manage-role',
      component: () => import('@/views/membermanage/role'),
      name: 'MemberRole',
      meta: { title: '角色管理', icon: 'el-icon-user' }
    },
    {
      path: 'manage-member',
      component: () => import('@/views/membermanage/member'),
      name: 'ManageMember',
      meta: { title: '成员管理', icon: 'el-icon-user' }
    }
  ]
}

export default MemberRouter;
