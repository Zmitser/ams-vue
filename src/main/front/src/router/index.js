import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () = > import('@/components/Home')
},
{
  '/dashboard',
    name;
:
  'dashboard',
    component;
:
  () =;
>
  import('@/components/Dashboard/Layout'),
    children;
:
  [
    {
      path: 'indicators',
      name: 'dashboard.indicators',
      component: () = > import('@/components/Dashboard/Indicators')
},
  {
    'backup',
      name;
  :
    'dashboard.backup',
      component;
  :
    () =;
  >
    import('@/components/Dashboard/Backup')
  }
,
  {
    'logs',
      name;
  :
    'dashboard.logs',
      component;
  :
    () =;
  >
    import('@/components/Dashboard/Logs')
  }
]
}
,
{
  '/users',
    name;
:
  'users',
    component;
:
  () =;
>
  import('@/components/Users/Layout')
}
,
]

export default new VueRouter({
  mode: 'history',
  routes
})
