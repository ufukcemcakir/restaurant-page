function createAbout(){
    const about = document.createElement("div");
    about.classList.add("about");

    const aboutContent = document.createElement('p');
    aboutContent.textContent = 'Biz';

    about.appendChild(aboutContent);

    return about;
}

function loadAbout(){
    const about = document.getElementById("main");
    about.textContent = "";
    about.appendChild(createAbout());
}

export default loadAbout;