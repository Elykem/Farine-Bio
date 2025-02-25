document.addEventListener("DOMContentLoaded", function () {
    // Animation au chargement des sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
    });
    
    window.addEventListener("scroll", function () {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.style.transition = "all 0.8s ease-out";
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });

    // Gestion du formulaire d'inscription
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const emailInput = document.querySelector("input[type='email']");
        if (emailInput.value) {
            alert("Merci pour votre inscription ! Vous recevrez bientôt des nouvelles d'Elykem.");
            emailInput.value = "";
        }
    });
});
