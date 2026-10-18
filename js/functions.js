const button = document.getElementsByTagName("button");
button[9].innerText = "BUY";
button[9].style.backgroundColor = "#333";

const products = document.querySelectorAll(".main__product");

products.forEach((product) => {
    product.addEventListener("mouseenter", () => {
        product.style.opacity = "0.5";
    });

    product.addEventListener("mouseleave", () => {
        product.style.opacity = "1";
    });
});


const menuIcon = document.querySelector(
    ".header__icon:not(.header__icon--secondary)"
);

const cartIcon = document.querySelector(".header__icon--secondary");
const menu = document.querySelector(".main__menu");
const cart = document.querySelector(".main__cart");
const closeMenu = document.querySelector(".icon__x");

menuIcon.addEventListener("click", () => {
    menu.classList.add("is-open");
    cart.classList.remove("is-open");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("is-open");
});

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("is-open");
    menu.classList.remove("is-open");
});

const addButtons = document.querySelectorAll(".product__cart");
const cartItems = document.querySelector(".cart__items");
const cartCount = document.querySelector(".cart__count");

function updateCartCount() {
    const totalProducts = cartItems.querySelectorAll(".cart__products").length;
    cartCount.textContent = totalProducts;
}

addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.closest(".main__product");

        const image = product.querySelector(".product__img");
        const name = product.querySelector(".product__name");
        const price = product.querySelector(".product__price");

        const cartProduct = document.createElement("div");
        cartProduct.classList.add("cart__products");

        const cartImage = document.createElement("img");
        cartImage.classList.add("cart__product");
        cartImage.src = image.src;
        cartImage.alt = image.alt;

        const cartName = document.createElement("p");
        cartName.classList.add("cart__name");
        cartName.textContent = name.textContent;

        const cartPrice = document.createElement("p");
        cartPrice.classList.add("cart__price");
        cartPrice.textContent = price.textContent;

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("cart__delete");

        const deleteImage = document.createElement("img");
        deleteImage.src = "img/delete.svg";
        deleteImage.alt = "Eliminar producto";

        deleteIcon.appendChild(deleteImage);

        cartProduct.append(
            cartImage,
            cartName,
            cartPrice,
            deleteIcon
        );

        cartItems.appendChild(cartProduct);

        updateCartCount();
    });
});

cartItems.addEventListener("click", (event) => {
    const deleteIcon = event.target.closest(".cart__delete");

    if (!deleteIcon) {
        return;
    }

    const product = deleteIcon.closest(".cart__products");
    product.remove();

    updateCartCount();
});

updateCartCount();
