/* ================= SKILL BAR ANIMATION ================= */

document.addEventListener("DOMContentLoaded", function () {

    const skillBars =
        document.querySelectorAll(".progress-bar");


    const observer =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const bar = entry.target;

                    const level =
                        bar.getAttribute("data-level");


                    bar.style.width =
                        level + "%";

                }

            });

        }, {

            threshold: 0.2

        });


    skillBars.forEach(function (bar) {

        observer.observe(bar);

    });

});



/* ================= CONTACT FORM ================= */

/*====Phone Number====*/
alert("JavaScript is working!");

const phoneNumber = "254743976279";

const form =
    document.getElementById("contactForm");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document .getElementById( "name" ) .value;
    const name = document .getElementById( "email" ) .value;
    const name = document .getElementById( "message" ) .value;

    const whatsappmessage
          "Hello Eli!\n\n" +
          "Name: "+name+"\n" +
          "Email: "+ email+ "\n\n" +
          "Message;\n" + Message;

    const whatsappURL =
         "https://web.whatsapp.com/" +
         phoneNumber +
         "?text=" +
         encodeURIComponent(text);
    window .location.href = whatsappURL

});
