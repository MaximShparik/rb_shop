
const metaPublic = { layout: 'LayoutDefault' }
// const metaAccount = { layout: 'LayoutDefault', auth: true }
export default [
  {
    path: process.env.NODE_ENV === 'production' ? '/rb_shop/' : '/',
    name: 'page-main',
    component: () => import('@/pages/PageMain'),
    meta: metaPublic
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/rb_shop/' : '/all',
    name: 'page-goods',
    component: () => import('@/pages/PageGoods'),
    meta: metaPublic
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/rb_shop/' : '/news',
    name: 'page-news',
    component: () => import('@/pages/PageNews'),
    meta: metaPublic
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/rb_shop/' : '/wishlist',
    name: 'page-wishlist',
    component: () => import('@/pages/PageWishlist'),
    meta: metaPublic
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/rb_shop/' : '/checkout',
    name: 'page-checkout',
    component: () => import('@/pages/PageCheckout'),
    meta: metaPublic
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/rb_shop/' : '/item/:id',
    name: 'page-item',
    component: () => import('@/pages/PageItem'),
    meta: metaPublic
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/rb_shop/' : '/profile',
    name: 'page-profile',
    component: () => import('@/pages/PageProfile'),
    meta: metaPublic
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/rb_shop/' : '/*',
    name: 'page-404',
    component: () => import('@/pages/404'),
    meta: metaPublic
  }
]
