function calcular(){
    let a= document.getElementById("coeficienteA").value;
    let b= document.getElementById("coeficienteB").value;
    let c= document.getElementById("coeficienteC").value;
    let lista= document.getElementById("lista");
    lista.innerHTML= "<ul id='lista'></ul>";
    lista.appendChild(create("h3","RESOLUCIÓN:"))
    lista.appendChild(create("li","La ecuación cuadrática es: "));
    lista.appendChild(create("p",`${a}x² + ${b}x + ${c} = 0`))
    if(a != 1){
        lista.appendChild(create("li","Dividimos entre en primer coeficiente:"));
        lista.appendChild(create("p",`x² + (${b}/${a})x + (${c}/${a}) = 0`));
        b= redondeo(b/a);
        c= redondeo(c/a);
        lista.appendChild(create("p",`x² + (${b})x + (${c}) = 0`));
    }
    lista.appendChild(create("li","Completamos cuadrados"));
    lista.appendChild(create("p",`x² + 2(${b}/2)x + (${b}/2)² + (${c}) = (${b}/2)²`));
    b=b/2;
    lista.appendChild(create("p",`x² + 2(${b})x + (${b})² = (${b})² - (${c})`));
    let dis= redondeo(Math.pow(b,2)-c);
    lista.appendChild(create("p",`(x + ${b})² = ${dis}`));
    let i ="";
    if(dis < 0){
        i= "i";
        dis = -1*dis;
    }
    lista.appendChild(create("li","Despejamos las raices"));
    lista.appendChild(create("p",`x + ${b} = ± √(${dis}) ${i}`));
    lista.appendChild(create("p",`x = ${-b} ± √(${dis}) ${i}`));
    lista.appendChild(create("li","Raices halladas: "));
    let sum= redondeo(Math.sqrt(dis));
    if(i == "i"){
        lista.appendChild(create("p",`x\u2081 = - ${b} + ${sum} ${i}`));
        lista.appendChild(create("p",`x\u2082 = - ${b} - ${sum} ${i}`));
    }else if(dis == 0){
        lista.appendChild(create("p",`x\u2081 = ${b}`));
    }
    else{
        lista.appendChild(create("p",`x\u2081 = ${-b + parseFloat(sum)}`));
        lista.appendChild(create("p",`x\u2082 = ${-b - sum}`));
    }
    let boton= document.createElement("button");
    boton.textContent = "Imprimir solución";
    boton.classList.add("boton");
    
    boton.addEventListener("click", function() {
      window.print();
    });

    lista.appendChild(boton);
}

function create(ent, cont){
    let element= document.createElement(ent);
    element.classList.add("paso");
    element.textContent=cont.replace(/1x/g,"x").replace(/\+ -/g,"- ");
    return element;
}

function redondeo(num){
    if(num.toString().length > 6){
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