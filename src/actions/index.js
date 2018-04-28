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

  setBeersOfTheWeek.toString = () => 'SET_BEERS_OF_THE_WEEK';
