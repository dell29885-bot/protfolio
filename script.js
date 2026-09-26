// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});




// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}




//==================
//about section 
//==================


body.dark .about-section








// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

const contactResult =
    document.getElementById("contactResult");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("contactEmail").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("contactMessage").value.trim();


    // CHECK EMPTY FIELDS

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        contactResult.textContent =
            "Please fill all fields.";

        contactResult.style.color = "red";

        return;
    }


    // CHECK EMAIL

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        contactResult.textContent =
            "Please enter a valid email address.";

        contactResult.style.color = "red";

        return;
    }


    // SUCCESS

    contactResult.textContent =
        "Message sent successfully!";

    contactResult.style.color = "green";


    // CLEAR FORM

    contactForm.reset();

});





// =========================
// SHOW / HIDE PASSWORD
// =========================

const passwordToggle =
    document.getElementById("passwordToggle");

const password =
    document.getElementById("password");


passwordToggle.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        passwordToggle.classList.remove("fa-eye");

        passwordToggle.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        passwordToggle.classList.remove("fa-eye-slash");

        passwordToggle.classList.add("fa-eye");

    }

});


// =========================
// LOGIN VALIDATION
// =========================

const loginForm =
    document.getElementById("loginForm");

const loginMessage =
    document.getElementById("loginMessage");


loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const passwordValue =
        password.value.trim();


    // Empty fields

    if (email === "" || passwordValue === "") {

        loginMessage.textContent =
            "Please fill all fields.";

        loginMessage.style.color = "red";

        return;
    }


    // Password length

    if (passwordValue.length < 6) {

        loginMessage.textContent =
            "Password must be at least 6 characters.";

        loginMessage.style.color = "red";

        return;
    }


    // Success

    loginMessage.textContent =
        "Login successful!";

    loginMessage.style.color = "green";

});



