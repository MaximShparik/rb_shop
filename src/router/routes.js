
const metaPublic = { layout: 'LayoutDefault' }
// const metaAccount = { layout: 'LayoutDefault', auth: true }
export default [
  {
    path: '/',
    name: 'page-main',
    component: () => import('@/pages/PageMain'),
    meta: metaPublic
  },
  {
    path: '/all',
    name: 'page-goods',
    component: () => import('@/pages/PageGoods'),
    meta: metaPublic
  },
  {
    path: '/news',
    name: 'page-news',
    component: () => import('@/pages/PageNews'),
    meta: metaPublic
  },
  {
    path: '/wishlist',
    name: 'page-wishlist',
    component: () => import('@/pages/PageWishlist'),
    meta: metaPublic
  },
  {
    path: '/checkout',
    name: 'page-checkout',
    component: () => import('@/pages/PageCheckout'),
    meta: metaPublic
  },
  {
    path: '/item/:id',
    name: 'page-item',
    component: () => import('@/pages/PageItem'),
    meta: metaPublic
  },
  {
    path: '/profile',
    name: 'page-profile',
    component: () => import('@/pages/PageProfile'),
    meta: metaPublic
  },
  {
    path: '/*',
    name: 'page-404',
    component: () => import('@/pages/404'),
    meta: metaPublic
  }
]
