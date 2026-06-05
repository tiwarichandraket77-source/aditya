function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;

        if(top >= offset && top < offset + height){
            section.style.transition = "1s";
            section.style.opacity = "1";
        }
    });
});
