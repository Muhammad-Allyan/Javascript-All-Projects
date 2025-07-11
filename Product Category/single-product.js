// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const container = document.getElementById("single-product-container");

async function fetchSingleProduct(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await res.json();
    renderProduct(product);
  } catch (err) {
    container.innerHTML = `<p>Error loading product</p>`;
    console.error(err);
  }
}

function renderProduct(product) {
  container.innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <img src="${product.images[0]}" class="img-fluid rounded" alt="${product.title}">
      </div>
      <div class="col-md-6">
      <h2>${product.title}</h2>
      <p><strong>Description:</strong> ${product.description}</p>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Discount Percentage:</strong> $${product.discountPercentage}</p>
      <p><strong>Rating:</strong> ${product.rating}</p>
      <p><strong>Stock:</strong> ${product.stock}</p>
      <p><strong>Tags:</strong> ${product.tags}</p>
      <p><strong>Brand:</strong> ${product.brand}</p>
      <p><strong>Product SKU:</strong> ${product.sku}</p>
      <p><strong>Weight:</strong> ${product.weight}</p>
      <p><strong>Dimensions:</strong> Width: ${product.dimensions.width} | Height: ${product.dimensions.width} | Depth: ${product.dimensions.depth}</p>
        <p><strong>Warranty:</strong> ${product.warrantyInformation}</p>
        <p><strong>Shipping:</strong> ${product.shippingInformation}</p>
        <p><strong>Availability:</strong> ${product.availabilityStatus}</p>
        <p><strong>Return Policy:</strong> ${product.returnPolicy}</p>
        <p><strong>Minimum Order:</strong> ${product.minimumOrderQuantity}</p>
        <button onclick="window.history.back()" class="btn btn-secondary">← Back to Products</button>
      </div>
    </div>

    <hr />

    <h4>Reviews:</h4>
    ${product.reviews.map(review => `
      <div class="border p-2 mb-2 rounded">
        <strong>${review.reviewerName}</strong> (${review.rating} ★)
        <p>${review.comment}</p>
        <small>${new Date(review.date).toLocaleDateString()}</small>
      </div>
    `).join("")}
  `;
}

if (productId) {
  fetchSingleProduct(productId);
} else {
  container.innerHTML = `<p>No product ID provided in URL.</p>`;
}
