document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".produkt-check");
    const totalDisplay = document.getElementById("totalpris");

    function uppdateraPris() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.dataset.pris);
            }
        });
        totalDisplay.textContent = total.toLocaleString("sv-SE") + " kr";
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", uppdateraPris);
    });

    uppdateraPris();
});