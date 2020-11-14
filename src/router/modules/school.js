import Layout from '@/layout'
// 学校管理（学校简介brief，学校专业major，班级schoolclass，师资力量teachers，优秀毕业生graduate，公告管理notice，问卷调查questionnaire）

const SchoolRouter = {
  path: '/school',
  component: Layout,
  redirect: '/school/complex-table',
  name: 'School',
  meta: {
    title: '学校管理',
    icon: 'el-icon-s-home'
  },
  children: [
    {
      path: 'school-brief',
      component: () => import('@/views/schoolmanage/brief'),
      name: 'SchoolBrief',
      meta: { title: '学校简介', icon: 'el-icon-s-home' }
    },
    {
      path: 'school-major',
      component: () => import('@/views/schoolmanage/major'),
      name: 'SchoolMajor',
      meta: { title: '院校专业', icon: 'el-icon-s-home' }
    },
    {
      path: 'school-class',
      component: () => import('@/views/schoolmanage/schoolclass'),
      name: 'SchoolClass',
      meta: { title: '学校班级', icon: 'el-icon-s-home' }
    },
    {
      path: 'school-teachers',
      component: () => import('@/views/schoolmanage/teachers'),
      name: 'SchoolTeachers',
      meta: { title: '师资力量', icon: 'el-icon-s-home' }
    },
    {
      path: 'school-graduate',
      component: () => import('@/views/schoolmanage/graduate'),
      name: 'SchoolGraduate',
      meta: { title: '优秀毕业生', icon: 'el-icon-s-home' }
    },
    {
      path: 'school-notice',
      component: () => import('@/views/schoolmanage/notice'),
      name: 'SchoolNotice',
      meta: { title: '公告管理', icon: 'el-icon-s-home' }
    },
    {
      path: 'school-questionnaire',
      component: () => import('@/views/schoolmanage/questionnaire'),
      name: 'SchoolQuestionnaire',
      meta: { title: '问卷调查', icon: 'el-icon-s-home' }
    },
    {
      path: 'school-questionnaire-result',
      component: () => import('@/views/schoolmanage/questionnaire/result'),
      name: 'SchoolQuestionnaireResult'
    },
    {
      path: 'school-questionnaire-content',
      component: () => import('@/views/schoolmanage/questionnaire/content'),
      name: 'SchoolQuestionnaireContent'
    }
  ]
}


export default SchoolRouter;
