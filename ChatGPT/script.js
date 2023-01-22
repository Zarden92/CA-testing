const apiUrl = 'https://api.punkapi.com/v2/beers';
const beersEl = document.getElementById('beers');
const loadingEl = document.getElementById('loading');

function showLoading() {
  loadingEl.style.display = 'block';
  beersEl.style.display = 'none';
}

function hideLoading() {
  loadingEl.style.display = 'none';
  beersEl.style.display = 'block';
}

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    let html = '';
    data.forEach(beer => {
      html += `
        <div class="beer-card">
          <h2><a href="details.html?id=${beer.id}">${beer.name}</a></h2>
          <p>${beer.description}</p>
          <p>Alcohol by volume: ${beer.abv}%</p>
        </div>
      `;
    });
    beersEl.innerHTML = html;
    hideLoading();
  })
  .catch(error => {
    console.log(error);
    beersEl.innerHTML = '<p>Oh no! somthing went wrong. Please come back later</p>';
    hideLoading();
  });
