const detailsContainer = document.querySelector(".main_section1");
const title = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (id === null) {
  location.href = "/";
}

console.log(id);

const url = "https://flowpow.pro/new/wp-json/wc/store/products/" + id;

console.log(url);

async function characterDisplay() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    title.innerHTML = `${data.name}`;

    detailsContainer.innerHTML += `<div class="main_img">
                                      <h1 class="product_name">${data.name}</h1>
                                      <div class="product_image"><img
                                        src="${data.images[0].src}" alt="Jacket name"></div>
                                      <p class="product_price">Price: $${data.prices.regular_price}</p>
            
                                   </div>`;
    console.log("Success");
  } catch (error) {
    console.log(error, "An error occurred");
    detailsContainer.innerHTML = "An error occurred when calling the API";
  } finally {
    console.log("Done!");
  }
}
characterDisplay();
