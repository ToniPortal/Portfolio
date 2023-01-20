document.addEventListener('DOMContentLoaded', async event => {
    console.log("all")
    document.querySelectorAll("button").forEach(function (element) {
        console.log("click")
        const action = element.getAttribute("action");
        if (action != "" && action != null && action != undefined) {
            element.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = `${action}`;
            })
        }
    });

    const loc = location; // Avoir l'adresse du site sans /

    document.querySelectorAll("button").forEach(function (element) {

        if (element.getAttribute("action") === loc.pathname) {

            element.setAttribute("disabled", "disabled");
            element.setAttribute("class", "active");

        }

    });

})

//    <%- include('./partials/head', {title:'Princi',script:'index',css:'index'}) %>