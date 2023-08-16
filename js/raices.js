function calcular(){
    let a= document.getElementById("coeficienteA").value;
    let b= document.getElementById("coeficienteB").value;
    let c= document.getElementById("coeficienteC").value;
    let lista= document.getElementById("lista");
    lista.innerHTML= "<ul id='lista'></ul>";
    lista.appendChild(create("h3","RESOLUCIÓN:"))
    lista.appendChild(create("li","La ecuación cuadrática es: "));
    lista.appendChild(create("p",`${a}x² + ${b}x + ${c} = 0`,`${a} x cuadrado más ${b} x más ${c} igual a cero`))
    if(a != 1){
        lista.appendChild(create("li","Dividimos entre en primer coeficiente:"));
        lista.appendChild(create("p",`x² + (${b}/${a})x + (${c}/${a}) = 0`,`Obtenemos x al cuadrado más ${b} sobre ${a} x más ${c} sobre ${a} igual a cero`));
        b= redondeo(b/a);
        c= redondeo(c/a);
        lista.appendChild(create("p",`x² + (${b})x + (${c}) = 0`, `Haciendo las divisiones resulta, x al cuadrado más ${b} x más ${c} igual a cero`));
    }
    lista.appendChild(create("li","Completamos cuadrados", "Completamos cuadrados reescribiendo el segundo termino"));
    lista.appendChild(create("p",`x² + 2(${b}/2)x + (${b}/2)² + (${c}) = (${b}/2)²`, `En el segundo termino podemos reescribir ${b} como dos por ${b} entre dos,
             y sumamos el cuadrado de ${b} sobre 2 a ambos lados de la ecuación.`));
    b=b/2;
    lista.appendChild(create("p",`x² + 2(${b})x + (${b})² = (${b})² - (${c})`, `Haciendo las divisiones y pasando el tercer termino al otro extremo de la ecuación, 
    obtenemos x al cuadrado más dos por ${b} x más ${b} al cuadrado es igual a ${b} al cuadrado menos ${c}`));
    let dis= redondeo(Math.pow(b,2)-c);
    lista.appendChild(create("p",`(x + ${b})² = ${dis}`, `Ahora podemos factorizar en el lado izquierdo de la ecuación reemplazando por x más ${b} al cuadrado, mientras que en el lado derecho queda ${dis}`));
    let i ="";
    if(dis < 0){
        i= "i";
        dis = -1*dis;
    }
    lista.appendChild(create("li","Despejamos las raices"));
    lista.appendChild(create("p",`x + ${b} = ± √(${dis}) ${i}`,`Aplicamos la raiz cuadrada en ambos lados de la ecuación, en el lado derecho nos resulta dos posibles valores, donde x más ${b}, es igual a mas menos raiz de ${dis} ${i}`));
    lista.appendChild(create("p",`x = ${-b} ± √(${dis}) ${i}`, `Luego ${b} para al otro lado de la ecuación obteniendo dos respuestas`));
    lista.appendChild(create("li","Raices halladas: "));
    let sum= redondeo(Math.sqrt(dis));
    if(i == "i"){
        lista.appendChild(create("p",`x\u2081 = - ${b} + ${sum} ${i}`, "La primera raiz compleja obtenida sumando el discriminante"));
        lista.appendChild(create("p",`x\u2082 = - ${b} - ${sum} ${i}`, "La segunda raiz compleja obtenida restando el discriminante"));
    }else if(dis == 0){
        lista.appendChild(create("p",`x\u2081 = ${b}`, "En este caso el discriminante es cero, por lo que ambas raices son iguales"));
    }
    else{
        lista.appendChild(create("p",`x\u2081 = ${redondeo(-b + parseFloat(sum))}`,"La primera raiz obtenida sumando el discriminante"));
        lista.appendChild(create("p",`x\u2082 = ${redondeo(-b - sum)}`,"La segunda raiz obtenida restando el discriminante"));
    }

    let boton= document.createElement("button");
    boton.textContent = "Imprimir solución";
    boton.classList.add("botonR");
    boton.id="btnprint";
    boton.addEventListener("click", function() {
      window.print();
    });
    lista.appendChild(boton);

    let btnleer= document.createElement("button");
    btnleer.textContent = "Explicación por voz";
    btnleer.classList.add("botonR");
    btnleer.id="btnleer";
    btnleer.addEventListener("click", function() {
      leer();
    });
    lista.appendChild(btnleer);

    let btncancelar= document.createElement("button");
    btncancelar.textContent = "Cancelar lectura";
    btncancelar.classList.add("botonR");
    btncancelar.id="btncancelar";
    btncancelar.style.display = "none";
    btncancelar.addEventListener("click", function() {
      cancelarLeer();
    });
    lista.appendChild(btncancelar);
}

function create(ent, cont, des){
    if(des == undefined){
        des = cont;
    }
    let element= document.createElement(ent);
    element.classList.add("paso");
    element.setAttribute("data-descripition", des);
    element.textContent=cont.replace(/1x/g,"x").replace(/\+ -/g,"- ");
    return element;
}

function leer(){
    document.getElementById("btncancelar").style.display = "inline";
    let elementos = document.querySelectorAll(".paso");
    elementos[0].scrollIntoView({ block: "center" });

    elementos.forEach(function(elemento) {        
        var mensaje = new SpeechSynthesisUtterance(elemento.getAttribute("data-descripition"));
        mensaje.addEventListener("start", function() {
            console.log("Inicio de la lectura en voz alta.");
            console.log(elemento.textContent);
            elemento.style.backgroundColor = "yellow";
          });
          
          mensaje.addEventListener("end", function() {
            console.log("Fin de la lectura en voz alta.");
            elemento.removeAttribute("style");
          });        
        window.speechSynthesis.speak(mensaje);        
    });
}

function cancelarLeer(){
    window.speechSynthesis.cancel();
    var elementosConEstilo = document.querySelectorAll("[style]");
    elementosConEstilo.forEach(function(elemento) {
      elemento.removeAttribute("style");
    });
    document.getElementById("btncancelar").style.display = "none";
}

function redondeo(num){
    let ndec= num.toString().length - num.toString().indexOf('.') - 1;
    if(ndec > 6){
        return num.toFixed(6);
    }else{
        return num;
    }
}

/*
if(araiz.toString().length < 16){
    comp= b/(2*araiz);
}else{
    comp= b/2;
    araiz= `√(${a})`;
    aux= `/√(${a})`;
}*/
