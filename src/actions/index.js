export const setBeersOfTheWeek = beers =>
  ({
    type: setBeersOfTheWeek.toString(),
    payload: beers
  });

  setBeersOfTheWeek.toString = () => 'SET_BEERS_OF_THE_WEEK';
