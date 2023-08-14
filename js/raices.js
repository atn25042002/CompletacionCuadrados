function calcular(){
    let a= document.getElementById("coeficienteA").value;
    let b= document.getElementById("coeficienteB").value;
    let c= document.getElementById("coeficienteC").value;
    let lista= document.getElementById("lista");
    lista.innerHTML= "<ul id='lista'></ul>";
    lista.appendChild(create("li","La ecuación cuadrática es: "));
    lista.appendChild(create("p",`${a}x² + ${b}x + ${c} = 0`))
    if(a != 1){
        lista.appendChild(create("li","Dividimos entre en primer coeficiente:"));
        lista.appendChild(create("p",`x² + (${b}/${a})x + (${c}/${a}) = 0`));
        b= b/a;
        c= c/a;
        lista.appendChild(create("p",`x² + (${b})x + (${c}) = 0`));
    }
    lista.appendChild(create("li","Completamos cuadrados"));
    lista.appendChild(create("p",`x² + 2(${b}/2)x + (${b}/2)² + (${c}) = (${b}/2)²`));
    lista.appendChild(create("p",`x² + 2(${b/2})x + (${b/2})² = (${b/2})² - (${c})`));
    let dis= b*b/4-c;
    lista.appendChild(create("p",`(x + ${b/2})² = ${dis}`));
    let i ="";
    if(dis < 0){
        i= "i";
        dis = -1*dis;
    }
    lista.appendChild(create("li","Despejamos las raices"));
    lista.appendChild(create("p",`x + ${b/2} = ± √(${dis})${i}`));
    lista.appendChild(create("p",`x = - ${b/2} ± √(${dis})${i}`));
    lista.appendChild(create("li","Raices halladas: "));
    if(i == "i"){
        lista.appendChild(create("p",`x\u2081 = - ${b/2} + √(${dis})${i}`));
        lista.appendChild(create("p",`x\u2082 = - ${b/2} - √(${dis})${i}`));
    }else if(dis == 0){
        lista.appendChild(create("p",`x\u2081 = ${b/2}`));
    }
    else{
        lista.appendChild(create("p",`x\u2081 = ${-b/2 + Math.sqrt(dis)}`));
        lista.appendChild(create("p",`x\u2082 = ${-b/2 - Math.sqrt(dis)}`));
    }
}

function create(ent, cont){
    let element= document.createElement(ent);
    element.classList.add("paso");
    element.textContent=cont.replace(/1x/g,"x");
    return element;
}

/*
if(araiz.toString().length < 16){
    comp= b/(2*araiz);
}else{
    comp= b/2;
    araiz= `√(${a})`;
    aux= `/√(${a})`;
}*/