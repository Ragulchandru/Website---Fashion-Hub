// Search Functionality
function searchProducts() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let products = document.getElementsByClassName('productbox');
    let matchedProducts = 0;

    for (let i = 0; i < products.length; i++) {
        let productText = products[i].getElementsByTagName('p')[0].innerText.toLowerCase();
        if (productText.includes(input)) {
            products[i].style.display = 'block';
            matchedProducts++;
        } else {
            products[i].style.display = 'none';
        }
    }

    // Hide 'View More' button if fewer results are shown
    let loadMoreButton = document.getElementById('load-more');
    let viewLessButton = document.getElementById('view-less');

    if (matchedProducts <= visibleProducts || matchedProducts === 0) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'block';
    }

    // Hide 'View Less' button if fewer than the original visible products are matched
    if (matchedProducts <= initialVisibleProducts) {
        viewLessButton.style.display = 'none';
    } else {
        viewLessButton.style.display = 'block';
    }
}

// Load More Products Functionality
let initialVisibleProducts = 6;
let visibleProducts = initialVisibleProducts;

function loadMoreProducts() {
    let products = document.getElementsByClassName('productbox');
    let nextBatch = Math.min(visibleProducts + 6, products.length);

    for (let i = visibleProducts; i < nextBatch; i++) {
        if (products[i]) {
            products[i].style.display = 'block';
        }
    }

    visibleProducts = nextBatch;

    // Hide 'View More' button if all products are visible
    if (visibleProducts >= products.length) {
        document.getElementById('load-more').style.display = 'none';
    }

    // Show 'View Less' button if there are more than the initial products visible
    if (visibleProducts > initialVisibleProducts) {
        document.getElementById('view-less').style.display = 'block';
    }
}

// View Less Products Functionality
function viewLessProducts() {
    let products = document.getElementsByClassName('productbox');

    // Hide products down to the initial visible state
    for (let i = initialVisibleProducts; i < products.length; i++) {
        products[i].style.display = 'none';
    }

    visibleProducts = initialVisibleProducts;

    // Show 'View More' button again
    document.getElementById('load-more').style.display = 'block';

    // Hide 'View Less' button since we returned to the initial state
    document.getElementById('view-less').style.display = 'none';
}

// Initialize page with limited products visible
window.onload = function () {
    let products = document.getElementsByClassName('productbox');

    // Initially hide all products beyond the initial set
    for (let i = initialVisibleProducts; i < products.length; i++) {
        products[i].style.display = 'none';
    }

    // Show or hide buttons based on the number of products
    if (products.length <= initialVisibleProducts) {
        document.getElementById('load-more').style.display = 'none';
    }

    document.getElementById('view-less').style.display = 'none'; // Initially hide the 'View Less' button
};
