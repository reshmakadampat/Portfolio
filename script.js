document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.style.transition = "all 0.3s ease";

        btn.addEventListener("mouseenter", function () {
            this.style.boxShadow = "0px 4px 12px rgba(23, 28, 23, 0.3)";
        });

        btn.addEventListener("mouseleave", function () {
            this.style.boxShadow = "none";
        });
    });
});
