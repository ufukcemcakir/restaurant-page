import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function setActive(clickedButton){
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
    
    clickedButton.classList.add("active");
}

function setNav(){
    const nav = document.createElement("nav");
    
    const homeButton = document.createElement("button");
    homeButton.classList.add("button");
    homeButton.textContent = "Home";
    homeButton.addEventListener('click', (e) => {
        if(e.target.classList.contains("active")) return;
        setActive(homeButton);
        loadHome();
    });
    const menuButton = document.createElement("button");
    menuButton.classList.add("button");
    menuButton.textContent="Menu";
    menuButton.addEventListener('click', (e) => {
        if(e.target.classList.contains("active")) return;
        setActive(menuButton);
        loadMenu();
    });
    const aboutButton = document.createElement("button");
    aboutButton.classList.add("button");
    aboutButton.textContent="About";
    aboutButton.addEventListener('click', (e) => {
        if(e.target.classList.contains("active")) return;
        setActive(aboutButton);
        loadAbout();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
}

function setHeader(){
const header = document.createElement("header");
header.classList.add("header");

const restaurantName = document.createElement("h1");
restaurantName.classList.add("restaurant-name");
restaurantName.textContent = "Ezgişin Sandviçleri";

header.appendChild(restaurantName);
header.appendChild(setNav());

return header;

}

function setBody(){
const main = document.createElement("main");
main.classList.add("main");
main.setAttribute("id","main");

return main;
}

function setFooter(){
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} Ezgi Dönger/Ufuk Cem Çakır`;
    
    footer.appendChild(copyright);

    return footer;
    }

function createHomepage(){
    const content = document.getElementById("content");
    content.appendChild(setHeader());
    content.appendChild(setBody());
    content.appendChild(setFooter());

    setActive(document.querySelector(".button"));
    loadHome();
}

export default createHomepage;