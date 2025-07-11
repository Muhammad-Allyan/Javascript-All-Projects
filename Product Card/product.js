const container = document.getElementById("product-container"); // Make sure this exists in your HTML
async function getProducts() {
    const data = await fetch('https://dummyjson.com/products') //promise
    const res = await data.json();

    const products = res.products;

    console.log(products)

    renderProducts(products)
}


getProducts();



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


        console.log(card)

        // Append children
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(button);

        card.appendChild(img);
        card.appendChild(cardBody);

        container.appendChild(card);
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

    const button = document.createElement("a");
    button.href = product.link;
    button.className = "btn btn-primary";
    button.textContent = "Go somewhere";


    return {
        card,
        cardBody,
        cardTitle,
        cardText,
        img,
        button
    }
}
