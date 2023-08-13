function helpPage(){
    var miDiv = document.getElementById("espacio");
    console.log("Pagina Ayuda");
    miDiv.innerHTML= '<iframe src="./pages/help.html" width="800" height="600"></iframe>';
}

function chargePage(ent){
    var miDiv = document.getElementById("espacio");
    console.log("Pagina Ayuda");
    miDiv.innerHTML= '<iframe src="./pages/' + ent +'.html" width="800" height="600"></iframe>';
}