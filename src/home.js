function createHome(){
    const home = document.createElement("div");
    home.classList.add("home");

    const homeContent = document.createElement('p');
    homeContent.textContent = 'Hoşgeldiniz!';

    home.appendChild(homeContent);

    return home;
}

function loadHome(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;
