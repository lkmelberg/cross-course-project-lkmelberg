const detailsContainer = document.querySelector(".main_section1");
const title = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (id === null) {
  location.href = "/";
}

console.log(id);

const url = "https://flowpow.pro/new/wp-json/wc/store/products" + id;

console.log(url);

async function characterDisplay() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    title.innerHTML = `${data.name}`;

    detailsContainer.innerHTML += `<div class="char_det">
                                      <h4 class="details_name">Name: ${data.name}</h3>
                                      <div class="details-image" 
                                    style="background-image: url('${data.image}')"></div>
                                     <p class="details status">Status: ${data.status}</p>
                                      <p class="details species">Species: ${data.species}</p>
                                      <p class="details origin">Origin: ${data.origin.name}</p>
                                   </div>`;
    console.log("Success");
    const loader = document.querySelector(".loader");
    loader.classList.remove("loader");
  } catch (error) {
    console.log(error, "An error occurred");
    detailsContainer.innerHTML = "An error occurred when calling the API";
  } finally {
    console.log("Done!");
  }
}
characterDisplay();
