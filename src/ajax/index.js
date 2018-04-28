//ajax calls

export let getBeersOfTheWeek = () =>
  fetch('/beers')
  .then(res => res.json())

export let getSpiritsOfTheWeek = () =>
  fetch('/spirits')
  .then(res => res.json())

export let getHeroPairings = () =>
  fetch('/heros')
  .then(res => res.json())

export let createAccount = (user) =>
  fetch('/users', {
    body: JSON.stringify(user),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.text())

export let signIn = (user) =>
  fetch('/signin', {
    body: JSON.stringify(user),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.text())
