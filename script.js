// Animación al hacer scroll

const elements = document.querySelectorAll("section, .project-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

elements.forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});

// Botón volver arriba

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Navbar cambia al hacer scroll

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.background="rgba(13,17,23,.95)";

    }else{

        navbar.style.background="rgba(13,17,23,.75)";

    }

});
