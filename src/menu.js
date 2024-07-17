function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu");

    
  const menuContent = document.createElement('p');
  menuContent.textContent = 'Kuş-Kaş';

  menu.appendChild(menuContent);

  return menu;
}

function loadMenu(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;