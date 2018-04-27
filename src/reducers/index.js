

const initialState = {
  featuredHeros: [
    {
      title: 'The Botany of Desire',
      author: 'Michael Pollan',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse augue tellus, semper sed nisi quis, sollicitudin faucibus ante. Nam dignissim volutpat ipsum in semper. Sed quis felis quis dolor venenatis ultricies. Donec placerat augue quis justo efficitur sollicitudin. Maecenas luctus nibh auctor mauris ultrices maximus.',
      reviews: '1000',
      stars: 2,
      img: "images/botany.jpg",
      class: 'botany'
    },
    {
      title: 'Into Thin Air',
      author: 'Jon Krakauer',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse augue tellus, semper sed nisi quis, sollicitudin faucibus ante. Nam dignissim volutpat ipsum in semper. Sed quis felis quis dolor venenatis ultricies. Donec placerat augue quis justo efficitur sollicitudin. Maecenas luctus nibh auctor mauris ultrices maximus.',
      reviews: '1000',
      stars: 4,
      img: "images/air.jpg",
      class: 'air'
    },
    {
      title: 'The Name of the Wind',
      author: 'Patrick Rothfuss',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse augue tellus, semper sed nisi quis, sollicitudin faucibus ante. Nam dignissim volutpat ipsum in semper. Sed quis felis quis dolor venenatis ultricies. Donec placerat augue quis justo efficitur sollicitudin. Maecenas luctus nibh auctor mauris ultrices maximus.',
      reviews: '1000',
      stars: 4,
      img: "images/wind.jpg",
      class: 'wind'
    }
  ],
  featuredBeers: [
    {
      brewery: 'Harpoon',
      name: 'UFO',
      icon: 'images/harpoon.png'
    },
    {
      brewery: 'Samuel Adams',
      name: 'Boston Lager',
      icon: 'images/harpoon.png'
    },
    {
      brewery: 'Sweetwater',
      name: '420',
      icon: 'images/harpoon.png'
    },
    {
      brewery: 'Left Hand Brewing',
      name: 'Milk Stout Nitro',
      icon: 'images/harpoon.png'
    },

  ],
  featuredSpirits: [
    {
      distillary: 'Widow Jane',
      icon: 'images/widow-jane.png',
      name: 'Bourbon'
    },
    {
      distillary: 'Cruzan',
      icon: 'images/cruzan.png',
      name: 'Aged Rum'
    },
    {
      distillary: 'Silver',
      icon: 'images/patron.png',
      name: 'Patrón'
    },
  ],
  user: null,
  books: [],
  token: null
}

const reducerRoutes = {
  default: (state, action) => state
}

const rootReducer = (state = initialState, action) => {
  let reducerAction = reducerRoutes[action.type] || reducerRoutes.default
  return reducerAction(state, action)
}


export default rootReducer;
