import Layout from '@/layout'

const InternshipRouter = {
  path: '/internship',
  component: Layout,
  redirect: '/internship/internship-plan',
  name: 'Internship',
  meta: {
    title: '实习管理',
    icon: 'el-icon-s-goods'
  },
  children: [
    {
      path: 'internship-plan',
      component: () => import('@/views/internshipmanage/plan'),
      name: 'InternshipPlan',
      meta: { title: '实习计划', icon: 'el-icon-s-goods' }
    },
    {
      path: 'internship-recruit',
      component: () => import('@/views/internshipmanage/recruit'),
      name: 'InternshipRecruit',
      meta: { title: '实习招聘', icon: 'el-icon-s-goods' }
    },
    {
      path: 'internship-sign',
      component: () => import('@/views/internshipmanage/sign'),
      name: 'InternshipSign',
      meta: { title: '实习报名', icon: 'el-icon-s-goods' }
    },
    {
      path: 'internship-fair',
      component: () => import('@/views/internshipmanage/fair'),
      name: 'InternshipFair',
      meta: { title: '招聘会管理', icon: 'el-icon-s-goods' }
    },
    {
      path: 'internship-job',
      component: () => import('@/views/internshipmanage/job'),
      name: 'InternshipJob',
      meta: { title: '招聘会职位', icon: 'el-icon-s-goods' }
    },
    {
      path: 'internship-studentsign',
      component: () => import('@/views/internshipmanage/studentsign'),
      name: 'InternshipStudentsign',
      meta: { title: '招聘会学生报名', icon: 'el-icon-s-goods' }
    }
  ]
}
export default InternshipRouter;
