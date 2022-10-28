const productsContainer = document.querySelector(".products_list_container");

const url = "https://flowpow.pro/new/wp-json/wc/store/products";

// async function fetchProducts() {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();

//     console.log(json);

//     productsContainer.innerHTML = "";

//     const product = json;

//     product.forEach(function (jacket) {
//       productsContainer.innerHTML += `<div class="product">
//       <a href="product.html?id=${jacket.id}" class="product_container">
//                                                 <div class="product_image" style="background-image: url('${jacket.images[0].src}');></div>
//                                                 <div class="details">
//                                                     <h4 class="char-name">${jacket.name}</h4>
//                                                     <p class"gender">Price: ${jacket.prices.regular_price}</p>
//                                                 </div>
//                                             </a></div>`;
//     });
//     console.log("Success");
//   } catch (error) {
//     console.log(error);
//     charactersContainer.innerHTML = message("error");
//   }
// }

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    productsContainer.innerHTML = "";

    const product = json;

    product.forEach(function (jacket) {
      productsContainer.innerHTML += ` <div class="product">
                        <a href="product.html?id=${jacket.id}" class="product_container">
                            <div class="product_image"><img
                                        src="${jacket.images[0].src}" alt="Jacket name"></div>
                            <li class="product_name">
                                <h2>${jacket.name}</h2>
                            </li>
                            <li class="product_price">Price: $${jacket.prices.regular_price}</li>

                        </a>
                    </div>`;
    });
    console.log("Success");
  } catch (error) {
    console.log(error);
    charactersContainer.innerHTML = message("error");
  }
}

fetchProducts();
