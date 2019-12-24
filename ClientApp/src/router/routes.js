
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'PageHome', component: () => import('pages/Index.vue') },
      { path: 'page1', name: 'PageOne', component: () => import('pages/Page1.vue') },
      { path: 'page2', name: 'PageTwo', component: () => import('pages/Page2.vue') },
      { path: 'page3', name: 'PageThree', component: () => import('pages/Page3.vue') },
      { path: 'weatherforecast', name: 'WeatherForecast', component: () => import('pages/WeatherForecast.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
