function abrirMenu(){
    const menu = document.querySelector("#barra-menu")

    if(menu.style.display=="flex"){
        menu.style.display = "none"
    } else{
        menu.style.display = "flex"
    }

}