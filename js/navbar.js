function chargePage(ent){
    var miDiv = document.getElementById("espacio");
    miDiv.innerHTML= '<iframe src="./pages/' + ent +'.html" id="frame"></iframe>';    
    var iframe= document.getElementById("frame");
    var contenidoAltura = iframe.contentWindow.document.body.scrollHeight;
    iframe.style.height = contenidoAltura + "px";
}