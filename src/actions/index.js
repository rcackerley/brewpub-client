export const setBeersOfTheWeek = beers =>
  ({
    type: setBeersOfTheWeek.toString(),
    payload: beers
  });

  export const setSpiritsOfTheWeek = spirits =>
    ({
      type: setSpiritsOfTheWeek.toString(),
      payload: spirits
    })

  export const setToken = token =>
    ({
      type: setToken.toString(),
      payload: token
    })


  setBeersOfTheWeek.toString = () => 'SET_BEERS_OF_THE_WEEK';
  setSpiritsOfTheWeek.toString = () => 'SET_SPIRITS_OF_THE_WEEK';
  setToken.toString = () => 'SET_TOKEN';
