// NAV BAR SCROLLING 
window.addEventListener("scroll",()=>{
document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 10)
})


// SHOW/HIDE FAQ ANSWER 
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        // change icon
        const icon = faq.querySelector(".faq__icon i");
        if (icon.className ===  "uil uil-plus") {
            icon.className =  "uil uil-minus";
        }else {
            icon.className = "uil uil-plus";
        }
})
})

// NAV MENU
//open nav
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav
const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener("click", closeNav)

