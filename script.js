// Delightful Studio Script
// Owner: Imrana Fathima

function order(product){

    let phone = "919942275036";

    let message =
    "Assalamu Alaikum Imrana,\n\n" +
    "I would like to order:\n\n" +
    product +
    "\n\nPlease share the details.";

    let url =
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(message);

    window.open(url,"_blank");

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Welcome Message

window.onload=function(){

console.log("Welcome to Delightful Studio");

}

// Thank You Alert (Optional)

function thanks(){

alert("Thank you for visiting Delightful Studio ❤️");

}