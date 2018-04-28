//ajax calls

export let getBeersOfTheWeek = () =>
  fetch('/beers')
  .then(res => res.json())
