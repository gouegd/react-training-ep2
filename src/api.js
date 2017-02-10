const getByCategory = (category) =>
  fetch(`http://api.giphy.com/v1/gifs/search?q=${category}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())

export { getByCategory };
