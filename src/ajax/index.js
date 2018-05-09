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
  .then(res => res.json())

export let signIn = (user) =>
  fetch('/signin', {
    body: JSON.stringify(user),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())

export let getProfileThumbnailImage = (token) =>
  fetch('/profile', {
    body: JSON.stringify(token),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())

export let getUserProfile = (token) =>
  fetch('/my-profile', {
    body: JSON.stringify(token),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())

export let getHeroCards = () =>
  fetch('/heros')
  .then(res => res.json())

export let getPairingCards = () =>
  fetch('/pairings')
  .then(res => res.json())

export let getAdditionalBeers = (type) =>
    fetch('/similar-beers', {
      method: 'POST',
      body: JSON.stringify({type: type}),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())

export let getAdditionalPairingsByGenre = (genre) =>
  fetch('/genres', {
    method: 'POST',
    body: JSON.stringify({genre: genre}),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())

export let ratePairing = (rating, token) =>
  fetch('/ratings', {
    method: 'POST',
    body: JSON.stringify(rating),
    headers: {
      'content-type': 'application/json',
      authorization: token
    }
  })
  .then(res => res.json())

export let getShelf = (token) =>
  fetch('/my-shelf', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: token
    }
  })
  .then(res => res.json())


export let getPairing = (id) =>
  fetch('/featured-pairing', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      id: id
    }
  })
  .then(res => res.json())
