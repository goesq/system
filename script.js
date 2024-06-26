document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.logo-link');

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            var targetSelector = this.getAttribute("href");
            var targetElement = document.querySelector(targetSelector);

            if (targetElement) {
                var targetPosition = targetElement.offsetTop;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            } else {
                console.error("Elemento com seletor " + targetSelector + " não encontrado.");
            }
        });
    });
});

