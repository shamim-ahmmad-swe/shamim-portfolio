// =========================
// Mobile Menu
// =========================

let menuButton = document.getElementById("menuButton");
let navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// =========================
// Close Mobile Menu
// =========================

let navItems = document.querySelectorAll(".nav-links a");

for (let i = 0; i < navItems.length; i++) {

    navItems[i].addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

}


// =========================
// Contact Form
// =========================

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let subject = document.getElementById("contactSubject").value;
    let message = document.getElementById("contactMessage").value;


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill in all fields.");

        return;
    }


    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );


    contactForm.reset();

});