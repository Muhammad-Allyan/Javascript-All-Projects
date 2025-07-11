const categoryList = document.getElementById("category-list");
const productContainer = document.getElementById("product-container"); // Make sure this exists in your HTML
let productLoading = document.getElementById("loading"); // Make sure this exists in your HTML
productLoading.style.fontSize = '36px';

async function getCategories() {
    const res = await fetch("https://dummyjson.com/products/categories");
    const categories = await res.json();
    console.log("Fetched categories:", categories); // Debug: should show array

    renderCategories(categories); // Should be an array of strings
}

getCategories();

function renderCategories(categories) {
    categories.forEach(category => {
        const li = document.createElement("li");
        li.textContent = capitalize(category.name);
        li.role = "button";
        li.style.padding = "8px 0";
        li.style.color = "#2b408f";
        li.style.fontSize = "1rem";
        li.style.borderBottom = "1px solid #eee";
        li.addEventListener("click", function () {
            // const url = `${category.url}`;
            // console.log(`${category.name}: ` + url);
            getProducts(category.name);

        });
        categoryList.appendChild(li);
    });
}

function capitalize(str) {
    str = String(str); // ✅ Ensure it's a string
    return str.charAt(0).toUpperCase() + str.slice(1);
}


//  Products
async function getProducts(category) {
    productLoading.style.display = 'block';
    productLoading.style.zIndex = 1000

    const data = await fetch(`https://dummyjson.com/products/category/${category}`) //promise

    const res = await data.json();
    productLoading.style.display = 'none';
    productContainer.innerHTML = "";


    const products = res.products;

    console.log(products)

    renderProducts(products)
}


getProducts('beauty');



function renderProducts(products) {
    products.forEach(product => {
        const {
            card,
            cardBody,
            cardTitle,
            cardText,
            img,
            button
        } = createCard(product);


        // console.log(card)

        // Append children
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(button);

        card.appendChild(img);
        card.appendChild(cardBody);


        productContainer.appendChild(card);
    });
}



function createCard(product) {
    // Create elements
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";
    card.style.margin = "10px";

    const img = document.createElement("img");
    img.src = product.images[0];
    img.className = "card-img-top";
    img.alt = product.title;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = product.title;

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = product.description;

    // const button = document.createElement("a"); // Old button script
    // button.href = product.link;
    // button.className = "btn btn-primary";
    // button.textContent = "Go somewhere";

    const button = document.createElement("a");
    button.href = `single-product.html?id=${product.id}`;
    button.className = "btn btn-primary";
    button.textContent = "View Product";



    return {
        card,
        cardBody,
        cardTitle,
        cardText,
        img,
        button
    }
}
