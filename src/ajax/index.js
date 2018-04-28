//ajax calls

export let getBeersOfTheWeek = () =>
  fetch('/beers')
  .then(res => res.json())

export let getSpiritsOfTheWeek = () =>
  fetch('/spirits')
  .then(res => res.json())
