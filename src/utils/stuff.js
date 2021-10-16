/* eslint-disable */
// profile will get after login
// /profile get i think
export const profile = {
  details: {
    name: 'Maxim Shparik', // choose name of this value to consistent with login and register request, say about it to me
    login: 'maxim@gmail.com'
  },
  shipping: [
    {
      id: 1,
      name: 'maxim',
      address: 'varnsdskogo 86',
      city: 'moscow',
      zip: '119607',
      phone: '89167438433',
      country: 'Russia',
      default: true // flag to auto use on checkout page
    },
    {
      id: 2,
      name: 'ivan',
      address: 'varnsdskogo 86',
      city: 'moscow',
      zip: '119607',
      phone: '89167438433',
      country: 'Russia',
      default: false
    }
  ],
  recentOrders: [
    {
      id: 618322, //id of order in system
      item_id: 123, // id of items in our system
      name: 'Air Jordan 3',
      status: 'completed',
      order_date: '7 may 1019', //can be unix date or another type
      order_img: 'https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/2/1/21-09-2018_nike_airjordan3retrosew_bordeaux_phantom_ah7859-600_mg_1.jpg'
    }
  ],
  wishlist: [123, 73, 82],
  basket: [1, 2, 3]
}
// if user not login, will store basket in localstorage

// this content use for load 
// items will get on from by query of style, size, colors and array of ids
// need set default limit for request, about 20
// /items in body { limit: 100, offset: 10, style: ['sneaker'], colors: ['Pure'], size: ['9'] }
// /items in body { ids: [1, 2, 3, 4, 5] } this query will use for wishlist, basket
export const items = [
  {
    id: 812377283, // id of item, about 6-10 length, this value set by server when we load items
    name: "adidas Yeezy Slide Pure",
    brands: [
      "adidas"
    ],
    colors: [
      "Pure",
      "Pure",
      "Pure"
    ],
    sizes_prices: [
      {
        id: 1, // this id add server when we load items with sizes and price, id = from 1 to 99
        price: 23400, // price in rub
        size: '9' // size set in uk value
      },
      {
        id: 2, // this id add server when we load items with sizes and price, id = from 1 to 99
        price: 23400, // price in rub
        size: '9.5' // size set in uk value
      },
      {
        id: 3, // this id add server when we load items with sizes and price, id = from 1 to 99
        price: 23400, // price in rub
        size: '10' // size set in uk value
      }
    ],
    photos: [
      "https://images.stockx.com/images/adidas-Yeezy-Slide-Pure-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1619634941",
      "https://images.stockx.com/images/adidas-Yeezy-Slide-Pure-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1619634941",
      "https://images.stockx.com/images/adidas-Yeezy-Slide-Pure-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1619634941",
      "https://images.stockx.com/images/adidas-Yeezy-Slide-Pure-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1619634941"
    ],
    style: "sneaker",
    description: {
      en: "The Yeezy Slides 'Pure' brings a neutral look to its signature slide design. The shoe's one-piece construction is built with EVA, finished tonally throughout and sporting its lone branding via the Three-Stripes on the footbed. Underfoot, the outsole incorporates a series of deep flex grooves to offer flexible traction.",
      ru: 'на русском'
    },
    sizing: {
      en: "The Yeezy Slides 'Pure' brings a neutral look to its signature slide design. The shoe's one-piece construction is built with EVA, finished tonally throughout and sporting its lone branding via the Three-Stripes on the footbed. Underfoot, the outsole incorporates a series of deep flex grooves to offer flexible traction.",
      ru: 'на русском'
    },
    shipping: {
      en: "The Yeezy Slides 'Pure' brings a neutral look to its signature slide design. The shoe's one-piece construction is built with EVA, finished tonally throughout and sporting its lone branding via the Three-Stripes on the footbed. Underfoot, the outsole incorporates a series of deep flex grooves to offer flexible traction.",
      ru: 'на русском'
    },
    returns: {
      en: "The Yeezy Slides 'Pure' brings a neutral look to its signature slide design. The shoe's one-piece construction is built with EVA, finished tonally throughout and sporting its lone branding via the Three-Stripes on the footbed. Underfoot, the outsole incorporates a series of deep flex grooves to offer flexible traction.",
      ru: 'на русском'
    }
  }
]


// shit 
// just title, photo, subtitle, text, link
export const promos = [
  {
    id: 1,
    photo: 'https://media.endclothing.com/end-cms/w_400/prodcms/65212760-6f47-431c-b0a3-5e1e894be6cf_16-06-21_Sale_MidSeason_Percent1_1200x1200.jpg?auto=compress,format',
    text: {
      en: "on english",
      ru: 'на русском'
    },
    title: {
      en: "on english",
      ru: 'на русском'
    },
    subtitle: {
      en: "on english",
      ru: 'на русском'
    },
    link: ''
  },
  {
    id: 2,
    photo: 'https://media.endclothing.com/end-cms/w_400/prodcms/65212760-6f47-431c-b0a3-5e1e894be6cf_16-06-21_Sale_MidSeason_Percent1_1200x1200.jpg?auto=compress,format',
    text: {
      en: "on english",
      ru: 'на русском'
    },
    title: {
      en: "on english",
      ru: 'на русском'
    },
    subtitle: {
      en: "on english",
      ru: 'на русском'
    },
    link: ''
  },
  {
    id: 3,
    photo: 'https://media.endclothing.com/end-cms/w_400/prodcms/65212760-6f47-431c-b0a3-5e1e894be6cf_16-06-21_Sale_MidSeason_Percent1_1200x1200.jpg?auto=compress,format',
    text: {
      en: "on english",
      ru: 'на русском'
    },
    title: {
      en: "on english",
      ru: 'на русском'
    },
    subtitle: {
      en: "on english",
      ru: 'на русском'
    },
    link: ''
  },
  {
    id: 4,
    photo: 'https://media.endclothing.com/end-cms/w_400/prodcms/65212760-6f47-431c-b0a3-5e1e894be6cf_16-06-21_Sale_MidSeason_Percent1_1200x1200.jpg?auto=compress,format',
    text: {
      en: "on english",
      ru: 'на русском'
    },
    title: {
      en: "on english",
      ru: 'на русском'
    },
    subtitle: {
      en: "on english",
      ru: 'на русском'
    },
    link: ''
  }
]
