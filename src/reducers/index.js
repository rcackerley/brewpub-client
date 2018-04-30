import {setBeersOfTheWeek, setSpiritsOfTheWeek, setToken, setUserImage, setUser, setHeros, setBooks} from '../actions/index';

const initialState = {
  featuredHeros: [],
  featuredBeers: [],
  featuredSpirits: [],
  user: {
    image: 'images/placeholder.png'
  },
  books: [
    {
      title: 'Game of Thrones',
      author: 'George R.R. Martin',
      reviews: '422',
      stars: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.consectetur adipiscing elit, sed do eiusmod tempor.',
      image: 'images/got-cover.jpg',
      pairings: [
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        }
      ]
    },
    {
      title: 'The Kite Runner',
      author: 'Khaled Hosseini',
      reviews: '765',
      stars: 3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.consectetur adipiscing elit, sed do eiusmod tempor.',
      image: 'images/the-kite-runner.jpg',
      pairings: [
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        }
      ]
    },
    {
      title: 'First Women',
      author: 'Kate Anderson Bower',
      reviews: '138',
      stars: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.consectetur adipiscing elit, sed do eiusmod tempor.',
      image: 'images/first-women-cover.jpg',
      pairings: [
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        }
      ]
    },
    {
      title: 'Grant',
      author: 'Ron Chernow',
      reviews: '46',
      stars: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.consectetur adipiscing elit, sed do eiusmod tempor.',
      image: 'images/grant-cover.jpg',
      pairings: [
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        },
        {
          brewery: 'Harpoon',
          img: 'images/harpoon.png',
          name: 'UFO',
          type: 'Pale Ale'
        }
      ]
    }
  ],
  token: null
}

const reducerRoutes = {
  [setBeersOfTheWeek]: (state, action) => ({
    ...state, featuredBeers: action.payload
  }),
  [setSpiritsOfTheWeek]: (state, action) => ({
    ...state, featuredSpirits: action.payload
  }),
  [setToken]: (state, action) => ({
   ...state, token: action.payload
 }),
 [setUserImage]: (state, action) => ({
  ...state, user: {...state.user, image: action.payload}
  }),
  [setUser]: (state, action) => ({
    ...state, user: action.payload
  }),
  [setHeros]: (state, action) => ({
    ...state, featuredHeros: action.payload
  }),
  [setBooks]: (state, action) => ({
    ...state, books: action.payload
  }),
  default: (state, action) => state
}

const rootReducer = (state = initialState, action) => {
  let reducerAction = reducerRoutes[action.type] || reducerRoutes.default
  return reducerAction(state, action)
}


export default rootReducer;
