const beersEl = document.getElementById('beer-details');
const loadingEl = document.getElementById('loading');

function showLoading() {
  loadingEl.style.display = 'block';
  beersEl.style.display = 'none';
}

function hideLoading() {
  loadingEl.style.display = 'none';
  beersEl.style.display = 'block';
}

// Get the id from the query string
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Add the id to the API URL
const apiUrl = `https://api.punkapi.com/v2/beerss/${id}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const beer = data[0];
    let html = `
      <h1>${beer.name}</h1>
      <img src="${beer.image_url}" alt="${beer.name}" />
      <p>${beer.description}</p>
      <p>ABV: ${beer.abv}%</p>
    `;
    beersEl.innerHTML = html;
    document.title = beer.name;
    hideLoading();
  })
  .catch(error => {
    console.log(error);
    beersEl.innerHTML = '<p>Oh no! somthing went wrong. Please come back later</p>';
    hideLoading();
  });
