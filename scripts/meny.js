document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("main-menu");

    nav.innerHTML = `
        <a href="index.html">Startsida</a>
        <a href="product.html">Produkter</a>
        <a href="contact.html">Kontakta oss</a>
        <a href="media.html">Media</a>
    `;
});