export default[
    {
        path: 'HomePage',
        name: 'HomePage',
        component: () => import("@/views/HomePage"),
        meta: {
          keepAlive: true
        }
      },
]